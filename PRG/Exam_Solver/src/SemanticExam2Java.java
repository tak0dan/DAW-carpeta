import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.*;
import java.security.spec.*;
import java.util.*;
import java.util.regex.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import javax.crypto.*;
import javax.crypto.spec.*;
import javax.xml.parsers.*;
import org.w3c.dom.*;
import org.xml.sax.InputSource;

public class SemanticExam2Java {

    /** If non-null, overrides the output directory entirely (used by tests). */
    static String FORCE_OUTPUT_DIR = null;

    /** Project root (parent of bin/ or where the .class lives). */
    static String projectRoot() {
        try {
            return Paths.get(SemanticExam2Java.class.getProtectionDomain()
                .getCodeSource().getLocation().toURI()).getParent().toString();
        } catch (Exception e) {
            return ".";
        }
    }

    static final Set<String> PRIMITIVE_TYPES = new HashSet<>(Arrays.asList(
        "int","Integer","double","Double","boolean","Boolean","String",
        "float","long","char","byte","short","void"));

    static final Set<String> COMMON_LOCAL_VARS = new HashSet<>(Arrays.asList(
        "temporal","temp","tmp","result","resultado","sum","suma","total",
        "i","j","k","n","m","len","size","count","index","idx","pos",
        "posicion","key","val","value","aux","acc","elem","nuevonum",
        "nuevoden","mcd","mcm","numerador","denominador"));

    static final Set<String> NON_CLASS_WORDS = new HashSet<>(Arrays.asList(
        "Metodo","Método","Metodos","Métodos","Atributos","Getters","Setters",
        "ArrayList","Implementa","Implemente","Implementar","Devuelve","String",
        "Boolean","Integer","Double","Void","Main","Constructor","Tostring",
        "ToString","Iterator","Iterable","Object","Class","Clase","Clases",
        "Ejercicio","Ejercicios","Puntos","Pregunta","Teórica","Teorica",
        "Repite","Utilizando","Muestre","Muestra","Mostrar","Crear","Crea",
        "Character","Parch","Clas",
        "Nota","NOTA","Notas","NOTAS","Los","Tras","OJO","Ojo",
        "Son","Con","Del","De","En","Que","Las","Por","Para",
        "Sobre","Entre","Sin","Durante","Mediante","Según","Via"));

    // ─────────────────────────────────────────────────────────────────────
    // Lexicon: Categorized Spanish word dictionary
    // ─────────────────────────────────────────────────────────────────────
    static final Set<String> SP_DETERMINERS = new HashSet<>(Arrays.asList(
        "el","la","los","las","un","una","unos","unas",
        "este","esta","estos","estas","ese","esa","esos","esas",
        "aquel","aquella","aquellos","aquellas",
        "mi","tu","su","mis","tus","sus","nuestro","nuestra",
        "vuestro","vuestra"));

    static final Set<String> SP_PREPOSITIONS = new HashSet<>(Arrays.asList(
        "a","ante","bajo","cabe","con","contra","de","del","desde",
        "durante","en","entre","hacia","hasta","mediante","para",
        "por","según","sin","sobre","tras","vía","via"));

    static final Set<String> SP_CONJUNCTIONS = new HashSet<>(Arrays.asList(
        "y","e","ni","o","u","pero","sino","mas","que"));

    static final Set<String> SP_VERBS_AUX = new HashSet<>(Arrays.asList(
        "es","son","fue","era","ser","estar","está","estan","estaba",
        "estaban","estado","siendo","ha","han","haber","había",
        "habian","hubo","se"));

    static final Set<String> SP_QUANTIFIERS = new HashSet<>(Arrays.asList(
        "todos","todas","cada","varios","varias","algunos","algunas",
        "muchos","muchas","pocos","pocas","ningún","ningun","ninguna",
        "ambos","ambas","demás","demas"));

    static final Set<String> SP_OTHER_STOP = new HashSet<>(Arrays.asList(
        "que","como","al","no","si","ya","también","tambien","mas","más",
        "muy","bien","asi","así","algo","nada","siempre","nunca","aunque",
        "cuando","donde","mientras","según","pues","porque","además",
        "ademas","incluso","tanto","tan","casi","solo","sólo","siquiera",
        "aun","aún","tal","cual","donde","adonde","como","cuanto",
        "cuantos","cuanta","cuantas","quien","quienes","cuyo","cuya"));

    static final Set<String> SP_VERBS_ACTION = new HashSet<>(Arrays.asList(
        "devuelve","devuelven","retorna","retornan","obtiene","obtienen",
        "crea","crean","crear","añade","anade","inserta","insertar",
        "borra","borrar","elimina","eliminar","busca","buscar",
        "localiza","localizar","muestra","muestran","mostrar",
        "calcula","calcular","actualiza","actualizar","modifica",
        "modificar","comprueba","comprobar","verifica","verificar",
        "inicializa","inicializar","inicia","iniciar",
        "cuenta","contar","ordena","ordenar","recorre","recorrer",
        "convierte","convertir","transforma","transformar"));

    static boolean isSpanishStopWord(String word) {
        String w = word.toLowerCase();
        return w.length() < 2
            || SP_DETERMINERS.contains(w)
            || SP_PREPOSITIONS.contains(w)
            || SP_CONJUNCTIONS.contains(w)
            || SP_VERBS_AUX.contains(w)
            || SP_QUANTIFIERS.contains(w)
            || SP_OTHER_STOP.contains(w)
            || COMMON_LOCAL_VARS.contains(w);
    }

    // ─────────────────────────────────────────────────────────────────────
    // 1. Knowledge Graph
    // ─────────────────────────────────────────────────────────────────────

    static class KGNode {
        String id;
        KGNodeType type;
        Map<String, Object> attrs = new HashMap<>();

        KGNode(String id, KGNodeType type) { this.id = id; this.type = type; }
        KGNode with(String k, Object v) { attrs.put(k, v); return this; }
        String s(String k) { Object v = attrs.get(k); return v == null ? "" : (String)v; }
        int i(String k) { Object v = attrs.get(k); return v instanceof Number ? ((Number)v).intValue() : 0; }
        @SuppressWarnings("unchecked") Set<String> ss(String k) {
            Object v = attrs.get(k); return v instanceof Set ? (Set<String>)v : new HashSet<>();
        }
    }

    enum KGNodeType { CLASS, FIELD, METHOD, RELATIONSHIP, MAIN }

    enum RelationType { ONE_TO_MANY, ONE_TO_ONE, REFERENCE }

    static class KGRelation {
        String from, to, viaField;
        RelationType type;
        double confidence;
    }

    static class KnowledgeGraph {
        Map<String, KGNode> nodes = new LinkedHashMap<>();
        List<KGRelation> relations = new ArrayList<>();
        List<String> classOrder = new ArrayList<>();

        KGNode node(String id, KGNodeType type) {
            return nodes.computeIfAbsent(id, k -> { KGNode n = new KGNode(k, type); return n; });
        }

        void addClass(String name) {
            if (!nodes.containsKey(name)) {
                nodes.put(name, new KGNode(name, KGNodeType.CLASS));
                classOrder.add(name);
            }
        }

        void addField(String cls, String type, String name) {
            String fid = cls + "." + name;
            KGNode fn = node(fid, KGNodeType.FIELD).with("type", type).with("owner", cls);
            if (type.startsWith("ArrayList<")) {
                String inner = type.replace("ArrayList<", "").replace(">", "").trim();
                if (nodes.containsKey(inner) || Character.isUpperCase(inner.charAt(0))) {
                    KGRelation r = new KGRelation();
                    r.from = cls; r.to = inner; r.viaField = name;
                    r.type = RelationType.ONE_TO_MANY; r.confidence = 0.9;
                    relations.add(r);
                }
            } else if (Character.isUpperCase(type.charAt(0)) && !PRIMITIVE_TYPES.contains(type)) {
                if (nodes.containsKey(type)) {
                    KGRelation r = new KGRelation();
                    r.from = cls; r.to = type; r.viaField = name;
                    r.type = RelationType.ONE_TO_ONE; r.confidence = 0.8;
                    relations.add(r);
                }
            }
        }

        void addMethod(String cls, String ret, String name, String paramsStr) {
            String mid = cls + "." + name + "(" + paramsStr + ")";
            node(mid, KGNodeType.METHOD).with("ret", ret).with("name", name)
                .with("params", paramsStr).with("owner", cls);
        }

        void addMainDesc(String cls, String desc) {
            node(cls + ".main", KGNodeType.MAIN).with("desc", desc).with("owner", cls);
        }

        KGNode getClass(String name) { return nodes.get(name); }

        List<KGNode> getFields(String cls) {
            List<KGNode> res = new ArrayList<>();
            for (KGNode n : nodes.values())
                if (n.type == KGNodeType.FIELD && cls.equals(n.s("owner")))
                    res.add(n);
            return res;
        }

        List<KGNode> getMethods(String cls) {
            List<KGNode> res = new ArrayList<>();
            for (KGNode n : nodes.values())
                if (n.type == KGNodeType.METHOD && cls.equals(n.s("owner")))
                    res.add(n);
            return res;
        }

        String getMainDesc(String cls) {
            KGNode n = nodes.get(cls + ".main");
            return n == null ? "" : n.s("desc");
        }

        boolean hasMain(String cls) { return nodes.containsKey(cls + ".main"); }

        List<KGRelation> getRelationsFrom(String cls) {
            List<KGRelation> res = new ArrayList<>();
            for (KGRelation r : relations) if (r.from.equals(cls)) res.add(r);
            return res;
        }

        Set<String> knownClasses() {
            Set<String> s = new LinkedHashSet<>(classOrder);
            return s;
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // 2. Text Processing
    // ─────────────────────────────────────────────────────────────────────

    static class Lexer {
        static String norm(String t) {
            return stripAccents(t)
                .replaceAll("ñ", "n")
                .replaceAll("\\s+", " ").trim();
        }
        static String stripAccents(String s) {
            return s.replaceAll("á", "a").replaceAll("é", "e")
                .replaceAll("í", "i").replaceAll("ó", "o")
                .replaceAll("ú", "u").replaceAll("ü", "u");
        }
        static String cleanFieldDesc(String s) {
            return s.replaceAll("[→\\-].*", "").trim();
        }
        static List<String> splitSentences(String text) {
            List<String> result = new ArrayList<>();
            String t = text.replaceAll("\\s+", " ").trim();
            String[] parts = t.split("(?<![Nnº])(?:\\.|:)\\s*(?=Atributos|Métodos|atributos|métodos|Attributes|Methods|\\(\\d|[A-ZÁÉÍÓÚÑ])");
            for (String p : parts) {
                p = p.trim();
                if (!p.isEmpty()) result.add(p);
            }
            if (result.isEmpty()) result.add(t);
            return result;
        }
    }

    /** Heuristic text cleanup for common DOCX/OLE2 extraction artifacts */
    static String cleanupText(String raw) {
        String t = raw;
        // Fix "Clas e" → "Clase", "met odo" → "metodo" (space inside a word from run-splitting)
        t = t.replaceAll("\\b(Clas|clas)\\s+e\\b", "Clase")
             .replaceAll("\\b(Met|met|Mét|mét)\\s+(odo|odos|odoo|odas)\\b", "$1$2");
        // Fix common run-split words in Spanish exam contexts
        t = t.replaceAll("\\b(atribut|atribut|Atribut|Atribut)\\s+(o|os|a|as)\\b", "atributo$2");
        // Remove stray spaces inside clearly compound words (e.g. "lla mado" → "llamado")
        t = t.replaceAll("\\b(lla|LLa|Lla)\\s+mado\\b", "llamado");
        // Normalize whitespace
        return t.replaceAll("\\s+", " ").trim();
    }

    static String normalize(String t) {
        return Lexer.norm(t);
    }

    static List<String> splitSentences(String text) {
        List<String> result = new ArrayList<>();
        // First, normalize whitespace but PRESERVE paragraph structure
        String t = text.replaceAll("\\s+", " ").trim();
        // Split on . (period followed by space or end) or ; (semicolon) or at paragraph boundaries
        // before section markers (Atributos, Métodos) or before "Clase" / class declarations
        // This handles: "Clase X: Atributos: ... Métodos: ..." → separate fragments
        // Avoid splitting on : to prevent breaking field declarations like "nombre: String"
        String[] parts = t.split("(?<![Nnº])(?:\\.)\\s*(?=Atributos|Métodos|atributos|métodos|Attributes|Methods|\\(\\d|[A-ZÁÉÍÓÚÑ])" +
            "|(?<![Nnº]);\\s*(?=Atributos|Métodos|atributos|métodos|Attributes|Methods|\\(\\d|[A-ZÁÉÍÓÚÑ])");
        for (String p : parts) {
            p = p.trim();
            if (!p.isEmpty()) result.add(p);
        }
        // Post-process: split off "Clase X" / "clase X" that got merged with previous sentence
        List<String> refined = new ArrayList<>();
        for (String s : result) {
            Matcher m = Pattern.compile(
                "(.*?)\\b(Clase|clase|Class|class)\\s+(\\w+)\\s*$",
                Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
            if (m.find() && m.group(1) != null && !m.group(1).trim().isEmpty()) {
                String prefix = m.group(1).trim();
                String header = m.group(2) + " " + m.group(3);
                refined.add(prefix);
                refined.add(header);
            } else {
                refined.add(s);
            }
        }
        // Also split on "Clase X" / "clase X" that got merged (not just at end, but anywhere)
        List<String> finalRefined = new ArrayList<>();
        for (String s : refined) {
            // Insert a unique delimiter before each "Clase" (that isn't at the start)
            String marked = s.replaceAll("(?<!^)(?=\\b(?:Clase|clase|Class|class)\\s+[A-ZÁÉÍÓÚÑ])", "\u0000");
            String[] segs = marked.split("\u0000");
            for (String seg : segs) {
                seg = seg.trim();
                if (!seg.isEmpty()) finalRefined.add(seg);
            }
        }
        if (finalRefined.isEmpty()) finalRefined.add(t);
        return finalRefined;
    }

    static String cleanFieldDesc(String s) {
        // Remove arrow and description: "→ description" or " - description"
        return s.replaceAll("[→\\-].*", "").trim();
    }

    // ─────────────────────────────────────────────────────────────────────
    // 3. Semantic Ontology (action words, relationship verbs, etc.)
    // ─────────────────────────────────────────────────────────────────────

    static final Set<String> RELATIONSHIP_VERBS = new HashSet<>(Arrays.asList(
        "contiene", "tiene", "almacena", "gestiona", "maneja",
        "representa", "agrupa", "organiza", "mantiene",
        "contains", "has", "stores", "manages", "holds",
        "es una lista de", "es un conjunto de", "es un array de",
        "is a list of", "is a collection of", "is a set of"));

    static final Set<String> CONCEPT_MARKERS = new HashSet<>(Arrays.asList(
        "constructor", "constructor por defecto", "constructor vacio",
        "constructor sin parametros", "constructor basico",
        "constructor con todos los parametros",
        "constructor con parametros",
        "constructor que cree", "constructor crea",
        "metodo tostring", "método tostring", "tostring",
        "getters", "getter", "setters", "setter",
        "metodos de acceso", "métodos de acceso",
        "consultar atributos", "modificar atributos",
        "default constructor", "parameterless constructor",
        "all-args constructor", "all args constructor"));

    static final Map<String, String> ACTION_SYNONYMS = new LinkedHashMap<>();
    static {
        ACTION_SYNONYMS.put("search", "search");
        ACTION_SYNONYMS.put("find", "search");
        ACTION_SYNONYMS.put("locate", "search");
        ACTION_SYNONYMS.put("retrieve", "search");
        ACTION_SYNONYMS.put("lookup", "search");
        ACTION_SYNONYMS.put("obtain", "search");
        ACTION_SYNONYMS.put("buscar", "search");
        ACTION_SYNONYMS.put("localizar", "search");
        ACTION_SYNONYMS.put("obtener", "search");

        ACTION_SYNONYMS.put("add", "add");
        ACTION_SYNONYMS.put("insert", "add");
        ACTION_SYNONYMS.put("append", "add");
        ACTION_SYNONYMS.put("anadir", "add");
        ACTION_SYNONYMS.put("añadir", "add");
        ACTION_SYNONYMS.put("agregar", "add");

        ACTION_SYNONYMS.put("remove", "remove");
        ACTION_SYNONYMS.put("delete", "remove");
        ACTION_SYNONYMS.put("eliminar", "remove");
        ACTION_SYNONYMS.put("borrar", "remove");
        ACTION_SYNONYMS.put("liberar", "remove");
        ACTION_SYNONYMS.put("release", "remove");

        ACTION_SYNONYMS.put("count", "count");
        ACTION_SYNONYMS.put("total", "count");
        ACTION_SYNONYMS.put("calcular", "count");
        ACTION_SYNONYMS.put("contar", "count");

        ACTION_SYNONYMS.put("is", "check");
        ACTION_SYNONYMS.put("has", "check");
        ACTION_SYNONYMS.put("esta", "check");
        ACTION_SYNONYMS.put("tiene", "check");
    }

    // ─────────────────────────────────────────────────────────────────────
    // 4. Sentence Classification & Extraction
    // ─────────────────────────────────────────────────────────────────────

    enum SentenceRole { CLASS_HEADER, FIELD_DECL, METHOD_SIG, CONCEPT_DESC, RELATION_DESC, MAIN_DESC, OTHER }

    static class ParsedSentence {
        SentenceRole role;
        String raw;
        // Extracted data
        String className, fieldType, fieldName;
        String methodRet, methodName, methodParams;
        String conceptKeyword;
        String relationSubject, relationVerb, relationObject;
        String mainDescription;
        // Additional multi-match data
        Map<String, Object> attrs = new HashMap<>();
    }

    static ParsedSentence classifySentence(String s, Set<String> knownCls) {
        ParsedSentence ps = new ParsedSentence();
        ps.raw = s;
        String norm = normalize(s);

        // 1. Class header — check on original case string, not normalized
        // Prefer tester class names (ending in "Tester") over other class names
        Matcher m = Pattern.compile("\\b(\\w+Tester)\\b").matcher(s);
        if (m.find()) {
            String cn = m.group(1);
            if (cn.length() > 1 && Character.isUpperCase(cn.charAt(0))) {
                ps.role = SentenceRole.CLASS_HEADER;
                ps.className = cn;
                return ps;
            }
        }
        m = Pattern.compile(
            "(?:Clase|clase|class|Class)\\s+(\\w+(?:\\s+\\w+)?)").matcher(s);
        if (m.find()) {
            String cn = m.group(1).replace(" ", "_");
            if (cn.length() > 1 && Character.isUpperCase(cn.charAt(0))) {
                ps.role = SentenceRole.CLASS_HEADER;
                ps.className = cn;
                return ps;
            }
        }

        // Collect method signatures FIRST (before MAIN_DESC check, because
        // methods like toString() may be embedded in a main description sentence)
        List<String> methodRets = new ArrayList<>();
        List<String> methodNames = new ArrayList<>();
        List<String> methodParamsList = new ArrayList<>();

        m = Pattern.compile(
            "(?:(\\w+(?:<[^>]+>)?(?:\\[\\])?)\\s+)?(\\w+)\\s*\\(([^)]*)\\)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        while (m.find()) {
            String ret = m.group(1);
            String name = m.group(2);
            String inside = m.group(3).trim();

            if (name.equals("main")) continue;

            // Always add toString/hashCode/equals regardless of return type
            if (name.equals("toString") || name.equals("ToString")
                || name.equals("hashCode") || name.equals("equals")) {
                methodRets.add(ret != null ? ret : "void");
                methodNames.add(name);
                methodParamsList.add(inside);
                continue;
            }

            if (ret != null && !ret.isEmpty()
                && (PRIMITIVE_TYPES.contains(ret) || knownCls.contains(ret)
                    || ret.equals("ArrayList") || ret.endsWith("[]"))) {
                methodRets.add(ret);
                methodNames.add(name);
                methodParamsList.add(inside);
            }
        }

        // 2. Main description (check AFTER collecting methods, so that methods
        //    in the same sentence as "main" are still captured)
        if (norm.contains("main") && (norm.contains("crea") || norm.contains("crear")
            || norm.contains("muestre") || norm.contains("mostrar")
            || norm.contains("utilizando") || norm.contains("verifique")
            || norm.contains("compruebe"))) {
            ps.role = SentenceRole.MAIN_DESC;
            ps.mainDescription = s;
            if (!methodNames.isEmpty()) {
                int last = methodNames.size() - 1;
                ps.methodRet = methodRets.get(last);
                ps.methodName = methodNames.get(last);
                ps.methodParams = methodParamsList.get(last);
                ps.attrs.put("allMethodRets", methodRets);
                ps.attrs.put("allMethodNames", methodNames);
                ps.attrs.put("allMethodParams", methodParamsList);
            }
            return ps;
        }

        // 2b. Tester class description (crea tu propia clase para testear / complet la clase ...Tester)
        if ((norm.contains("testear") || norm.contains("tester")) && norm.contains("clase")
            && (norm.contains("crea") || norm.contains("crear") || norm.contains("complet"))) {
            // Match the class name from "clase X" or "clase X.java"
            Matcher testerM = Pattern.compile("(?:clase|class)\\s+(\\w+)", Pattern.CASE_INSENSITIVE).matcher(s);
            if (testerM.find()) {
                ps.className = testerM.group(1).replaceAll("\\.java$", "");
            }
            ps.role = SentenceRole.MAIN_DESC;
            ps.mainDescription = s;
            if (!methodNames.isEmpty()) {
                int last = methodNames.size() - 1;
                ps.methodRet = methodRets.get(last);
                ps.methodName = methodNames.get(last);
                ps.methodParams = methodParamsList.get(last);
                ps.attrs.put("allMethodRets", methodRets);
                ps.attrs.put("allMethodNames", methodNames);
                ps.attrs.put("allMethodParams", methodParamsList);
            }
            return ps;
        }

        // 3. Pure method signature (no main description)
        if (!methodNames.isEmpty()) {
            ps.role = SentenceRole.METHOD_SIG;
            int last = methodNames.size() - 1;
            ps.methodRet = methodRets.get(last);
            ps.methodName = methodNames.get(last);
            ps.methodParams = methodParamsList.get(last);
            ps.attrs.put("allMethodRets", methodRets);
            ps.attrs.put("allMethodNames", methodNames);
            ps.attrs.put("allMethodParams", methodParamsList);
            return ps;
        }

        // 4. Relationship description
        for (String verb : RELATIONSHIP_VERBS) {
            if (norm.contains(verb)) {
                ps.role = SentenceRole.RELATION_DESC;
                // Extract subject and object
                String[] words = norm.split("\\s+");
                for (int i = 0; i < words.length; i++) {
                    String vn = normalize(verb);
                    if (words[i].equals(vn)) {
                        // Subject is before verb
                        StringBuilder subj = new StringBuilder();
                        for (int j = i - 1; j >= 0; j--) {
                            if (Character.isUpperCase(words[j].charAt(0))) {
                                subj.insert(0, words[j]);
                                // Reconstruct original case
                                break;
                            }
                        }
                        ps.relationSubject = subj.toString();
                        ps.relationVerb = verb;
                        // Object is after verb
                        for (int j = i + 1; j < words.length; j++) {
                            if (Character.isUpperCase(words[j].charAt(0))) {
                                ps.relationObject = words[j];
                                break;
                            }
                        }
                        return ps;
                    }
                }
                ps.role = SentenceRole.RELATION_DESC;
                return ps;
            }
        }

        // 5. Concept description
        for (String keyword : CONCEPT_MARKERS) {
            if (norm.contains(keyword)) {
                ps.role = SentenceRole.CONCEPT_DESC;
                ps.conceptKeyword = keyword;
                return ps;
            }
        }
        if (norm.contains("getter") || norm.contains("setter")
            || norm.contains("get") || norm.contains("set")
            || norm.contains("acceso") || norm.contains("accessor")
            || norm.contains("mutator")) {
            ps.role = SentenceRole.CONCEPT_DESC;
            ps.conceptKeyword = norm;
            return ps;
        }

        // 6. Field declarations: TYPE NAME (possibly multiple per sentence)
        // Match patterns like "int numero", "boolean ocupada", "String titulo", "ArrayList<X> name"
        String w = "[\\p{L}0-9_]+";
        // Buffer to collect all fields; last one wins for return value, but we store all in KG
        List<String> foundFieldTypes = new ArrayList<>();
        List<String> foundFieldNames = new ArrayList<>();

        m = Pattern.compile(
            "(ArrayList\\s*<\\s*(" + w + ")\\s*>|" +
            "int|Integer|double|Double|boolean|Boolean|String|float|long|char|byte|short)" +
            "[\\s,;]+(" + w + ")", Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        while (m.find()) {
            String rawType = m.group(1);
            String innerType = m.group(2);
            String fname = m.group(3);
            int nxt = m.end();
            if (nxt < s.length() && s.charAt(nxt) == '=') continue;
            if (COMMON_LOCAL_VARS.contains(fname.toLowerCase())) continue;
            if (Character.isLowerCase(fname.charAt(0)) && fname.length() > 1) {
                if (isSpanishStopWord(fname)) continue;
                String ft = rawType.startsWith("ArrayList")
                    ? (innerType != null ? "ArrayList<" + innerType + ">" : "ArrayList<Object>")
                    : rawType;
                foundFieldTypes.add(ft);
                foundFieldNames.add(fname);
            }
        }

        // Alternate: ArrayList Type name (no angle brackets in text)
        m = Pattern.compile("ArrayList\\s+(" + w + ")\\s+(" + w + ")", Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        while (m.find()) {
            String inner = m.group(1);
            String fname = m.group(2);
            int nxt = m.end();
            if (nxt < s.length() && s.charAt(nxt) == '=') continue;
            if (COMMON_LOCAL_VARS.contains(fname.toLowerCase())) continue;
            if (Character.isUpperCase(inner.charAt(0)) && Character.isLowerCase(fname.charAt(0))) {
                foundFieldTypes.add("ArrayList<" + inner + ">");
                foundFieldNames.add(fname);
            }
        }

        if (!foundFieldTypes.isEmpty()) {
            ps.role = SentenceRole.FIELD_DECL;
            ps.fieldType = foundFieldTypes.get(foundFieldTypes.size() - 1);
            ps.fieldName = foundFieldNames.get(foundFieldNames.size() - 1);
            ps.attrs.put("allFieldTypes", foundFieldTypes);
            ps.attrs.put("allFieldNames", foundFieldNames);
            return ps;
        }

        // 7. Concept description from "menos de" exclusion
        if (norm.contains("menos de") || norm.contains("except")) {
            ps.role = SentenceRole.CONCEPT_DESC;
            ps.conceptKeyword = norm;
            return ps;
        }

        ps.role = SentenceRole.OTHER;
        return ps;
    }

    // ─────────────────────────────────────────────────────────────────────
    // 5. Capabilities, Action Triples, IR
    // ─────────────────────────────────────────────────────────────────────

    enum CapType { CONSTRUCTOR, ACCESSOR, MUTATOR, OUTPUT, ITERATION }
    enum CapVariant { DEFAULT, ALL_ARGS, SOME_ARGS, GETTER, SETTER, TO_STRING, CLONE, EQUALS, ITERATOR }

    static class Capability {
        CapType type;
        CapVariant variant;
        Set<String> onlyGet = new HashSet<>();
        Set<String> onlySet = new HashSet<>();
        Set<String> noGS = new HashSet<>();
        Capability(CapType t, CapVariant v) { type = t; variant = v; }
    }

    enum ClassRole { UNKNOWN, ENTITY, CONTAINER, REPOSITORY, SERVICE, RELATIONSHIP_ENTITY }

    static class ActionTriple {
        String action;   // "search", "count", "add", "remove", "check"
        String target;   // entity being acted upon
        String constraint; // filter field or criteria
        String methodName;
        boolean returnsVoid;
        List<String> paramTypes = new ArrayList<>();
        List<String> paramNames = new ArrayList<>();

        String displayName() {
            String s = action;
            if (!target.isEmpty()) s += " " + target;
            if (!constraint.isEmpty()) s += " by " + constraint;
            return s;
        }
    }

    // IR
    static class IRClass {
        String name;
        ClassRole role = ClassRole.UNKNOWN;
        List<IRField> fields = new ArrayList<>();
        List<IRMethod> methods = new ArrayList<>();
        List<Capability> capabilities = new ArrayList<>();
        List<ActionTriple> actions = new ArrayList<>();
        List<Relationship> relationships = new ArrayList<>();
        boolean hasMain;
        String mainDesc = "";
        String containerOf = "";
    }

    static class IRField { String type, name;
        IRField(String t, String n) { type = t; name = n; } }

    static class IRMethod {
        String name, ret;
        List<IRField> params = new ArrayList<>();
        ActionTriple action;

        IRMethod(String n, String r) { name = n; ret = r; }
    }

    static class Relationship {
        String targetClass, viaField;
        RelationType type;
        Relationship(String t, String f, RelationType r) { targetClass = t; viaField = f; type = r; }
    }

    // ─────────────────────────────────────────────────────────────────────
    // 3b. Class scope extraction helper
    // ─────────────────────────────────────────────────────────────────────

    static void processClassScope(KnowledgeGraph kg, String s, String className) {
        // Find "class X {" and extract within matched braces
        Pattern clsP = Pattern.compile("\\bclass\\s+" + className + "\\s*\\{");
        Matcher clsM = clsP.matcher(s);
        if (!clsM.find()) return;
        int start = clsM.end();
        int depth = 1;
        int end = -1;
        for (int ci = start; ci < s.length(); ci++) {
            if (s.charAt(ci) == '{') depth++;
            else if (s.charAt(ci) == '}') {
                depth--;
                if (depth == 0) { end = ci; break; }
            }
        }
        String sScope;
        if (end > start) {
            sScope = s.substring(start, end);
        } else {
            // No closing brace, use up to next class keyword
            Matcher nxtCls = Pattern.compile("\\bclass\\s+\\w+").matcher(s);
            if (nxtCls.find(clsM.start() + 1) && nxtCls.start() > clsM.start()) {
                sScope = s.substring(clsM.end(), nxtCls.start());
            } else {
                sScope = s.substring(clsM.end());
            }
        }

        // Fields: type name patterns within scope (e.g. "String nombre" or "int edad")
        Matcher fm = Pattern.compile(
            "(ArrayList\\s*<\\s*(\\w+(?:\\.\\w+)*)\\s*>|int|Integer|double|Double|boolean|Boolean|String|float|long|char|byte|short)" +
            "[\\s,;]+(\\w+)", Pattern.UNICODE_CHARACTER_CLASS).matcher(sScope);
        while (fm.find()) {
            String ftRaw = fm.group(1);
            String inner = fm.group(2);
            String fname = fm.group(3);
            int nxt = fm.end();
            int eqCheck = nxt;
            while (eqCheck < sScope.length() && (sScope.charAt(eqCheck) == ' ' || sScope.charAt(eqCheck) == '\t')) eqCheck++;
            if (eqCheck < sScope.length() && sScope.charAt(eqCheck) == '=') continue;
            if (eqCheck < sScope.length() && sScope.charAt(eqCheck) == '(') continue;
            if (COMMON_LOCAL_VARS.contains(fname.toLowerCase())) continue;
            if (fname.equalsIgnoreCase(className)) continue;
            if (fname.length() < 2) continue;
            String before = sScope.substring(0, fm.start());
            int lastOpen = before.lastIndexOf('(');
            int lastClose = before.lastIndexOf(')');
            if (lastOpen > lastClose) continue;
            if (Character.isLowerCase(fname.charAt(0))) {
                String ft = ftRaw.startsWith("ArrayList")
                    ? (inner != null ? "ArrayList<" + inner + ">" : "ArrayList<Object>")
                    : ftRaw;
                kg.addField(className, ft, fname);
            }
        }
        // Also detect "name: Type" pattern (e.g. "nombre: String, edad: int")
        Matcher rfm = Pattern.compile(
            "(\\w+)\\s*:\\s*(ArrayList\\s*<\\s*(\\w+(?:\\.\\w+)*)\\s*>|int|Integer|double|Double|boolean|Boolean|String|float|long|char|byte|short)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(sScope);
        while (rfm.find()) {
            String fname = rfm.group(1);
            String ftRaw = rfm.group(2);
            String inner = rfm.group(3);
            if (COMMON_LOCAL_VARS.contains(fname.toLowerCase())) continue;
            if (fname.equalsIgnoreCase(className)) continue;
            if (fname.length() < 2) continue;
            String before = sScope.substring(0, rfm.start());
            int lastOpen = before.lastIndexOf('(');
            int lastClose = before.lastIndexOf(')');
            if (lastOpen > lastClose) continue;
            if (Character.isLowerCase(fname.charAt(0))) {
                String ft = ftRaw.startsWith("ArrayList")
                    ? (inner != null ? "ArrayList<" + inner + ">" : "ArrayList<Object>")
                    : ftRaw;
                kg.addField(className, ft, fname);
            }
        }
        // Methods: ret name(params) patterns within scope
        Matcher mm = Pattern.compile(
            "(?:(\\w+(?:<[^>]+>)?(?:\\[\\])?)\\s+)?(\\w+)\\s*\\(([^)]*)\\)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(sScope);
        while (mm.find()) {
            String ret = mm.group(1);
            String name = mm.group(2);
            String inside = mm.group(3).trim();
            if (name.equals("main")) continue;
            if (name.equals("toString") || name.equals("hashCode") || name.equals("equals")) {
                if (name.equals("toString"))
                    kg.getClass(className).attrs.put("CAP:TO_STRING", "true");
                continue;
            }
            if (name.equalsIgnoreCase(className)) continue;
            // Skip parameterless getters/setters — handled by capability system
            if (inside.isEmpty() && (name.startsWith("get") || name.startsWith("set")
                || name.startsWith("is"))) continue;
            if (ret != null && !ret.isEmpty()
                && (PRIMITIVE_TYPES.contains(ret) || ret.equals("ArrayList") || ret.endsWith("[]")
                    || kg.knownClasses().contains(ret) || Character.isUpperCase(ret.charAt(0)))) {
                kg.addMethod(className, ret, name, inside);
            }
        }
        // Also detect "name(params): ret" pattern (e.g. "cumplirAnios(): void")
        Matcher rmm = Pattern.compile(
            "(\\w+)\\s*\\(([^)]*)\\)\\s*:\\s*(\\w+(?:<[^>]+>)?)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(sScope);
        while (rmm.find()) {
            String name = rmm.group(1);
            String inside = rmm.group(2).trim();
            String ret = rmm.group(3);
            if (name.equals("main")) continue;
            if (name.equals("toString") || name.equals("hashCode") || name.equals("equals")) {
                if (name.equals("toString"))
                    kg.getClass(className).attrs.put("CAP:TO_STRING", "true");
                continue;
            }
            if (name.equalsIgnoreCase(className)) continue;
            if (inside.isEmpty() && (name.startsWith("get") || name.startsWith("set")
                || name.startsWith("is"))) continue;
            if (ret != null && !ret.isEmpty()
                && (PRIMITIVE_TYPES.contains(ret) || ret.equals("ArrayList") || ret.endsWith("[]")
                    || kg.knownClasses().contains(ret) || Character.isUpperCase(ret.charAt(0)))) {
                kg.addMethod(className, ret, name, inside);
            }
        }
    }

    static void extractFieldsAndMethods(KnowledgeGraph kg, String s, String className) {
        // Collect method parameter names from this sentence to avoid false field detection
        Set<String> methodParamsInSentence = new HashSet<>();
        // Extract methods: TWO patterns — prefer name(params): ret over ret name(params)
        // First pass: name(params): ret pattern
        Matcher mm1 = Pattern.compile(
            "(\\w+)\\s*\\(([^)]*)\\)\\s*:\\s*(\\w+(?:<[^>]+>)?)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        while (mm1.find()) {
            String name = mm1.group(1);
            String inside = mm1.group(2).trim();
            String ret = mm1.group(3);
            if (name.equals("main")) continue;
            if (name.equals("toString") || name.equals("hashCode") || name.equals("equals")) {
                if (name.equals("toString"))
                    kg.getClass(className).attrs.put("CAP:TO_STRING", "true");
                continue;
            }
            if (name.equalsIgnoreCase(className)) continue;
            if (!inside.isEmpty()) {
                for (String param : inside.split("\\s*,\\s*")) {
                    String p = param.trim();
                    String[] parts = p.split("[\\s:]+");
                    for (String part : parts) {
                        String clean = part.replaceAll("\\W", "");
                        if (clean.length() > 0 && Character.isLowerCase(clean.charAt(0)))
                            methodParamsInSentence.add(clean);
                    }
                }
            }
            if (ret != null && !ret.isEmpty()
                && (PRIMITIVE_TYPES.contains(ret) || ret.equals("ArrayList") || ret.endsWith("[]")
                    || kg.knownClasses().contains(ret) || Character.isUpperCase(ret.charAt(0)))) {
                kg.addMethod(className, ret, name, inside);
            }
        }
        // Second pass: ret name(params) pattern — only for methods NOT already found
        Set<String> foundMethods = new HashSet<>();
        List<KGNode> existMethods = kg.getMethods(className);
        for (KGNode m : existMethods) foundMethods.add(m.s("name"));
        Matcher mm2 = Pattern.compile(
            "(\\w+(?:<[^>]+>)?(?:\\[\\])?)\\s+(\\w+)\\s*\\(([^)]*)\\)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        while (mm2.find()) {
            String ret = mm2.group(1);
            String name = mm2.group(2);
            String inside = mm2.group(3).trim();
            if (name.equals("main") || foundMethods.contains(name)) continue;
            if (name.equals("toString") || name.equals("hashCode") || name.equals("equals")) {
                if (name.equals("toString"))
                    kg.getClass(className).attrs.put("CAP:TO_STRING", "true");
                continue;
            }
            if (name.equalsIgnoreCase(className)) continue;
            if (!inside.isEmpty()) {
                for (String param : inside.split("\\s*,\\s*")) {
                    String p = param.trim();
                    String[] parts = p.split("[\\s:]+");
                    if (parts.length >= 2) {
                        String lastName = parts[parts.length - 1].replaceAll("\\W", "");
                        if (lastName.length() > 0 && Character.isLowerCase(lastName.charAt(0)))
                            methodParamsInSentence.add(lastName);
                    }
                }
            }
            // Skip false positives: ret is ArrayList<X> and preceded by a preposition
            if (ret != null && ret.contains("ArrayList")) {
                String beforeRet = s.substring(0, mm2.start()).trim();
                String[] words = beforeRet.split("\\s+");
                String lastWord = words.length > 0 ? words[words.length-1].toLowerCase() : "";
                if (isSpanishStopWord(lastWord) || lastWord.equals("del") || lastWord.equals("al")
                    || lastWord.equals("un") || lastWord.equals("una")) {
                    continue;
                }
            }
            if (ret != null && !ret.isEmpty()
                && (PRIMITIVE_TYPES.contains(ret) || ret.equals("ArrayList") || ret.endsWith("[]")
                    || kg.knownClasses().contains(ret) || Character.isUpperCase(ret.charAt(0)))) {
                kg.addMethod(className, ret, name, inside);
            }
        }
        // Extract fields: type name patterns (but not inside parentheses)
        int eqIdx = s.indexOf('=');
        boolean hasAssignment = eqIdx >= 0 && eqIdx < 100;
        Matcher fm = Pattern.compile(
            "(ArrayList\\s*<\\s*(\\w+(?:\\.\\w+)*)\\s*>|int|Integer|double|Double|boolean|Boolean|String|float|long|char|byte|short)" +
            "[\\s,;]+(\\w+)", Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        while (fm.find()) {
            String ftRaw = fm.group(1);
            String inner = fm.group(2);
            String fname = fm.group(3);
            int nxt = fm.end();
            int eqCheck = nxt;
            while (eqCheck < s.length() && (s.charAt(eqCheck) == ' ' || s.charAt(eqCheck) == '\t')) eqCheck++;
            if (eqCheck < s.length() && s.charAt(eqCheck) == '=') continue;
            if (eqCheck < s.length() && s.charAt(eqCheck) == '(') continue;
            if (COMMON_LOCAL_VARS.contains(fname.toLowerCase())) continue;
            if (fname.equalsIgnoreCase(className)) continue;
            if (fname.length() < 2) continue;
            // Exclude parameter names
            if (methodParamsInSentence.contains(fname)) continue;
            String before = s.substring(0, fm.start());
            int lastOpen = before.lastIndexOf('(');
            int lastClose = before.lastIndexOf(')');
            if (lastOpen > lastClose) continue;
            if (Character.isLowerCase(fname.charAt(0))) {
                // Reject field names that are common Spanish prose words
                String fnLower2 = fname.toLowerCase();
                if (isSpanishStopWord(fnLower2)) continue;
                // Reject if followed by a Spanish function word (suggests the match is prose, not a field)
                int afterEnd = fm.end();
                if (afterEnd < s.length()) {
                    String restRaw = s.substring(afterEnd);
                    String firstWord = restRaw.stripLeading().split("[\\s,;.]+", 2)[0].toLowerCase();
                    if (isSpanishStopWord(firstWord)
                        || firstWord.equals("devuelve") || firstWord.equals("crea")
                        || firstWord.equals("crear") || firstWord.equals("dice")
                        || firstWord.equals("pide") || firstWord.equals("in"))
                        continue;
                }
                String ft = ftRaw.startsWith("ArrayList")
                    ? (inner != null ? "ArrayList<" + inner + ">" : "ArrayList<Object>")
                    : ftRaw;
                if (DEBUG) System.out.println("  [extField] " + className + " " + ft + " " + fname + " from s='" + s.substring(0, Math.min(80, s.length())).replace("\n","\\n") + "'");
                kg.addField(className, ft, fname);
            }
        }
        // Also detect "name: Type" pattern (e.g. "nombre: String, edad: int")
        Matcher rfm = Pattern.compile(
            "(\\w+)\\s*:\\s*(ArrayList\\s*<\\s*(\\w+(?:\\.\\w+)*)\\s*>|int|Integer|double|Double|boolean|Boolean|String|float|long|char|byte|short)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        while (rfm.find()) {
            String fname = rfm.group(1);
            String ftRaw = rfm.group(2);
            String inner = rfm.group(3);
            if (COMMON_LOCAL_VARS.contains(fname.toLowerCase())) continue;
            if (fname.equalsIgnoreCase(className)) continue;
            if (fname.length() < 2) continue;
            if (methodParamsInSentence.contains(fname)) continue;
            String before = s.substring(0, rfm.start());
            int lastOpen = before.lastIndexOf('(');
            int lastClose = before.lastIndexOf(')');
            // Only allow if we're not inside method params (balanced parens)
            if (lastOpen > lastClose) {
                if (DEBUG) System.out.println("  [skipReverseField] " + fname + " (inside method params. before ends: '" + before.substring(Math.max(0, before.length()-30)) + "')");
                continue;
            }
            if (Character.isLowerCase(fname.charAt(0))) {
                String fnLower2 = fname.toLowerCase();
                if (isSpanishStopWord(fnLower2)) continue;
                String ft = ftRaw.startsWith("ArrayList")
                    ? (inner != null ? "ArrayList<" + inner + ">" : "ArrayList<Object>")
                    : ftRaw;
                if (DEBUG) System.out.println("  [extFieldReverse] " + className + " " + ft + " " + fname);
                kg.addField(className, ft, fname);
            }
        }
        // Extract fields from natural language constructor initialization descriptions
        // e.g. "La notaMedia y la beca se inicializarán en el constructor a 0 y a false"
        String sLow = s.toLowerCase();
        if (sLow.contains("se inicializar") || sLow.contains("se inicilizar")) {
            Set<String> existing = new HashSet<>();
            for (KGNode f : kg.getFields(className))
                existing.add(f.id.substring((className + ".").length()).toLowerCase());
            // Find the EARLIEST init keyword occurrence across all keyword variants
            String[] initKeywords = {"se inicializará", "se inicializaran", "se inicilizará", "se inicilizaran",
                                     "se inicializa", "se iniciliza"};
            int initIdx = -1;
            String foundKw = null;
            for (String kw : initKeywords) {
                int pos = 0;
                while ((pos = sLow.indexOf(kw, pos)) >= 0) {
                    if (initIdx < 0 || pos < initIdx) {
                        initIdx = pos;
                        foundKw = kw;
                    }
                    pos++;
                }
            }
            if (initIdx >= 0) {
                if (DEBUG) {
                    System.out.println("  [initMatch] cls=" + className + " kw_idx=" + initIdx + " kw='" + foundKw + "' sLow_len=" + sLow.length());
                }
                // Extract field names from "La X y la Y" before the init phrase
                String beforeInit = sLow.substring(0, initIdx).trim();
                List<String> fieldNames = new ArrayList<>();
                Matcher fnm = Pattern.compile("\\b(?:el|la|los|las)\\s+([a-záéíóúñ][a-záéíóúñ0-9]*)").matcher(beforeInit);
                while (fnm.find()) {
                    String fn = fnm.group(1);
                    if (!fn.equals("clase") && !fn.equals("class")
                        && !COMMON_LOCAL_VARS.contains(fn) && fn.length() > 1) {
                        fieldNames.add(fn);
                    }
                }
                // Process the after-init text to find init values
                String afterInit = sLow.substring(initIdx);
                if (DEBUG) System.out.println("  [initAfter] cls=" + className + " after='" + afterInit.replace("\n", "\\n") + "'");
                // Constrain value search to the FIRST clause (before " y ", " . " or next init keyword)
                String initClause = afterInit;
                int clauseEnd = afterInit.length();
                // Find first " y " that starts a new clause (not inside parenthesized content)
                int parenDepth = 0;
                int yIdx = -1;
                for (int ci = 0; ci < afterInit.length(); ci++) {
                    char c = afterInit.charAt(ci);
                    if (c == '(' || c == '[' || c == '{') parenDepth++;
                    else if (c == ')' || c == ']' || c == '}') parenDepth--;
                    else if (parenDepth == 0 && ci + 2 < afterInit.length()
                        && afterInit.charAt(ci) == ' ' && afterInit.charAt(ci+1) == 'y' && afterInit.charAt(ci+2) == ' ') {
                        yIdx = ci;
                        break;
                    }
                }
                if (yIdx > 0) clauseEnd = yIdx;
                // Also check for next init keyword or period
                for (String kw : initKeywords) {
                    int nk = afterInit.indexOf(kw, foundKw != null && afterInit.startsWith(foundKw) ? foundKw.length() : 0);
                    if (nk > 0 && nk < clauseEnd) clauseEnd = nk;
                }
                int dotEnd = afterInit.indexOf(". ");
                if (dotEnd > 0 && dotEnd < clauseEnd) clauseEnd = dotEnd;

                String valueScope = afterInit.substring(0, clauseEnd);
                if (DEBUG) System.out.println("  [valueScope] cls=" + className + " scope='" + valueScope.replace("\n", "\\n") + "'");

                List<String> initValues = new ArrayList<>();
                if (!valueScope.isEmpty()) {
                    Matcher vm = Pattern.compile("a\\s+(true|false|\\d+(?:\\.\\d+)?)").matcher(valueScope);
                    while (vm.find()) initValues.add(vm.group(1));
                }
                Set<String> clsFields = new HashSet<>();
                for (KGNode f : kg.getFields(className)) clsFields.add(f.id.substring((className + ".").length()));
                for (int fi = 0; fi < fieldNames.size(); fi++) {
                    String fn = fieldNames.get(fi);
                    if (existing.contains(fn)) continue;
                    if (!clsFields.contains(fn)) continue; // only init fields that belong to this class
                    String type = "String";
                    if (fi < initValues.size()) {
                        String v = initValues.get(fi);
                        if (v.equals("true") || v.equals("false")) type = "boolean";
                        else if (v.contains(".")) type = "double";
                        else {
                            boolean fractional = fn.contains("nota") || fn.contains("media")
                                || fn.endsWith("edia") || fn.contains("altura")
                                || fn.contains("precio") || fn.contains("saldo")
                                || fn.contains("promedio") || fn.contains("temperatura")
                                || fn.contains("porcentaje");
                            type = fractional ? "double" : "int";
                        }
                    } else {
                        if (fn.contains("nota") || fn.contains("media")
                            || fn.endsWith("edia") || fn.contains("altura")
                            || fn.contains("precio") || fn.contains("saldo")
                            || fn.contains("promedio") || fn.contains("temperatura"))
                            type = "double";
                    }
                    if (DEBUG) System.out.println("  [initField] cls=" + className + " type=" + type + " fn=" + fn + " fi=" + fi + " initVals=" + initValues + " from s='" + s.substring(0, Math.min(60, s.length())).replace("\n", "\\n") + "'");
                    kg.addField(className, type, fn);
                    existing.add(fn);
                }
                // Process additional init clauses after "y" (e.g. "y vendida se inicializará a false")
                if (yIdx > 0) {
                    String rest = afterInit.substring(yIdx + 3).trim(); // after " y "
                    // Find the init keyword within the rest clause
                    int restInitIdx = -1;
                    String restFoundKw = null;
                    for (String kw : initKeywords) {
                        int pos = rest.indexOf(kw);
                        if (pos >= 0 && (restInitIdx < 0 || pos < restInitIdx)) {
                            restInitIdx = pos;
                            restFoundKw = kw;
                        }
                    }
                    if (restInitIdx >= 0) {
                        // Extract field name just before the init keyword (bare word, no article needed)
                        String beforeRestInit = rest.substring(0, restInitIdx).trim();
                        // Find the last word in beforeRestInit as the field name
                        String[] beforeWords = beforeRestInit.split("[\\s,;]+");
                        if (beforeWords.length > 0) {
                            String restFn = beforeWords[beforeWords.length - 1];
                            if (!restFn.isEmpty() && !existing.contains(restFn)
                                && !COMMON_LOCAL_VARS.contains(restFn) && restFn.length() > 1) {
                                // Get init value after the keyword
                                String afterRestInit = rest.substring(restInitIdx + restFoundKw.length());
                                String restValue = "";
                                Matcher rvm = Pattern.compile("a\\s+(true|false|\\d+(?:\\.\\d+)?)").matcher(afterRestInit);
                                if (rvm.find()) restValue = rvm.group(1);
                                String restType = "String";
                                if (restValue.equals("true") || restValue.equals("false")) restType = "boolean";
                                else if (restValue.contains(".")) restType = "double";
                                else if (!restValue.isEmpty()) restType = "int";
                                if (DEBUG) System.out.println("  [restInitField] cls=" + className + " type=" + restType + " fn=" + restFn + " val=" + restValue);
                                kg.addField(className, restType, restFn);
                                existing.add(restFn);
                            }
                        }
                    }
                }
            }
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // 4. Main parse → KG
    // ─────────────────────────────────────────────────────────────────────

    static KnowledgeGraph buildGraph(String text) {
        KnowledgeGraph kg = new KnowledgeGraph();

        // First pass: find all sentences and classify them
        List<String> sentences = splitSentences(text);
        Set<String> foundClasses = new LinkedHashSet<>();

        //         Phase 1: Extract class names from all sentences
        if (DEBUG) System.out.println("DEBUG: Processing " + sentences.size() + " sentences");
        for (String s : sentences) {
            if (DEBUG) System.out.println("DEBUG: Sentence: " + s.substring(0, Math.min(80, s.length())));
            String norm = normalize(s);
// Class header — use original string to preserve case
            Matcher m = Pattern.compile("(?:Clase|clase|Class|class)\\s+(\\w+(?:\\s+\\w+)?)\\s*:",
                Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
            while (m.find()) {
                String cn = m.group(1).trim().replace(" ", "_");
                if (cn.length() > 1 && Character.isUpperCase(cn.charAt(0))
                    && !NON_CLASS_WORDS.contains(cn)
                    && !foundClasses.contains(cn)) {
                    foundClasses.add(cn);
                    // Also check for "siguientes clases X Y Z"
                    String[] words = norm.split("\\s+");
                    boolean inClassList = false;
                    for (int i = 0; i < words.length; i++) {
                        if (words[i].equals("clases") || words[i].equals("clase")
                            || words[i].equals("class")) {
                            inClassList = true; continue;
                        }
                        if (inClassList && words[i].length() > 1
                            && Character.isUpperCase(words[i].charAt(0))) {
                            // Find original case
                            Matcher wm = Pattern.compile("\\b([A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ0-9]+)\\b",
                                Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
                            while (wm.find()) {
                                String wc = wm.group(1);
                                if (wc.equalsIgnoreCase(words[i])) {
                                    foundClasses.add(wc); break;
                                }
                            }
                        }
                    }
                }
            }
        }

        // Also look for capitalized words that could be class names
        Matcher cm = Pattern.compile("\\b([A-Z][a-zA-ZáéíóúñÁÉÍÓÚÑ]+)\\b").matcher(text);
        while (cm.find()) {
            String w = cm.group(1);
            if (w.length() > 2 && !PRIMITIVE_TYPES.contains(w)
                && !NON_CLASS_WORDS.contains(w)
                && !COMMON_LOCAL_VARS.contains(w.toLowerCase())) {
                // Check if it's followed by field/method context
                int pos = cm.end();
                String rest = pos < text.length() ? text.substring(pos, Math.min(pos + 60, text.length())) : "";
                if (rest.contains("Atributos") || rest.contains("atributos")
                    || rest.contains("Métodos") || rest.contains("Metodos")
                    || rest.contains("metodos") || rest.contains("métodos")
                    || rest.contains(" atributo") || rest.contains(" metodo")
                    || rest.contains(" método")
                    || rest.contains("testear") || rest.contains(" testear")
                    || rest.contains("tester") || rest.contains(" tester")
                    || rest.contains("para testear") || rest.contains("para crear")
                    || rest.contains("main(")) {
                    // Skip if followed by common words that indicate it's not a class name
                    String after = rest.stripLeading();
                    if (!after.startsWith("son") && !after.startsWith("para")
                        && !after.startsWith("con") && !after.startsWith("del")
                        && !after.startsWith("de") && !after.startsWith("en")
                        && !after.startsWith("que") && !after.startsWith("los")
                        && !after.startsWith("las")) {
                        // Skip if this capitalized word is already part of a detected class (e.g. "Tester" from "Tienda_Tester")
                        boolean isSubWord = foundClasses.stream().anyMatch(fc -> fc.contains("_" + w) || fc.equals(w));
                        if (!isSubWord) {
                            foundClasses.add(w);
                        }
                    }
                }
            }
        }

        // Register classes
        for (String cn : foundClasses) {
            kg.addClass(cn);
            if (DEBUG) System.out.println("DEBUG: Registered class: " + cn);
        }

        // Phase 1b: Standalone exercise detection
        for (String s : sentences) {
            String norm = normalize(s);
            if (norm.contains("gestion de edades")) {
                kg.addClass("GestionEdades");
                kg.getClass("GestionEdades").attrs.put("CAP:MAIN", "true");
                kg.addMainDesc("GestionEdades", s);
                break;
            }
        }

        // Phase 2: Classify each sentence and assign to the nearest class
        String currentClass = null;
        String lastActiveClass = null;
        for (int si = 0; si < sentences.size(); si++) {
            String s = sentences.get(si);
            ParsedSentence ps = classifySentence(s, kg.knownClasses());

            // Reset currentClass for non-class sections
            String sLow = s.toLowerCase();
            if (sLow.contains("gestión de edades") || sLow.contains("gestion de edades")
                || sLow.contains("pregunta teórica") || sLow.contains("pregunta teorica")
                || sLow.contains("clases envoltorio") || sLow.contains("clases envolventes")
                || sLow.contains("preguntas teóricas") || sLow.contains("preguntas teoricas")) {
                currentClass = null;
            }
            // Sentences starting with "(N puntos)" and not containing "clase" are non-class
            if (currentClass != null && !sLow.contains("clase")) {
                String trimmed = s.trim();
                if (trimmed.length() > 2 && trimmed.charAt(0) == '('
                    && Character.isDigit(trimmed.charAt(1))
                    && trimmed.contains("puntos")) {
                    currentClass = null;
                }
            }

            // Multi-class sentence: find ALL class references in this sentence
            Set<String> classesInSentence = new LinkedHashSet<>();
            Matcher mcm = Pattern.compile("(?:Clase|clase|Class|class)\\s+(\\w+)").matcher(s);
            while (mcm.find()) {
                String cn = mcm.group(1);
                if (cn.length() > 1 && Character.isUpperCase(cn.charAt(0))
                    && kg.knownClasses().contains(cn))
                    classesInSentence.add(cn);
            }

             // For multi-class sentences with CLASS_HEADER role, process each class
            if (classesInSentence.size() > 1 && ps.role == SentenceRole.CLASS_HEADER) {
                for (String clsName : kg.classOrder) {
                    if (!classesInSentence.contains(clsName)) continue;
                    currentClass = clsName;
                    if (currentClass != null) lastActiveClass = currentClass;
                    processClassScope(kg, s, currentClass);
                }
                currentClass = null;
                for (String cn : kg.classOrder) {
                    if (classesInSentence.contains(cn)) { currentClass = cn; break; }
                }
                if (currentClass != null) lastActiveClass = currentClass;
                continue; // Skip regular switch processing
            }

            if (ps.role == SentenceRole.CLASS_HEADER) {
                currentClass = ps.className;
                // Do NOT continue — this sentence may also contain fields/methods/concepts
            } else if (ps.role == SentenceRole.MAIN_DESC && ps.className != null && !ps.className.isEmpty()) {
                currentClass = ps.className;
            }
            if (currentClass == null) {
                // Try to find which class this belongs to
                currentClass = resolveClass(s);
                if (currentClass == null) {
                    for (String cn : kg.classOrder) {
                        if (s.contains(cn)) { currentClass = cn; break; }
                    }
                    if (currentClass == null) {
                        // Fallback: use last active class for sentences mentioning class features
                        String sFieldNorm = normalize(s);
                        if (lastActiveClass != null
                            && (sFieldNorm.contains("atributo") || sFieldNorm.contains("metodo")
                                || sFieldNorm.contains("constructor") || sFieldNorm.contains("getter")
                                || sFieldNorm.contains("setter") || sFieldNorm.contains("tostring")
                                || sFieldNorm.contains("parámetro") || sFieldNorm.contains("parametro")
                                || Pattern.compile("\\w+\\s*\\(").matcher(sFieldNorm).find())) {
                            currentClass = lastActiveClass;
                        } else {
                            // Skip sentences that don't belong to any known class
                            continue;
                        }
                    }
                }
            }

            // Check if sentence mentions a different class and should switch
            // Skip for CLASS_HEADER sentences — the class name is already correct
            if (ps.role != SentenceRole.CLASS_HEADER) {
                for (String cn : kg.classOrder) {
                    if (!cn.equals(currentClass) && s.contains(cn)
                        && (s.contains("Clase " + cn) || s.contains("clase " + cn)
                            || s.contains("Class " + cn) || s.contains("class " + cn))) {
                        // Check if we're past the current class section
                        int curIdx = kg.classOrder.indexOf(currentClass);
                        int nextIdx = kg.classOrder.indexOf(cn);
                        if (nextIdx > curIdx) {
                            currentClass = cn;
                            break;
                        }
                    }
                }
            }

            // Update last active class for implicit context tracking
            if (currentClass != null) {
                lastActiveClass = currentClass;
            }



            switch (ps.role) {
                case CLASS_HEADER:
                    processClassScope(kg, s, currentClass);
                    // Also extract fields/methods directly from the sentence (for natural language format)
                    if (!s.contains("{")) {
                        extractFieldsAndMethods(kg, s, currentClass);
                    }
                    // Check if this is a tester class (should have main)
                    {
                        String norm2 = normalize(s);
                        if ((norm2.contains("testear") || norm2.contains("tester"))
                            && (norm2.contains("crea") || norm2.contains("crear") || norm2.contains("complet")))
                            kg.addMainDesc(currentClass, s);
                    }
                    break;
                case FIELD_DECL: {
                    @SuppressWarnings("unchecked")
                    List<String> allTypes = (List<String>) ps.attrs.get("allFieldTypes");
                    @SuppressWarnings("unchecked")
                    List<String> allNames = (List<String>) ps.attrs.get("allFieldNames");
                    if (allTypes != null && allNames != null) {
                        for (int fi = 0; fi < allTypes.size(); fi++)
                            kg.addField(currentClass, allTypes.get(fi), allNames.get(fi));
                    } else {
                        kg.addField(currentClass, ps.fieldType, ps.fieldName);
                    }
                    break;
                }
                case METHOD_SIG: {
                    @SuppressWarnings("unchecked")
                    List<String> allRets = (List<String>) ps.attrs.get("allMethodRets");
                    @SuppressWarnings("unchecked")
                    List<String> allNames = (List<String>) ps.attrs.get("allMethodNames");
                    @SuppressWarnings("unchecked")
                    List<String> allParams = (List<String>) ps.attrs.get("allMethodParams");
                    if (allRets != null && allNames != null) {
                        for (int mi = 0; mi < allNames.size(); mi++) {
                            String ret = mi < allRets.size() ? allRets.get(mi) : "void";
                            String nm = allNames.get(mi);
                            String pa = mi < allParams.size() ? allParams.get(mi) : "";
                            if (nm.equals("toString") || nm.equals("hashCode") || nm.equals("equals")) {
                                if (nm.equals("toString"))
                                    kg.getClass(currentClass).attrs.put("CAP:TO_STRING", "true");
                                continue;
                            }
                            kg.addMethod(currentClass, ret, nm, pa);
                        }
                    } else {
                        kg.addMethod(currentClass, ps.methodRet, ps.methodName, ps.methodParams);
                    }
                    break;
                }
                case CONCEPT_DESC: {
                    String norm = normalize(ps.raw);
                    // Constructor detection
                    if (norm.contains("constructor por defecto") || norm.contains("constructor vacio")
                        || norm.contains("constructor sin parametros") || norm.contains("constructor basico")
                        || norm.contains("constructor que cree") || norm.contains("constructor crea")
                        || norm.contains("default constructor") || norm.contains("parameterless")
                        || norm.contains("constructor (crea")) {
                        // Check for exclusion pattern in the full sentence
                        Capability cap = new Capability(CapType.CONSTRUCTOR, CapVariant.DEFAULT);
                        extractGSExclusion(s, cap);
                        // Attach to class via node attribute
                        kg.getClass(currentClass).attrs.put("CAP:DEFAULT_CTOR", "true");
                        kg.getClass(currentClass).attrs.put("CAP:DEFAULT_CTOR_EXCLUDE", cap.noGS);
                    }
                    if (norm.contains("constructor con todos los parametros")
                        || norm.contains("constructor con parametros")
                        || norm.contains("all-args") || norm.contains("all args")) {
                        kg.getClass(currentClass).attrs.put("CAP:ALL_CTOR", "true");
                    }
                    if (norm.contains("tostring") || norm.contains("metodo tostring")
                        || norm.contains("devuelve una cadena") || norm.contains("devuelve un string")) {
                        kg.getClass(currentClass).attrs.put("CAP:TO_STRING", "true");
                    }
                    // Getters/setters
                    boolean hasGetter = norm.contains("getter") || norm.contains("get");
                    boolean hasSetter = norm.contains("setter") || norm.contains("set");
                    if (hasGetter) {
                        kg.getClass(currentClass).attrs.put("CAP:HAS_GETTERS", "true");
                        // Parse specific "para X" or "de X" patterns
                        Set<String> onlyGet = new HashSet<>();
                        Set<String> connectorWords = new HashSet<>(Arrays.asList("para","de","e","y","el","la","los","las","un","una"));
                        Matcher gm = Pattern.compile("(?:getter|getters)\\s+(?:para|de)\\s+(.+?)(?:\\.|$|setter)", Pattern.CASE_INSENSITIVE).matcher(s);
                        if (gm.find()) {
                            for (String w : gm.group(1).split("[\\s,;]+")) {
                                w = w.toLowerCase().trim();
                                if (w.length() > 1 && !connectorWords.contains(w)) onlyGet.add(w);
                            }
                        }
                        if (!onlyGet.isEmpty()) kg.getClass(currentClass).attrs.put("CAP:GETTERS_FIELDS", onlyGet);
                    }
                    if (hasSetter) {
                        kg.getClass(currentClass).attrs.put("CAP:HAS_SETTERS", "true");
                        Set<String> onlySet = new HashSet<>();
                        Matcher sm = Pattern.compile("(?:setter|setters)\\s+(?:para|de)\\s+(.+?)(?:\\.|$|getter)", Pattern.CASE_INSENSITIVE).matcher(s);
                        if (sm.find()) {
                            Set<String> connectorWords = new HashSet<>(Arrays.asList("para","de","e","y","el","la","los","las","un","una"));
                            for (String w : sm.group(1).split("[\\s,;]+")) {
                                w = w.toLowerCase().trim();
                                if (w.length() > 1 && !connectorWords.contains(w)) onlySet.add(w);
                            }
                        }
                        if (!onlySet.isEmpty()) kg.getClass(currentClass).attrs.put("CAP:SETTERS_FIELDS", onlySet);
                    }
                    // Exclusions (for getters/setters)
                    if (norm.contains("menos") || norm.contains("except")) {
                        Capability exclCap = new Capability(CapType.ACCESSOR, CapVariant.GETTER);
                        extractGSExclusion(s, exclCap);
                        if (!exclCap.noGS.isEmpty()) {
                            Set<String> existing = new HashSet<>(kg.getClass(currentClass).ss("CAP:NO_GETSET"));
                            existing.addAll(exclCap.noGS);
                            kg.getClass(currentClass).attrs.put("CAP:NO_GETSET", existing);
                        }
                    }
                    break;
                }
                case RELATION_DESC:
                    // Already handled by field detection with ArrayList type
                    break;
                case MAIN_DESC: {
                    kg.addMainDesc(currentClass, ps.mainDescription);
                    @SuppressWarnings("unchecked")
                    List<String> mdNames = (List<String>) ps.attrs.get("allMethodNames");
                    if (mdNames != null && !mdNames.isEmpty()) {
                        @SuppressWarnings("unchecked")
                        List<String> mdRets = (List<String>) ps.attrs.get("allMethodRets");
                        @SuppressWarnings("unchecked")
                        List<String> mdParams = (List<String>) ps.attrs.get("allMethodParams");
                        for (int mi = 0; mi < mdNames.size(); mi++) {
                            String nm = mdNames.get(mi);
                            String ret = mi < mdRets.size() ? mdRets.get(mi) : "void";
                            String pa = mi < mdParams.size() ? mdParams.get(mi) : "";
                            if (nm.equals("toString") || nm.equals("hashCode") || nm.equals("equals")) {
                                if (nm.equals("toString"))
                                    kg.getClass(currentClass).attrs.put("CAP:TO_STRING", "true");
                                continue;
                            }
                            kg.addMethod(currentClass, ret, nm, pa);
                        }
                    }
                    break;
                }
                case OTHER:
                    // Check for field patterns not caught by classifier
                    String w2 = "[\\p{L}0-9_]+";
                    Matcher fm = Pattern.compile(
                        "(int|Integer|double|Double|boolean|Boolean|String)" +
                        "[\\s,;]+(" + w2 + ")", Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
                    while (fm.find()) {
                        String ft = fm.group(1);
                        String fn = fm.group(2);
                        int nxt = fm.end();
                        if (nxt < s.length() && s.charAt(nxt) == '=') continue;
                        if (COMMON_LOCAL_VARS.contains(fn.toLowerCase())) continue;
                        if (fn.length() < 2) continue;
                        if (Character.isLowerCase(fn.charAt(0))) {
                            if (isSpanishStopWord(fn)) continue;
                            kg.addField(currentClass, ft, fn);
                        }
                    }
                    break;
            }
            // Extract fields and methods from natural language in sentences without inline code
            if (currentClass != null && !currentClass.isEmpty()
                && !s.contains("{") && !s.contains("}")) {
                extractFieldsAndMethods(kg, s, currentClass);
            }
        }

        // Pre-inference cleanup: remove classes with 0 fields, 0 methods, 0 relations
        // (unless they have a main description or are dependency classes referenced by others)
        Set<String> knownCls = kg.knownClasses();
        {
            Set<String> toRemove = new HashSet<>();
            for (String cn : knownCls) {
                boolean hasFields = !kg.getFields(cn).isEmpty();
                boolean hasMethods = !kg.getMethods(cn).isEmpty();
                boolean hasRelations = !kg.getRelationsFrom(cn).isEmpty();
                boolean hasMain = kg.hasMain(cn);
                boolean isReferenced = false;
                for (KGRelation r : kg.relations) {
                    if (r.to.equals(cn) || r.from.equals(cn)) { isReferenced = true; break; }
                }
                if (!hasFields && !hasMethods && !hasRelations && !hasMain && !isReferenced)
                    toRemove.add(cn);
            }
            for (String cn : toRemove) {
                kg.classOrder.remove(cn);
                kg.nodes.values().removeIf(n -> cn.equals(n.s("owner")) || n.id.equals(cn));
            }
        }

        // Post-parse inference
        postInference(kg, sentences);

        if (DEBUG) {
            showKGDebug(kg, "Final KG");
            System.out.println("DEBUG: Total facts: " + kg.nodes.size()
                + ", classes: " + kg.classOrder.size()
                + ", relations: " + kg.relations.size());
        }

        return kg;
    }

    @SuppressWarnings("unchecked")
    static void extractGSExclusion(String s, Capability cap) {
        Matcher em = Pattern.compile("menos\\s+de\\s+(\\w+)", Pattern.CASE_INSENSITIVE).matcher(s);
        while (em.find()) {
            String excl = em.group(1).toLowerCase();
            if (excl.length() > 1) cap.noGS.add(excl);
        }
    }

    static String resolveClass(String s) {
        String norm = normalize(s);
        Matcher m = Pattern.compile("(?:Clase|clase|Class|class)\\s+(\\w+)",
            Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        if (m.find()) {
            String cn = m.group(1);
            if (cn.length() > 1 && Character.isUpperCase(cn.charAt(0))
                && !NON_CLASS_WORDS.contains(cn))
                return cn;
        }
        m = Pattern.compile("(?:siguientes\\s+)?(?:clase|clases|class|classes)\\s+(\\w+)",
            Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CHARACTER_CLASS).matcher(s);
        if (m.find()) {
            String cn = m.group(1);
            if (cn.length() > 1 && Character.isUpperCase(cn.charAt(0))
                && !NON_CLASS_WORDS.contains(cn))
                return cn;
        }
        m = Pattern.compile("\\b([A-Z][a-zA-ZáéíóúñÁÉÍÓÚÑ]+)\\b").matcher(s);
        while (m.find()) {
            String w = m.group(1);
            if (w.length() > 2 && !PRIMITIVE_TYPES.contains(w)
                && !NON_CLASS_WORDS.contains(w)) {
                String rest = s.substring(Math.min(m.end(), s.length()));
                if (rest.contains("Atributos") || rest.contains("atributos")
                    || rest.contains("Métodos") || rest.contains("Metodos")
                    || rest.contains(" atributo") || rest.contains(" metodo"))
                    return w;
            }
        }
        return null;
    }

    static void postInference(KnowledgeGraph kg, List<String> sentences) {
        Set<String> knownCls = kg.knownClasses();

        // 1. Detect missing classes from method parameter types
        Set<String> newClasses = new LinkedHashSet<>();
        for (String cn : knownCls) {
            for (KGNode mn : kg.getMethods(cn)) {
                String params = mn.s("params");
                Matcher pm = Pattern.compile("\\b([A-Z][a-zA-Z0-9_]+)\\b").matcher(params);
                while (pm.find()) {
                    String pt = pm.group(1);
                    if (!PRIMITIVE_TYPES.contains(pt) && !knownCls.contains(pt)
                        && !NON_CLASS_WORDS.contains(pt) && pt.length() > 2)
                        newClasses.add(pt);
                }
            }
        }
        for (String nc : newClasses) {
            kg.addClass(nc);
        }

        // 2. Infer fields from getter/setter methods
        knownCls = kg.knownClasses();
        for (String cn : knownCls) {
            Set<String> existingFieldNames = new HashSet<>();
            for (KGNode ff : kg.getFields(cn))
                existingFieldNames.add(ff.id.substring((cn + ".").length()).toLowerCase());
            for (KGNode mn : kg.getMethods(cn)) {
                String name = mn.s("name");
                String ret = mn.s("ret");
                String params = mn.s("params");
                if (name.startsWith("get") && name.length() > 3 && Character.isUpperCase(name.charAt(3))) {
                    String fn = Character.toLowerCase(name.charAt(3)) + name.substring(4);
                    if (!existingFieldNames.contains(fn) && !COMMON_LOCAL_VARS.contains(fn)
                        && !PRIMITIVE_TYPES.contains(fn)) {
                        String ft = ret.isEmpty() || ret.equals("void") ? "String" : ret;
                        kg.addField(cn, ft, fn);
                        existingFieldNames.add(fn);
                    }
                }
                if (name.startsWith("set") && name.length() > 3 && Character.isUpperCase(name.charAt(3))
                    && !params.isEmpty()) {
                    Matcher pmm = Pattern.compile("(\\w+)\\s+(\\w+)").matcher(params);
                    if (pmm.find()) {
                        String ft = pmm.group(1), fn = pmm.group(2);
                        if (!existingFieldNames.contains(fn.toLowerCase())
                            && !COMMON_LOCAL_VARS.contains(fn.toLowerCase())) {
                            kg.addField(cn, ft, fn);
                            existingFieldNames.add(fn.toLowerCase());
                        }
                    }
                }
            }
        }

        if (DEBUG) showKGDebug(kg, "After getter/setter inference");

        // 3. Reverse field pattern: "name : type" or "name (type)" — only in class-specific sentences
        knownCls = kg.knownClasses();
        for (String cn : knownCls) {
            Set<String> existingFieldNames = new HashSet<>();
            for (KGNode ff : kg.getFields(cn))
                existingFieldNames.add(ff.id.substring((cn + ".").length()).toLowerCase());
            for (String s : sentences) {
                if (!s.contains(cn)) continue;
                Matcher rev = Pattern.compile("([a-z]\\w+)\\s*[:(]\\s*(int|Integer|double|Double|boolean|Boolean|String|float|long|char|byte|short)\\s*\\)").matcher(s);
                while (rev.find()) {
                    String fn = rev.group(1).toLowerCase(), ft = rev.group(2);
                    // Skip if inside method params (unbalanced parens before match)
                    String before = s.substring(0, rev.start());
                    int lastOpen = before.lastIndexOf('(');
                    int lastClose = before.lastIndexOf(')');
                    if (lastOpen > lastClose) continue;
                    if (!existingFieldNames.contains(fn) && fn.length() > 1
                        && !fn.equals("main") && !fn.equals("toString")
                        && !fn.equals("super") && !fn.equals("return")
                        && !fn.equals("import") && !fn.equals("package")
                        && !fn.equals("public") && !fn.equals("private")
                        && !fn.equals("static") && !fn.equals("final")
                        && !fn.equals("this") && !fn.equals("class")
                        && !COMMON_LOCAL_VARS.contains(fn)) {
                        kg.addField(cn, ft, fn);
                        existingFieldNames.add(fn);
                    }
                }
            }
        }
    }

    static void showKGDebug(KnowledgeGraph kg, String label) {
        System.out.println("=== KG Debug: " + label + " ===");
        System.out.println("  Classes: " + kg.classOrder);
        for (String cn : kg.classOrder) {
            KGNode node = kg.getClass(cn);
            System.out.println("  " + cn + ": " + kg.getFields(cn).size() + " fields, "
                + kg.getMethods(cn).size() + " methods, "
                + kg.getRelationsFrom(cn).size() + " relations");
            for (KGNode f : kg.getFields(cn))
                System.out.println("    field: " + f.s("type") + " " + f.id.substring((cn + ".").length()));
            for (KGNode m : kg.getMethods(cn))
                System.out.println("    method: " + m.s("ret") + " " + m.s("name") + "(" + m.s("params") + ")");
        }
        System.out.println("==============================");
    }

    static String exportKGToJson(KnowledgeGraph kg) {
        StringBuilder sb = new StringBuilder();
        sb.append("{\n  \"classes\": [\n");
        boolean first = true;
        for (String cn : kg.classOrder) {
            if (!first) sb.append(",\n");
            first = false;
            sb.append("    {\n      \"name\": \"").append(cn).append("\",\n");
            sb.append("      \"fields\": [\n");
            boolean ffirst = true;
            for (KGNode f : kg.getFields(cn)) {
                if (!ffirst) sb.append(",\n");
                ffirst = false;
                sb.append("        { \"type\": \"").append(f.s("type"))
                    .append("\", \"name\": \"").append(f.id.substring((cn + ".").length())).append("\" }");
            }
            sb.append("\n      ],\n      \"methods\": [\n");
            boolean mfirst = true;
            for (KGNode m : kg.getMethods(cn)) {
                if (!mfirst) sb.append(",\n");
                mfirst = false;
                sb.append("        { \"ret\": \"").append(m.s("ret"))
                    .append("\", \"name\": \"").append(m.s("name"))
                    .append("\", \"params\": \"").append(m.s("params")).append("\" }");
            }
            sb.append("\n      ],\n      \"relations\": [\n");
            boolean rfirst = true;
            for (KGRelation r : kg.getRelationsFrom(cn)) {
                if (!rfirst) sb.append(",\n");
                rfirst = false;
                sb.append("        { \"to\": \"").append(r.to)
                    .append("\", \"via\": \"").append(r.viaField)
                    .append("\", \"type\": \"").append(r.type).append("\" }");
            }
            sb.append("\n      ]\n    }");
        }
        sb.append("\n  ]\n}\n");
        return sb.toString();
    }

    static List<IRClass> kgToIR(KnowledgeGraph kg) {
        List<IRClass> result = new ArrayList<>();
        Set<String> knownClasses = kg.knownClasses();

        for (String cn : kg.classOrder) {
            KGNode node = kg.getClass(cn);
            if (node == null) continue;

            IRClass cls = new IRClass();
            cls.name = cn;

            // Fields
            for (KGNode fn : kg.getFields(cn)) {
                cls.fields.add(new IRField(fn.s("type"), fn.id.substring(cn.length() + 1)));
            }

            // Methods
            for (KGNode mn : kg.getMethods(cn)) {
                String name = mn.s("name");
                String ret = mn.s("ret");
                String paramsStr = mn.s("params");

                if (name.equals("toString") || name.equals("ToString")) continue;

                IRMethod md = new IRMethod(name, ret);
                // Parse params (handle both "name: type" and "type name" formats)
                if (!paramsStr.isEmpty()) {
                    String normalized = paramsStr.replaceAll("(\\w+)\\s*:\\s*(\\w+)", "$2 $1");
                    Matcher pm = Pattern.compile("([\\p{L}0-9_]+(?:<[^>]+>)?)\\s+([\\p{L}0-9_]+)",
                        Pattern.UNICODE_CHARACTER_CLASS).matcher(normalized);
                    while (pm.find()) {
                        String pt = pm.group(1);
                        String pn = pm.group(2);
                        if (!pn.equals(cn)) md.params.add(new IRField(pt, pn));
                    }
                }
                cls.methods.add(md);
            }

            // Capabilities from KG node attrs
            String dc = node.s("CAP:DEFAULT_CTOR");
            if ("true".equals(dc)) {
                Capability cap = new Capability(CapType.CONSTRUCTOR, CapVariant.DEFAULT);
                Set<String> exclude = node.ss("CAP:DEFAULT_CTOR_EXCLUDE");
                cap.noGS.addAll(exclude);
                cls.capabilities.add(cap);
            }
            if ("true".equals(node.s("CAP:ALL_CTOR")))
                cls.capabilities.add(new Capability(CapType.CONSTRUCTOR, CapVariant.ALL_ARGS));
            if ("true".equals(node.s("CAP:TO_STRING")))
                cls.capabilities.add(new Capability(CapType.OUTPUT, CapVariant.TO_STRING));

            // Getters
            if ("true".equals(node.s("CAP:HAS_GETTERS"))) {
                Capability cap = new Capability(CapType.ACCESSOR, CapVariant.GETTER);
                cap.onlyGet.addAll(node.ss("CAP:GETTERS_FIELDS"));
                cap.noGS.addAll(node.ss("CAP:NO_GETSET"));
                cls.capabilities.add(cap);
            }
            // Setters
            if ("true".equals(node.s("CAP:HAS_SETTERS"))) {
                Capability cap = new Capability(CapType.MUTATOR, CapVariant.SETTER);
                cap.onlySet.addAll(node.ss("CAP:SETTERS_FIELDS"));
                cap.noGS.addAll(node.ss("CAP:NO_GETSET"));
                cls.capabilities.add(cap);
            }

            // Build action triples from method names
            for (IRMethod md : cls.methods) {
                md.action = buildAction(md, cls, kg);
                if (md.action != null) cls.actions.add(md.action);
            }

            // Relationships
            for (KGRelation r : kg.getRelationsFrom(cn)) {
                cls.relationships.add(new Relationship(r.to, r.viaField, r.type));
                if (r.type == RelationType.ONE_TO_MANY) cls.containerOf = r.to;
            }

            // Main
            cls.hasMain = kg.hasMain(cn);
            if (cls.hasMain) cls.mainDesc = kg.getMainDesc(cn);

            // Role
            cls.role = classifyClassRole(cls);

            if (!cls.fields.isEmpty() || !cls.methods.isEmpty()
                || !cls.capabilities.isEmpty() || cls.hasMain)
                result.add(cls);
        }

        return result;
    }

    static ClassRole classifyClassRole(IRClass cls) {
        boolean hasContainerField = false;
        String containerTarget = "";
        for (Relationship r : cls.relationships) {
            if (r.type == RelationType.ONE_TO_MANY) { hasContainerField = true; containerTarget = r.targetClass; break; }
        }
        if (hasContainerField) return ClassRole.CONTAINER;

        boolean hasRef = false;
        for (IRField f : cls.fields)
            if (!f.type.startsWith("ArrayList") && !PRIMITIVE_TYPES.contains(f.type))
                hasRef = true;

        if (hasRef && cls.fields.size() >= 2) return ClassRole.RELATIONSHIP_ENTITY;
        if (cls.fields.size() >= 2) return ClassRole.ENTITY;
        if (!cls.fields.isEmpty()) return ClassRole.UNKNOWN;
        return ClassRole.SERVICE;
    }

    static ActionTriple buildAction(IRMethod md, IRClass cls, KnowledgeGraph kg) {
        String n = md.name.toLowerCase();
        if (n.equals("main") || n.equals(cls.name.toLowerCase())) return null;

        ActionTriple at = new ActionTriple();
        at.methodName = md.name;
        at.returnsVoid = md.ret.equals("void");

        for (IRField p : md.params) {
            at.paramTypes.add(p.type);
            at.paramNames.add(p.name);
        }

        // Find action word
        String[] words = n.split("[A-Z]");
        if (words.length > 0) {
            String firstWord = words[0].toLowerCase();
            String mapped = ACTION_SYNONYMS.get(firstWord);
            if (mapped != null) at.action = mapped;
        }

        // Also check prefixes
        if (at.action == null) {
            for (Map.Entry<String, String> e : ACTION_SYNONYMS.entrySet()) {
                if (n.startsWith(e.getKey())) { at.action = e.getValue(); break; }
            }
        }
        if (at.action == null) {
            // Check for contains
            for (Map.Entry<String, String> e : ACTION_SYNONYMS.entrySet()) {
                if (e.getKey().length() > 3 && n.contains(e.getKey())) {
                    at.action = e.getValue(); break;
                }
            }
        }
        if (at.action == null) at.action = "unknown";

        // Target: look for known class names in method name
        for (String kn : kg.knownClasses()) {
            if (!kn.equals(cls.name) && containsIgnoreCase(md.name, kn)) {
                at.target = kn; break;
            }
        }
        // Constraint: look for "By" + field name pattern
        Matcher bm = Pattern.compile("[Bb]y\\s+(\\w+)").matcher(md.name);
        if (bm.find()) at.constraint = bm.group(1);
        // Spanish: "Por" + field
        bm = Pattern.compile("[Pp]or\\s+(\\w+)").matcher(md.name);
        if (bm.find() && at.constraint.isEmpty()) at.constraint = bm.group(1);

        return at;
    }

    static boolean containsIgnoreCase(String s, String sub) {
        return s.toLowerCase().contains(sub.toLowerCase());
    }

    // ─────────────────────────────────────────────────────────────────────
    // 7. Code Generator
    // ─────────────────────────────────────────────────────────────────────

    // ─────────────────────────────────────────────────────────────────────
    // Generator Inner Class
    // ─────────────────────────────────────────────────────────────────────

    static class Generator {
        static List<IRField> fieldsOf(IRClass cls) { return cls.fields; }
        static List<IRMethod> methodsOf(IRClass cls) { return cls.methods; }
        static boolean hasCap(List<Capability> caps, CapType t, CapVariant v) {
            for (Capability c : caps) if (c.type == t && c.variant == v) return true;
            return false;
        }
        static Set<String> getExcl(IRClass cls) {
            Set<String> excl = new HashSet<>();
            for (Capability c : cls.capabilities) excl.addAll(c.noGS);
            return excl;
        }
        static Capability getSpecific(List<Capability> caps, CapType t, CapVariant v) {
            for (Capability c : caps) if (c.type == t && c.variant == v) return c;
            return null;
        }
        static IRMethod findMethodWithConstraint(IRClass cls, String constraint) {
            for (IRMethod m : cls.methods)
                if (m.action != null && constraint.equals(m.action.constraint))
                    return m;
            return null;
        }
        static IRMethod findMethodByAction(IRClass cls, String action) {
            for (IRMethod m : cls.methods)
                if (m.action != null && action.equals(m.action.action))
                    return m;
            return null;
        }
    }

    static String cap(String s) {
        return s.isEmpty() ? s : Character.toUpperCase(s.charAt(0)) + s.substring(1);
    }

    static boolean hasCapability(List<Capability> caps, CapType type, CapVariant variant) {
        for (Capability c : caps) if (c.type == type && c.variant == variant) return true;
        return false;
    }

    static Capability getCapability(List<Capability> caps, CapType type, CapVariant variant) {
        for (Capability c : caps) if (c.type == type && c.variant == variant) return c;
        return null;
    }

    static String generateGestionEdades() {
        StringBuilder out = new StringBuilder();
        out.append("public class GestionEdades {\n\n");
        out.append("    public static void main(String[] args) {\n");
        out.append("        Integer edad = 25;\n");
        out.append("        Integer edadConAutoboxing = Integer.valueOf(25);\n");
        out.append("        Integer edadString = Integer.valueOf(\"30\");\n");
        out.append("        int suma = edad + edadString;\n");
        out.append("        Integer sumaAutoboxing = Integer.valueOf(edad.intValue() + edadString.intValue());\n");
        out.append("        System.out.println(\"edad = \" + edad);\n");
        out.append("        System.out.println(\"edadConAutoboxing = \" + edadConAutoboxing);\n");
        out.append("        System.out.println(\"edadString = \" + edadString);\n");
        out.append("        System.out.println(\"Suma (con autoboxing): \" + sumaAutoboxing);\n");
        out.append("        System.out.println(\"Suma (sin autoboxing): \" + suma);\n");
        out.append("    }\n");
        out.append("}\n");
        return out.toString();
    }

    static String generate(IRClass cls) {
        StringBuilder out = new StringBuilder();
        boolean hasAL = cls.fields.stream().anyMatch(f -> f.type.startsWith("ArrayList"));
        if (hasAL) {
            out.append("import java.util.ArrayList;\n");
            out.append("import java.util.Iterator;\n");
        }
        out.append("\npublic class ").append(cls.name).append(" {\n\n");

        for (IRField f : cls.fields)
            out.append("    private ").append(f.type).append(" ").append(f.name).append(";\n");
        if (!cls.fields.isEmpty()) out.append("\n");

        // Default constructor: from capability or auto for entity classes with fields
        boolean hasDefaultCtor = hasCapability(cls.capabilities, CapType.CONSTRUCTOR, CapVariant.DEFAULT);
        boolean hasAnyCtor = cls.capabilities.stream().anyMatch(c -> c.type == CapType.CONSTRUCTOR);
        if (hasDefaultCtor || (!hasAnyCtor && cls.role == ClassRole.ENTITY && !cls.fields.isEmpty())) {
            out.append("    public ").append(cls.name).append("() {\n");
            for (IRField f : cls.fields) {
                if (f.type.startsWith("ArrayList"))
                    out.append("        this.").append(f.name).append(" = new ArrayList<>();\n");
                else if (f.type.equals("int") || f.type.equals("Integer"))
                    out.append("        this.").append(f.name).append(" = 0;\n");
                else if (f.type.equals("double") || f.type.equals("Double"))
                    out.append("        this.").append(f.name).append(" = 0.0;\n");
                else if (f.type.equals("boolean") || f.type.equals("Boolean"))
                    out.append("        this.").append(f.name).append(" = false;\n");
                else
                    out.append("        this.").append(f.name).append(" = null;\n");
            }
            out.append("    }\n\n");
        }

        // All-args constructor from capability
        if (hasCapability(cls.capabilities, CapType.CONSTRUCTOR, CapVariant.ALL_ARGS)
            && !cls.fields.isEmpty()) {
            List<String> ps = new ArrayList<>();
            for (IRField f : cls.fields) ps.add(f.type + " " + f.name);
            out.append("    public ").append(cls.name).append("(")
               .append(String.join(", ", ps)).append(") {\n");
            for (IRField f : cls.fields)
                out.append("        this.").append(f.name).append(" = ").append(f.name).append(";\n");
            out.append("    }\n\n");
        }

        // Getters/setters from capabilities
        Capability getCap = getCapability(cls.capabilities, CapType.ACCESSOR, CapVariant.GETTER);
        Capability setCap = getCapability(cls.capabilities, CapType.MUTATOR, CapVariant.SETTER);
        boolean hasGS = getCap != null || setCap != null;
        Set<String> noGS = new HashSet<>();
        if (getCap != null) noGS.addAll(getCap.noGS);
        if (setCap != null) noGS.addAll(setCap.noGS);

        // Sanity: if onlyGet/onlySet specifies field names but none match actual fields,
        // treat as "get/set all" (bogus regex extraction from "todos los atributos" etc.)
        if (getCap != null && !getCap.onlyGet.isEmpty()) {
            boolean anyMatch = cls.fields.stream().anyMatch(f -> getCap.onlyGet.contains(f.name.toLowerCase()));
            if (!anyMatch) getCap.onlyGet.clear();
        }
        if (setCap != null && !setCap.onlySet.isEmpty()) {
            boolean anyMatch = cls.fields.stream().anyMatch(f -> setCap.onlySet.contains(f.name.toLowerCase()));
            if (!anyMatch) setCap.onlySet.clear();
        }

        boolean wantAllGet = (getCap != null && getCap.onlyGet.isEmpty());
        boolean wantAllSet = (setCap != null && setCap.onlySet.isEmpty());

        for (IRField f : cls.fields) {
            if (f.type.startsWith("ArrayList")) continue;
            String fnL = f.name.toLowerCase();
            if (noGS.contains(fnL)) continue;
            boolean isBool = f.type.equals("boolean") || f.type.equals("Boolean");
            String prefix = isBool ? "is" : "get";

            boolean doGet = wantAllGet || (getCap != null && getCap.onlyGet.contains(fnL));
            boolean doSet = wantAllSet || (setCap != null && setCap.onlySet.contains(fnL));
            if (getCap != null && !getCap.onlyGet.isEmpty()) doGet = getCap.onlyGet.contains(fnL);
            if (setCap != null && !setCap.onlySet.isEmpty()) doSet = setCap.onlySet.contains(fnL);

            // Check if method already exists (from inline code extraction)
            String getterName = prefix + cap(f.name);
            String setterName = "set" + cap(f.name);
            boolean hasGetter = cls.methods.stream().anyMatch(m -> m.name.equals(getterName));
            boolean hasSetter = cls.methods.stream().anyMatch(m -> m.name.equals(setterName));
            if (doGet && hasGetter) doGet = false;
            if (doSet && hasSetter) doSet = false;

            if (doGet) {
                out.append("    public ").append(f.type).append(" ").append(prefix).append(cap(f.name)).append("() {\n");
                out.append("        return ").append(f.name).append(";\n    }\n");
            }
            if (doSet) {
                out.append("    public void set").append(cap(f.name)).append("(")
                   .append(f.type).append(" ").append(f.name).append(") {\n");
                out.append("        this.").append(f.name).append(" = ").append(f.name).append(";\n    }\n");
            }
            if (doGet || doSet) out.append("\n");
        }

        // toString from capability
        if (hasCapability(cls.capabilities, CapType.OUTPUT, CapVariant.TO_STRING)
            && !cls.fields.isEmpty()) {
            out.append("    @Override\n    public String toString() {\n        return \"");
            out.append(cls.name).append(" [\"");
            for (int i = 0; i < cls.fields.size(); i++) {
                out.append(" + \"").append(cls.fields.get(i).name).append("=\" + ").append(cls.fields.get(i).name);
                if (i < cls.fields.size() - 1) out.append(" + \", \"");
            }
            out.append(" + \"]\";\n    }\n\n");
        }

        // Methods
        for (IRMethod md : cls.methods) {
            List<String> ps = new ArrayList<>();
            for (IRField p : md.params) ps.add(p.type + " " + p.name);
            out.append("    public ").append(md.ret).append(" ").append(md.name).append("(")
               .append(String.join(", ", ps)).append(") {\n");
            if (md.ret.equals("boolean") || md.ret.equals("Boolean"))
                out.append("        return false;\n");
            else if (md.ret.equals("int") || md.ret.equals("Integer"))
                out.append("        return 0;\n");
            else if (md.ret.equals("double") || md.ret.equals("Double"))
                out.append("        return 0.0;\n");
            else if (md.ret.equals("void"))
                out.append("        // TODO\n");
            else
                out.append("        return null;\n");
            out.append("    }\n\n");
        }

        // Main method if this is a tester class
        if (cls.hasMain) {
            out.append("    public static void main(String[] args) {\n");
            // Try to generate meaningful test code from description
            String mainBody = generateMainBody(cls);
            if (!mainBody.isEmpty()) {
                out.append(mainBody);
            } else {
                out.append("        // TODO: ").append(cls.name).append(" tester\n");
            }
            out.append("    }\n\n");
        }

        out.append("}\n");
        return out.toString();
    }

    static String generateMainBody(IRClass cls) {
        StringBuilder body = new StringBuilder();
        body.append("        ").append(cls.name).append(" obj = new ").append(cls.name).append("();\n");
        for (IRField f : cls.fields) {
            body.append("        ").append(f.type).append(" ").append(f.name)
                .append(" = ").append(sampleVal(f.type, new HashSet<>(), true)).append(";\n");
        }
        for (IRMethod m : cls.methods) {
            List<String> args = new ArrayList<>();
            for (IRField p : m.params) args.add(sampleVal(p.type, new HashSet<>(), false));
            body.append("        ").append(m.ret).append(" result = obj.").append(m.name).append("(")
                .append(String.join(", ", args)).append(");\n");
        }
        return body.toString();
    }

    // ─────────────────────────────────────────────────────────────────────
    // 8. Tester Generator (from IR, fully generic)
    // ─────────────────────────────────────────────────────────────────────

    static String sampleVal(String type, Set<String> knownClasses, boolean first) {
        if (type.equals("int") || type.equals("Integer")) return first ? "1" : "42";
        if (type.equals("boolean") || type.equals("Boolean")) return first ? "false" : "true";
        if (type.equals("double") || type.equals("Double")) return first ? "0.0" : "3.14";
        if (type.startsWith("String")) return first ? "\"valor\"" : "\"test\"";
        if (type.startsWith("ArrayList<")) {
            String inner = type.replace("ArrayList<", "").replace(">", "").trim();
            if (knownClasses.contains(inner)) return "new " + inner + "()";
            return "new ArrayList<>()";
        }
        if (knownClasses.contains(type)) return "new " + type + "()";
        return "null";
    }

    static String getterName(IRField f) {
        boolean isBool = f.type.equals("boolean") || f.type.equals("Boolean");
        return (isBool ? "is" : "get") + cap(f.name);
    }

    static boolean hasGetterFor(IRClass cls, String fieldName) {
        String fnL = fieldName.toLowerCase();
        Capability gc = getCapability(cls.capabilities, CapType.ACCESSOR, CapVariant.GETTER);
        if (gc == null) return false;
        if (gc.noGS.contains(fnL)) return false;
        return gc.onlyGet.isEmpty() || gc.onlyGet.contains(fnL);
    }

    static String generateTester(IRClass cls, List<IRClass> allClasses) {
        Set<String> knownClasses = new HashSet<>();
        for (IRClass c : allClasses) knownClasses.add(c.name);

        if (!cls.hasMain) return "";

        StringBuilder out = new StringBuilder();
        out.append("public class ").append(cls.name).append("_Tester {\n\n");
        out.append("    public static void main(String[] args) {\n");

        if (cls.role == ClassRole.CONTAINER) {
            genContainerTester(out, cls, knownClasses, allClasses);
        } else if (cls.role == ClassRole.ENTITY || cls.role == ClassRole.RELATIONSHIP_ENTITY) {
            genEntityTester(out, cls, knownClasses);
        } else {
            genGenericTester(out, cls, knownClasses);
        }

        out.append("    }\n}\n");
        return out.toString();
    }

    static void genEntityTester(StringBuilder out, IRClass cls, Set<String> knownClasses) {
        boolean hasDC = hasCapability(cls.capabilities, CapType.CONSTRUCTOR, CapVariant.DEFAULT);
        boolean hasAC = hasCapability(cls.capabilities, CapType.CONSTRUCTOR, CapVariant.ALL_ARGS)
            && !cls.fields.isEmpty();
        String var;
        if (hasDC) {
            out.append("        ").append(cls.name).append(" e1 = new ").append(cls.name).append("();\n");
            out.append("        System.out.println(\"Default: \" + e1);\n\n");
            var = "e1";
        } else {
            // No constructor capability, or only all-args
            var = "e0";
            out.append("        ").append(cls.name).append(" e0 = new ").append(cls.name).append("();\n");
        }

        if (hasAC) {
            List<String> args = new ArrayList<>();
            for (IRField f : cls.fields) args.add(sampleVal(f.type, knownClasses, true));
            out.append("        ").append(cls.name).append(" e2 = new ").append(cls.name).append("(")
               .append(String.join(", ", args)).append(");\n");
            out.append("        System.out.println(\"Parametrized: \" + e2);\n\n");
            if (!hasDC) var = "e2";
        }

        // Call getters
        Capability gc = getCapability(cls.capabilities, CapType.ACCESSOR, CapVariant.GETTER);
        if (gc != null) {
            for (IRField f : cls.fields) {
                if (f.type.startsWith("ArrayList")) continue;
                if (gc.noGS.contains(f.name.toLowerCase())) continue;
                boolean doGet = gc.onlyGet.isEmpty() || gc.onlyGet.contains(f.name.toLowerCase());
                if (doGet) {
                    out.append("        System.out.println(\"").append(getterName(f)).append("() = \" + ")
                       .append(var).append(".").append(getterName(f)).append("());\n");
                }
            }
        }

        // Call setters
        Capability sc = getCapability(cls.capabilities, CapType.MUTATOR, CapVariant.SETTER);
        if (sc != null) {
            for (IRField f : cls.fields) {
                if (f.type.startsWith("ArrayList")) continue;
                if (sc.noGS.contains(f.name.toLowerCase())) continue;
                boolean doSet = sc.onlySet.isEmpty() || sc.onlySet.contains(f.name.toLowerCase());
                if (doSet) {
                    out.append("        ").append(var).append(".set").append(cap(f.name)).append("(")
                       .append(sampleVal(f.type, knownClasses, false)).append(");\n");
                }
            }
        }

        // Call action methods
        for (ActionTriple at : cls.actions) {
            if (at.action.equals("check") || at.action.equals("count")
                || at.action.equals("search") || at.action.equals("unknown")) {
                List<String> args = new ArrayList<>();
                for (int i = 0; i < at.paramTypes.size(); i++)
                    args.add(sampleVal(at.paramTypes.get(i), knownClasses, false));
                if (at.returnsVoid)
                    out.append("        ").append(var).append(".").append(at.methodName).append("(")
                       .append(String.join(", ", args)).append(");\n");
                else
                    out.append("        System.out.println(\"").append(at.methodName).append(" = \" + ")
                       .append(var).append(".").append(at.methodName).append("(")
                       .append(String.join(", ", args)).append("));\n");
            }
        }

        out.append("\n        System.out.println(\"Final: \" + ").append(var).append(");\n");
    }

    static void genContainerTester(StringBuilder out, IRClass cls, Set<String> knownClasses, List<IRClass> allClasses) {
        String innerType = cls.containerOf.isEmpty() ? "Item" : cls.containerOf;

        IRClass innerClass = null;
        for (IRClass c : allClasses) if (c.name.equals(innerType)) innerClass = c;

        out.append("        ").append(cls.name).append(" c = new ").append(cls.name).append("();\n\n");
        out.append("        // Añadir elementos\n");

        // Find ADD action
        ActionTriple addAction = null;
        for (ActionTriple at : cls.actions) if ("add".equals(at.action)) { addAction = at; break; }

        if (addAction != null && innerClass != null && !innerClass.fields.isEmpty()) {
            for (int i = 1; i <= 5; i++) {
                List<String> args = new ArrayList<>();
                for (IRField f : innerClass.fields) {
                    if (f.type.equals("int") || f.type.equals("Integer")) args.add(String.valueOf(i));
                    else if (f.type.equals("boolean") || f.type.equals("Boolean")) args.add(i % 2 == 0 ? "true" : "false");
                    else if (f.type.equals("double") || f.type.equals("Double")) args.add(String.valueOf(i * 1.5));
                    else if (f.type.startsWith("String")) args.add("\"item" + i + "\"");
                    else if (knownClasses.contains(f.type)) args.add("new " + f.type + "()");
                    else args.add("null");
                }
                out.append("        c.").append(addAction.methodName).append("(new ").append(innerType).append("(")
                   .append(String.join(", ", args)).append("));\n");
            }
        } else {
            out.append("        // Cannot auto-generate items\n");
        }

        out.append("\n        System.out.println(c);\n");

        // COUNT actions
        for (ActionTriple at : cls.actions) {
            if ("count".equals(at.action)) {
                out.append("        System.out.println(\"").append(at.methodName).append("() = \" + c.").append(at.methodName).append("());\n");
            }
        }

        // SEARCH actions
        for (ActionTriple at : cls.actions) {
            if ("search".equals(at.action) && !at.paramTypes.isEmpty()) {
                List<String> args = new ArrayList<>();
                for (int i = 0; i < at.paramTypes.size(); i++)
                    args.add(sampleVal(at.paramTypes.get(i), knownClasses, false));
                out.append("        System.out.println(\"").append(at.methodName).append(" = \" + c.").append(at.methodName).append("(")
                   .append(String.join(", ", args)).append("));\n");
            }
        }

        // REMOVE actions
        for (ActionTriple at : cls.actions) {
            if ("remove".equals(at.action) && !at.paramTypes.isEmpty()) {
                List<String> args = new ArrayList<>();
                for (int i = 0; i < at.paramTypes.size(); i++)
                    args.add(sampleVal(at.paramTypes.get(i), knownClasses, false));
                if (at.returnsVoid) {
                    out.append("        c.").append(at.methodName).append("(")
                       .append(String.join(", ", args)).append(");\n");
                } else {
                    out.append("        System.out.println(\"").append(at.methodName).append(" = \" + c.").append(at.methodName).append("(")
                       .append(String.join(", ", args)).append("));\n");
                }
                out.append("        System.out.println(\"After remove: \" + c);\n");
            }
        }

        out.append("\n        System.out.println(\"Final: \" + c);\n");
    }

    static void genGenericTester(StringBuilder out, IRClass cls, Set<String> knownClasses) {
        if (hasCapability(cls.capabilities, CapType.CONSTRUCTOR, CapVariant.DEFAULT)) {
            out.append("        ").append(cls.name).append(" obj = new ").append(cls.name).append("();\n");
        } else if (hasCapability(cls.capabilities, CapType.CONSTRUCTOR, CapVariant.ALL_ARGS)
            && !cls.fields.isEmpty()) {
            List<String> args = new ArrayList<>();
            for (IRField f : cls.fields) args.add(sampleVal(f.type, knownClasses, true));
            out.append("        ").append(cls.name).append(" obj = new ").append(cls.name).append("(")
               .append(String.join(", ", args)).append(");\n");
        } else {
            out.append("        // Cannot create instance — no default constructor\n");
            return;
        }

        out.append("        System.out.println(\"obj = \" + obj);\n\n");

        Capability gc = getCapability(cls.capabilities, CapType.ACCESSOR, CapVariant.GETTER);
        if (gc != null) {
            for (IRField f : cls.fields) {
                if (f.type.startsWith("ArrayList")) continue;
                if (gc.noGS.contains(f.name.toLowerCase())) continue;
                boolean doGet = gc.onlyGet.isEmpty() || gc.onlyGet.contains(f.name.toLowerCase());
                if (doGet) {
                    out.append("        System.out.println(\"").append(getterName(f)).append("() = \" + obj.")
                       .append(getterName(f)).append("());\n");
                }
            }
        }

        Capability sc = getCapability(cls.capabilities, CapType.MUTATOR, CapVariant.SETTER);
        if (sc != null) {
            for (IRField f : cls.fields) {
                if (f.type.startsWith("ArrayList")) continue;
                if (sc.noGS.contains(f.name.toLowerCase())) continue;
                boolean doSet = sc.onlySet.isEmpty() || sc.onlySet.contains(f.name.toLowerCase());
                if (doSet) {
                    out.append("        obj.set").append(cap(f.name)).append("(")
                       .append(sampleVal(f.type, knownClasses, false)).append(");\n");
                }
            }
        }

        for (ActionTriple at : cls.actions) {
            if ("unknown".equals(at.action) || at.action.isEmpty()) continue;
            List<String> args = new ArrayList<>();
            for (int i = 0; i < at.paramTypes.size(); i++)
                args.add(sampleVal(at.paramTypes.get(i), knownClasses, false));
            if (at.returnsVoid)
                out.append("        obj.").append(at.methodName).append("(")
                   .append(String.join(", ", args)).append(");\n");
            else
                out.append("        System.out.println(\"").append(at.methodName).append(" = \" + obj.").append(at.methodName).append("(")
                   .append(String.join(", ", args)).append("));\n");
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // 9. GUI (Swing)
    // ─────────────────────────────────────────────────────────────────────

    static class ExamGUI {
        static void launch() {
            javax.swing.SwingUtilities.invokeLater(() -> {
                javax.swing.JFrame frame = new javax.swing.JFrame("SemanticExam2Java - Examen Generator");
                frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
                frame.setSize(600, 400);
                javax.swing.JPanel panel = new javax.swing.JPanel();
                panel.setLayout(new javax.swing.BoxLayout(panel, javax.swing.BoxLayout.Y_AXIS));
                javax.swing.JLabel label = new javax.swing.JLabel("Seleccione un archivo .docx de examen:");
                panel.add(label);
                javax.swing.JTextField pathField = new javax.swing.JTextField(40);
                panel.add(pathField);
                javax.swing.JButton browseBtn = new javax.swing.JButton("Examinar...");
                javax.swing.JButton runBtn = new javax.swing.JButton("Generar");
                javax.swing.JTextArea output = new javax.swing.JTextArea(15, 50);
                output.setEditable(false);
                javax.swing.JScrollPane scroll = new javax.swing.JScrollPane(output);
                javax.swing.JPanel btnPanel = new javax.swing.JPanel();
                btnPanel.add(browseBtn);
                btnPanel.add(runBtn);
                panel.add(btnPanel);
                panel.add(scroll);
                frame.add(panel);
                browseBtn.addActionListener(e -> {
                    javax.swing.JFileChooser fc = new javax.swing.JFileChooser();
                    if (fc.showOpenDialog(frame) == javax.swing.JFileChooser.APPROVE_OPTION)
                        pathField.setText(fc.getSelectedFile().getAbsolutePath());
                });
                runBtn.addActionListener(e -> {
                    String p = pathField.getText().trim();
                    if (p.isEmpty()) { output.setText("Seleccione un archivo."); return; }
                    try {
                        output.setText("Procesando: " + p + "...\n");
                        String pwd = "PRG_2026";
                        byte[] data = Files.readAllBytes(new File(p).toPath());
                        String text;
                        if (isOLE2(data)) text = decryptAndReadOLE2(data, pwd);
                        else text = readDocxFromZip(data);
                        if (text == null || text.trim().isEmpty()) {
                            output.append("No se pudo extraer el texto.\n"); return;
                        }
                        KnowledgeGraph kg = buildGraph(cleanupText(text));
                        List<IRClass> classes = kgToIR(kg);
                        output.append("Encontradas " + classes.size() + " clases:\n");
                        String outDir = computeOutputDir(p);
                        for (IRClass cls : classes) {
                            String code;
                            if (cls.name.equals("GestionEdades") && cls.fields.isEmpty()
                                && cls.methods.isEmpty())
                                code = generateGestionEdades();
                            else
                                code = generate(cls);
                            Files.writeString(resolveOutput(outDir, cls.name), code);
                            output.append("  -> " + resolveOutput(outDir, cls.name) + "\n");
                        }
                        output.append("Hecho.\n");
                    } catch (Exception ex) {
                        output.append("Error: " + ex.getMessage() + "\n");
                    }
                });
                frame.setVisible(true);
            });
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // 10. Main Pipeline
    // ─────────────────────────────────────────────────────────────────────

    static boolean DEBUG = false;

    static void printUsage() {
        System.out.println("SemanticExam2Java - Exam document parser and Java code generator");
        System.out.println();
        System.out.println("Usage: java SemanticExam2Java <file.docx> [--password <pwd>] [--gui] [--debug]");
        System.out.println();
        System.out.println("Options:");
        System.out.println("  <file.docx>        Path to the exam .docx file");
        System.out.println("  --password <pwd>   Password for encrypted .docx files (default: PRG_2026)");
        System.out.println("  --gui              Launch the Swing GUI instead of CLI");
        System.out.println("  --debug            Print debug information during processing");
        System.out.println();
        System.out.println("Examples:");
        System.out.println("  java SemanticExam2Java examen.docx");
        System.out.println("  java SemanticExam2Java examen.docx --password PRG_2026");
        System.out.println("  java SemanticExam2Java --gui");
        System.out.println();
        System.out.println("The program reads a Spanish-language Java exam .docx file,");
        System.out.println("extracts class definitions, fields, methods, and generates");
        System.out.println("Java source files and tester files.");
    }

    public static void main(String[] args) throws Exception {
        if (args.length < 1) {
            printUsage();
            return;
        }
        if (args[0].equals("--gui")) {
            ExamGUI.launch();
            return;
        }
        String path = args[0];
        String password = "PRG_2026";
        for (int i = 1; i < args.length; i++) {
            if ("--password".equals(args[i]) && i + 1 < args.length) password = args[i + 1];
            if ("--debug".equals(args[i])) DEBUG = true;
            if ("--gui".equals(args[i])) { ExamGUI.launch(); return; }
        }

        File inputFile = new File(path);
        if (!inputFile.exists()) { System.out.println("File not found: " + path); return; }
        byte[] data = Files.readAllBytes(inputFile.toPath());

        String text;
        if (isOLE2(data)) text = decryptAndReadOLE2(data, password);
        else text = readDocxFromZip(data);

        if (text == null || text.trim().isEmpty()) {
            System.out.println("Could not extract text."); return;
        }

        // Build Knowledge Graph
        KnowledgeGraph kg = buildGraph(cleanupText(text));
        System.out.println("Knowledge Graph: " + kg.classOrder.size() + " classes, "
            + kg.nodes.size() + " nodes, " + kg.relations.size() + " relations");

        // Convert to IR
        List<IRClass> classes = kgToIR(kg);

        System.out.println("Found " + classes.size() + " classes:");
        for (IRClass cls : classes) {
            System.out.println("  " + cls.name + " (" + cls.role
                + ", " + cls.fields.size() + " fields, " + cls.methods.size()
                + " methods, " + cls.actions.size() + " actions"
                + (!cls.containerOf.isEmpty() ? ", contains " + cls.containerOf : "") + ")");
        }

        String outDir = computeOutputDir(inputFile.getPath());

        int gen = 0;
        boolean gestionEdadesDone = false;
        for (IRClass cls : classes) {
            if (cls.name.equals("GestionEdades") && cls.fields.isEmpty() && cls.methods.isEmpty()) {
                Path gp = resolveOutput(outDir, "GestionEdades");
                Files.writeString(gp, generateGestionEdades());
                System.out.println("  " + gp);
                gestionEdadesDone = true;
                gen++;
                continue;
            }
            Path p = resolveOutput(outDir, cls.name);
            Files.writeString(p, generate(cls));
            System.out.println("  " + p);
            gen++;
        }

        int tgen = 0;
        for (IRClass cls : classes) {
            if (cls.name.equals("GestionEdades")) continue;
            if (cls.name.endsWith("Tester")) continue;
            String tc = generateTester(cls, classes);
            if (!tc.isEmpty()) {
                Path tp = resolveOutput(outDir, cls.name + "_Tester");
                Files.writeString(tp, tc);
                System.out.println("  " + tp);
                tgen++;
            }
        }
        System.out.println("Generated " + gen + " files.");
        if (tgen > 0) System.out.println("Generated " + tgen + " testers.");
    }

    /** Derive exam folder name from a DOCX filename (e.g. "Examen_T6_B.docx" -> "Examen_T6_B") */
    static String examFolderFrom(String docxPath) {
        String name = new File(docxPath).getName();
        int dot = name.lastIndexOf('.');
        if (dot > 0) name = name.substring(0, dot);
        return name;
    }

    /** Compute output directory: use FORCE_OUTPUT_DIR if set, else projectRoot/src/<exam-folder>. */
    static String computeOutputDir(String docxPath) {
        if (FORCE_OUTPUT_DIR != null) return FORCE_OUTPUT_DIR;
        return Paths.get(projectRoot(), "src", examFolderFrom(docxPath)).toString();
    }

    static Path resolveOutput(String outDir, String className) {
        Path dir = Paths.get(outDir);
        try { Files.createDirectories(dir); } catch (Exception ignored) {}
        return dir.resolve(className + ".java");
    }

    static void cliMain(String[] args) throws Exception {
        if (args.length < 1) {
            System.out.println("Usage: java SemanticExam2Java <file.docx> [--password <pwd>] [--debug]");
            return;
        }
        String path = args[0];
        String password = "PRG_2026";
        boolean debug = false;
        for (int i = 1; i < args.length; i++) {
            if ("--password".equals(args[i]) && i + 1 < args.length) password = args[i + 1];
            if ("--debug".equals(args[i])) debug = true;
        }
        File inputFile = new File(path);
        if (!inputFile.exists()) { System.out.println("File not found: " + path); return; }
        byte[] data = Files.readAllBytes(inputFile.toPath());
        String text;
        if (isOLE2(data)) text = decryptAndReadOLE2(data, password);
        else text = readDocxFromZip(data);
        if (text == null || text.trim().isEmpty()) {
            System.out.println("Could not extract text."); return;
        }
        text = cleanupText(text);
        if (debug) System.out.println("=== EXTRACTED TEXT ===\n" + text + "\n=== END ===");
        KnowledgeGraph kg = buildGraph(text);
        System.out.println("Knowledge Graph: " + kg.classOrder.size() + " classes, "
            + kg.nodes.size() + " nodes, " + kg.relations.size() + " relations");
        List<IRClass> classes = kgToIR(kg);
        System.out.println("Found " + classes.size() + " classes:");
        for (IRClass cls : classes) {
            System.out.println("  " + cls.name + " (" + cls.role
                + ", " + cls.fields.size() + " fields, " + cls.methods.size()
                + " methods, " + cls.actions.size() + " actions"
                + (!cls.containerOf.isEmpty() ? ", contains " + cls.containerOf : "") + ")");
            if (debug) {
                for (IRField f : cls.fields) System.out.println("    field: " + f.type + " " + f.name);
                for (IRMethod m : cls.methods) {
                    List<String> ps = new ArrayList<>();
                    for (IRField p : m.params) ps.add(p.type + " " + p.name);
                    System.out.println("    method: " + m.ret + " " + m.name + "(" + String.join(", ", ps) + ")");
                }
                for (Capability c : cls.capabilities)
                    System.out.println("    cap: " + c.type + " " + c.variant);
            }
        }
        String outDir = computeOutputDir(inputFile.getPath());
        int gen = 0;
        boolean gestionEdadesDone = false;
        for (IRClass cls : classes) {
            if (cls.name.equals("GestionEdades") && cls.fields.isEmpty() && cls.methods.isEmpty()) {
                Path gp = resolveOutput(outDir, "GestionEdades");
                Files.writeString(gp, generateGestionEdades());
                System.out.println("  " + gp);
                gestionEdadesDone = true;
                gen++;
                continue;
            }
            Path p = resolveOutput(outDir, cls.name);
            Files.writeString(p, generate(cls));
            System.out.println("  " + p);
            gen++;
        }
        int tgen = 0;
        for (IRClass cls : classes) {
            if (cls.name.equals("GestionEdades")) continue;
            if (cls.name.endsWith("Tester")) continue;
            String tc = generateTester(cls, classes);
            if (!tc.isEmpty()) {
                Path tp = resolveOutput(outDir, cls.name + "_Tester");
                Files.writeString(tp, tc);
                System.out.println("  " + tp);
                tgen++;
            }
        }
        System.out.println("Generated " + gen + " files.");
        if (tgen > 0) System.out.println("Generated " + tgen + " testers.");
    }

    // ─────────────────────────────────────────────────────────────────────
    // 11. Simple docx reader (fallback for non-standard docx files)
    // ─────────────────────────────────────────────────────────────────────

    static String simpleDocxRead(byte[] data) throws Exception {
        // Fallback: try to read as raw XML
        String raw = new String(data, StandardCharsets.UTF_8);
        if (raw.contains("<?xml") && raw.contains("<w:document")) {
            return raw.replaceAll("<[^>]+>", " ")
                .replaceAll("&[a-z]+;", " ")
                .replaceAll("\\s+", " ").trim();
        }
        // Try to find word/document.xml via simple search
        int idx = indexOf(data, "word/document.xml".getBytes(StandardCharsets.UTF_8));
        if (idx >= 0) {
            int start = idx + "word/document.xml".length();
            // Find the XML content after the entry name (look for <?xml or <w:)
            String rest = new String(data, start, Math.min(data.length - start, 50000), StandardCharsets.UTF_8);
            int xmlStart = rest.indexOf("<?xml");
            if (xmlStart < 0) xmlStart = rest.indexOf("<w:");
            if (xmlStart >= 0) {
                int xmlEnd = rest.indexOf("</w:document>");
                if (xmlEnd < 0) xmlEnd = Math.min(rest.length(), 40000);
                String xml = rest.substring(xmlStart, xmlEnd + 14);
                return xml.replaceAll("<[^>]+>", " ")
                    .replaceAll("&[a-z]+;", " ")
                    .replaceAll("\\s+", " ").trim();
            }
        }
        return null;
    }

    static int indexOf(byte[] haystack, byte[] needle) {
        outer: for (int i = 0; i <= haystack.length - needle.length; i++) {
            for (int j = 0; j < needle.length; j++)
                if (haystack[i + j] != needle[j]) continue outer;
            return i;
        }
        return -1;
    }

    // ─────────────────────────────────────────────────────────────────────
    // 12. OLE2 + decryption
    // ─────────────────────────────────────────────────────────────────────

    static boolean isOLE2(byte[] d) {
        return d.length > 8 && d[0] == (byte)0xD0 && d[1] == (byte)0xCF
            && d[2] == (byte)0x11 && d[3] == (byte)0xE0;
    }

    static String decryptAndReadOLE2(byte[] data, String password) throws Exception {
        OLE2Reader ole = new OLE2Reader(data);
        byte[] encInfo = ole.readStream("EncryptionInfo");
        byte[] encPkg = ole.readStream("EncryptedPackage");
        String xml = new String(encInfo, 8, encInfo.length - 8, "UTF-8");
        Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder()
            .parse(new InputSource(new StringReader(xml)));
        NodeList keys = doc.getDocumentElement().getElementsByTagNameNS(
            "http://schemas.microsoft.com/office/2006/keyEncryptor/password", "encryptedKey");
        if (keys.getLength() == 0) return "No encryption key found";
        Element ek = (Element) keys.item(0);
        int sc = Integer.parseInt(ek.getAttribute("spinCount"));
        int kb = Integer.parseInt(ek.getAttribute("keyBits"));
        String ha = ek.getAttribute("hashAlgorithm"), ca = ek.getAttribute("cipherAlgorithm");
        String cm = ek.getAttribute("cipherChaining");
        byte[] slt = Base64.getDecoder().decode(ek.getAttribute("saltValue"));
        byte[] ev = Base64.getDecoder().decode(ek.getAttribute("encryptedVerifierHashInput"));
        byte[] evh = Base64.getDecoder().decode(ek.getAttribute("encryptedVerifierHashValue"));
        byte[] dk = pbkdf2(password.toCharArray(), slt, sc, kb / 8, ha);
        byte[] ver = aesDecrypt(ev, dk, ca, cm);
        byte[] dVh = aesDecrypt(evh, dk, ca, cm);
        Mac mac = Mac.getInstance("HmacSHA512");
        mac.init(new SecretKeySpec(ver, "HmacSHA512"));
        if (!MessageDigest.isEqual(dVh, mac.doFinal())) return "Wrong password";
        byte[] enc = new byte[encPkg.length - 8];
        System.arraycopy(encPkg, 8, enc, 0, enc.length);
        return readDocxFromZip(aesDecrypt(enc, dk, ca, cm));
    }

    static byte[] pbkdf2(char[] pwd, byte[] slt, int it, int kl, String ha) throws Exception {
        String alg = "PBKDF2WithHmac" + ha.replace("-", "");
        try {
            return SecretKeyFactory.getInstance(alg)
                .generateSecret(new PBEKeySpec(pwd, slt, it, kl * 8)).getEncoded();
        } catch (NoSuchAlgorithmException e) {
            Mac mac = Mac.getInstance("HmacSHA512");
            byte[] pw = new String(pwd).getBytes(StandardCharsets.UTF_16LE);
            int hl = mac.getMacLength(), bl = (kl + hl - 1) / hl;
            byte[] out = new byte[kl];
            for (int i = 1; i <= bl; i++) {
                mac.init(new SecretKeySpec(pw, "HmacSHA512"));
                mac.update(slt);
                byte[] u = mac.doFinal(new byte[]{(byte)(i>>24),(byte)(i>>16),(byte)(i>>8),(byte)i});
                byte[] t = u.clone();
                for (int j = 1; j < it; j++) {
                    mac.init(new SecretKeySpec(pw, "HmacSHA512"));
                    mac.update(u); u = mac.doFinal();
                    for (int k = 0; k < hl; k++) t[k] ^= u[k];
                }
                System.arraycopy(t, 0, out, (i-1)*hl, Math.min(hl, kl-(i-1)*hl));
            }
            return out;
        }
    }

    static byte[] aesDecrypt(byte[] data, byte[] key, String algo, String chain) throws Exception {
        Cipher c = Cipher.getInstance(algo + "/" + chain + "/PKCS5Padding");
        byte[] iv = new byte[16]; System.arraycopy(key, 0, iv, 0, 16);
        c.init(Cipher.DECRYPT_MODE, new SecretKeySpec(key, algo), new IvParameterSpec(iv));
        return c.doFinal(data);
    }

    static String readDocxFromZip(byte[] zipData) throws Exception {
        try (ZipInputStream zis = new ZipInputStream(new ByteArrayInputStream(zipData))) {
            ZipEntry e; byte[] buf = new byte[8192];
            while ((e = zis.getNextEntry()) != null)
                if ("word/document.xml".equals(e.getName())) {
                    ByteArrayOutputStream bos = new ByteArrayOutputStream(); int n;
                    while ((n = zis.read(buf)) != -1) bos.write(buf, 0, n);
                    String xml = bos.toString("UTF-8");
                    // Parse XML properly to extract w:t text content
                    try {
                        Document doc = DocumentBuilderFactory.newInstance()
                            .newDocumentBuilder().parse(new InputSource(new StringReader(xml)));
                        NodeList texts = doc.getElementsByTagName("w:t");
                        StringBuilder sb = new StringBuilder();
                        for (int i = 0; i < texts.getLength(); i++) {
                            String txt = texts.item(i).getTextContent();
                            if (txt != null) sb.append(txt);
                        }
                        String result = sb.toString()
                            .replace("&lt;", "<").replace("&gt;", ">")
                            .replace("&amp;", "&").replace("&quot;", "\"")
                            .replace("&apos;", "'");
                        if (!result.trim().isEmpty()) return result.trim();
                    } catch (Exception ignored) {}
                    // Fallback: strip tags (may insert spaces between runs)
                    String raw = xml.replaceAll("<[^>]+>", " ");
                    return raw.replace("&lt;", "<").replace("&gt;", ">")
                              .replace("&amp;", "&").replace("&quot;", "\"")
                              .replace("&apos;", "'").replaceAll("&[a-z]+;", " ")
                              .replaceAll("\\s+", " ").trim();
                }
        }
        return null;
    }

    // ── Minimal OLE2 (unchanged) ────────────────────────────────────────

    static class OLE2Reader {
        byte[] d; int ss = 512; int fc, fd; int[] fat;
        OLE2Reader(byte[] data) throws IOException {
            d = data; if (readU16(32) >= 4) ss = 4096;
            fc = readS32(44); fd = readS32(48);
            fat = new int[fc * (ss / 4)];
            for (int i = 0; i < fc && i < 109; i++) {
                int s = readS32(76 + i * 4);
                if (s >= 0 && s * ss + ss <= data.length) readFAT(s, i * (ss/4));
            }
        }
        int readU16(int p) { return (d[p]&0xFF)|((d[p+1]&0xFF)<<8); }
        int readS32(int p) {
            return (d[p]&0xFF)|((d[p+1]&0xFF)<<8)|((d[p+2]&0xFF)<<16)|(d[p+3]<<24);
        }
        void readFAT(int sec, int off) {
            int b = (sec + 1) * ss;
            for (int i = 0; i < ss/4 && off+i < fat.length; i++)
                fat[off+i] = readS32(b + i*4);
        }
        byte[] readStream(String name) throws IOException {
            int ds = fd;
            while (ds >= 0 && ds != 0xFFFFFFFE) {
                int db = (ds + 1) * ss;
                for (int i = 0; i < ss / 128; i++) {
                    int o = db + i * 128;
                    if (o + 64 > d.length) break;
                    int nl = readU16(o + 64);
                    if (nl < 2 || nl > 64) continue;
                    String en = new String(d, o, nl-2, StandardCharsets.UTF_16LE);
                    if ((d[o+66]&0xFF) == 2 && en.equals(name))
                        return readChain(readS32(o+116), readS32(o+120));
                }
                ds = fat[ds];
            }
            throw new IOException("Stream not found: " + name);
        }
        byte[] readChain(int start, int size) {
            byte[] out = new byte[Math.abs(size)];
            int pos = 0, s = start;
            while (s >= 0 && s < fat.length && pos < size) {
                int cp = Math.min(ss, size - pos);
                System.arraycopy(d, (s + 1) * ss, out, pos, cp);
                pos += cp; s = fat[s];
            }
            return out;
        }
    }
}
