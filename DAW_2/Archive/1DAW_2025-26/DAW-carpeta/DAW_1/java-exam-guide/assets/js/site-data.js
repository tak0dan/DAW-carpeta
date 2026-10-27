(function () {
  function paragraph(parts) {
    return parts.join(" ");
  }

  const exampleStages = [
    "Literal declaration",
    "Single state change",
    "Two related fields",
    "Constructor initialization",
    "One validation rule",
    "Simple getter and setter flow",
    "One repeated action",
    "Search by key",
    "Delete by key",
    "Aggregate one metric",
    "Report one filtered subset",
    "Shared rule across objects",
    "Constant-driven policy",
    "Object plus manager class",
    "Multiple objects with coordination",
    "Failure handling and guards",
    "Reusable helper extraction",
    "Inheritance-aware version",
    "Composition-heavy workflow",
    "Cross-collection synchronization",
    "Multi-step exam scenario",
    "Business-rule layering",
    "Audit and reporting layer",
    "Refactoring for maintainability",
    "Absurd capstone system"
  ];

  const masteryBands = [
    { min: 0, max: 20, label: "foundation" },
    { min: 21, max: 40, label: "structured practice" },
    { min: 41, max: 60, label: "manager-level reasoning" },
    { min: 61, max: 80, label: "system-level control" },
    { min: 81, max: 100, label: "absurd mastery" }
  ];

  const conceptSeeds = [
    {
      slug: "classes-objects",
      shortTitle: "Classes and Objects",
      title: "Classes and Objects for Exam Modelling",
      badge: "Object modelling",
      examAngle: "Every exercise begins by deciding what one object is and what a container or manager object is.",
      summary: [
        "This concept is the root of both exams. Before writing code, you read the statement and split the world into object types: one student, one group, one ticket, one event, one player, one member. Once that split is correct, almost every later decision becomes easier.",
        "A class is the blueprint. An object is the concrete instance created from that blueprint. In exam questions, the trick is not syntax first; it is modelling accuracy. If the class represents one thing, it should store the data and behavior of one thing only."
      ],
      buildChecklist: [
        "Read the statement and mark nouns that describe single entities.",
        "Separate entity classes from manager classes.",
        "Give each class a name that describes exactly one responsibility.",
        "Choose fields that belong to one object, not to a whole collection.",
        "Add methods that operate naturally on one instance."
      ],
      managementChecklist: [
        "Keep one class focused on one role.",
        "Avoid storing group-wide logic inside entity classes.",
        "Review field names so they describe real business meaning.",
        "Check whether a rule belongs to one object or to the manager of many objects.",
        "Use testers to verify that each class behaves in isolation before coordinating them."
      ],
      objectWord: "student-style object",
      managerWord: "group-style manager"
    },
    {
      slug: "encapsulation-accessors",
      shortTitle: "Encapsulation",
      title: "Encapsulation, Getters, and Setters",
      badge: "State protection",
      examAngle: "The exam expects private fields plus controlled access methods instead of raw public state.",
      summary: [
        "Encapsulation means you protect the internal state of an object and expose it through carefully chosen methods. In exam code this normally appears as private fields plus getters and setters.",
        "The point is not ceremonial boilerplate. The point is control. If the exam later adds a rule such as valid grades, valid ticket types, or synchronized static totals, encapsulation gives you one safe place to enforce that rule."
      ],
      buildChecklist: [
        "Mark fields as private.",
        "Expose read methods only for data that other classes must inspect.",
        "Expose write methods only when external changes should be legal.",
        "Place validation inside setters or dedicated behavior methods.",
        "Use naming conventions consistently: getX, setX, isX."
      ],
      managementChecklist: [
        "Prefer behavior methods over uncontrolled direct mutation.",
        "Keep field updates centralized in one method when other values depend on them.",
        "Review boolean accessors to use isX when that is clearer.",
        "Use tests to prove that invalid state changes are rejected or normalized.",
        "Refactor repeated validation into one setter or helper."
      ],
      objectWord: "encapsulated record",
      managerWord: "access-controlled manager"
    },
    {
      slug: "constructors-initialization",
      shortTitle: "Constructors",
      title: "Constructors and Initialization Strategy",
      badge: "Initialization",
      examAngle: "Both exams rely on constructors to establish default values, derived values, and valid initial state.",
      summary: [
        "A constructor is the first contract of a class. It decides which data is mandatory, which defaults are safe, and which derived values must be computed immediately.",
        "In exam questions, constructors reveal design quality. A good constructor makes the object valid from the first line after creation. A weak constructor forces the tester to repair the object manually."
      ],
      buildChecklist: [
        "List mandatory fields that must arrive from the statement.",
        "Assign safe default values for optional or initially unknown state.",
        "Compute derived fields immediately if they depend on constructor input.",
        "Initialize collections inside the constructor so later methods never hit null.",
        "Keep constructor logic focused on object validity."
      ],
      managementChecklist: [
        "Do not duplicate initialization logic across many methods.",
        "If later updates must preserve a derived value, centralize recalculation logic.",
        "Audit constructors whenever fields are added or removed.",
        "Use overloaded constructors only when they clarify distinct creation paths.",
        "Review manager constructors to ensure internal collections are always ready."
      ],
      objectWord: "well-initialized object",
      managerWord: "ready-to-use manager"
    },
    {
      slug: "collections-arraylist",
      shortTitle: "Collections",
      title: "Collections, ArrayList Management, and Aggregation",
      badge: "ArrayList workflows",
      examAngle: "The manager classes in the exams are essentially collection controllers: add, remove, search, count, average, and report.",
      summary: [
        "Collections appear as soon as one class manages many objects. In these exams that means ArrayList-based storage for students or tickets and methods that manipulate the collection safely.",
        "This concept combines data structure choice with operational discipline: uniqueness checks, size limits, filtering, metrics, and readable reporting."
      ],
      buildChecklist: [
        "Choose ArrayList when the number of objects changes over time.",
        "Initialize the collection in the constructor.",
        "Write add methods with business-rule validation first, insertion second.",
        "Write removal methods that search by a stable key.",
        "Add aggregate methods such as count, average, percentage, and filtered printing."
      ],
      managementChecklist: [
        "Protect against duplicates and capacity overflow.",
        "Keep search criteria explicit and stable.",
        "Guard empty collections before division-based aggregation.",
        "Separate filtering, aggregation, and mutation methods so each one stays readable.",
        "Use toString and testers to inspect collection state after every major operation."
      ],
      objectWord: "collection item",
      managerWord: "list manager"
    },
    {
      slug: "static-members",
      shortTitle: "Static Members",
      title: "Static Members, Shared State, and Constants",
      badge: "Class-level state",
      examAngle: "The static exercises ask whether a value belongs to one object or to the class as a whole.",
      summary: [
        "Static data belongs to the class, not to one instance. In the exam this appears in counters such as connected players or total monthly fees of active members.",
        "Constants also live naturally at class level when one rule applies equally to every object, such as maximum group size."
      ],
      buildChecklist: [
        "Identify whether the value summarizes all objects together.",
        "Use static for shared counters, totals, and class-wide configuration.",
        "Use static final for constants that never change.",
        "Update shared state only in the methods that change real business state.",
        "Expose static getters when the statement requires reading the shared value."
      ],
      managementChecklist: [
        "Guard against double increments and double decrements.",
        "Review every state transition that should affect the shared total.",
        "Keep constants near the class that owns the rule.",
        "Document the difference between per-object and global values in your own notes or comments.",
        "Recalculate or adjust shared totals when setters can alter active values."
      ],
      objectWord: "instance state",
      managerWord: "class-wide tracker"
    },
    {
      slug: "equality-search",
      shortTitle: "Equality and Search",
      title: "Equality, String Comparison, and Search by Key",
      badge: "Comparison logic",
      examAngle: "Most manager methods succeed or fail depending on correct comparison by code, dni, or type.",
      summary: [
        "Search logic is how a manager class finds the right object. Equality rules decide whether a new object is a duplicate, whether an object should be removed, and whether a report should include it.",
        "The exam repeatedly tests this through String identifiers, codes, and categories. Using the wrong comparison operator breaks the entire business rule layer."
      ],
      buildChecklist: [
        "Choose the key that uniquely identifies an object.",
        "Use .equals or equalsIgnoreCase for String comparison when appropriate.",
        "Use == for primitive comparison only when you are comparing primitive values.",
        "Keep comparison logic consistent across add, remove, search, and update methods.",
        "Name search methods so the caller knows exactly what key is used."
      ],
      managementChecklist: [
        "Normalize data when the statement suggests case-insensitive comparison.",
        "Avoid duplicating comparison formulas in many places when a helper would be clearer.",
        "Check duplicate detection before insertion, not after.",
        "Review every filter method to ensure it matches the same business meaning as the statement.",
        "Test near-duplicate data such as same code with different case or whitespace."
      ],
      objectWord: "searchable entity",
      managerWord: "key-driven finder"
    },
    {
      slug: "type-conversion-boxing",
      shortTitle: "Conversions and Boxing",
      title: "Type Conversion, Wrapper Classes, and Autoboxing",
      badge: "Type reasoning",
      examAngle: "The short theory questions require step-by-step conversion chains and precise identification of boxing and unboxing points.",
      summary: [
        "Type conversion questions look small, but they reward exact reasoning. You must know when Java is converting text to a number, unwrapping an object to a primitive, or wrapping a primitive back into an object.",
        "Wrapper classes such as Integer, Double, and Float matter because exam arithmetic often mixes object wrappers and primitives. If you can narrate each conversion, you can answer these questions with confidence."
      ],
      buildChecklist: [
        "Start from the source type and move one valid conversion at a time.",
        "Use parsing or valueOf when converting from String to a wrapper.",
        "Use primitive extraction or automatic unboxing for wrapper to primitive.",
        "Use wrapper factories or autoboxing when converting back to an object type.",
        "End with toString or String.valueOf when returning to text."
      ],
      managementChecklist: [
        "Annotate each conversion step in your rough exam notes.",
        "Watch arithmetic expressions because that is where unboxing usually happens.",
        "Check array and method parameter types before deciding whether boxing occurs.",
        "Be explicit in exam answers even when Java could do some conversions automatically.",
        "Practice identifying the exact token where the type shift occurs."
      ],
      objectWord: "wrapper-aware value",
      managerWord: "conversion chain"
    },
    {
      slug: "testing-workflow",
      shortTitle: "Testing and Reasoning",
      title: "Testing, toString, and Exam Construction Workflow",
      badge: "Verification",
      examAngle: "A strong tester is how you prove the class model, business rules, and static logic actually work.",
      summary: [
        "Exam code is easier to trust when you build a small tester that creates objects, mutates them, prints them, and checks edge cases. The tester turns abstract requirements into visible evidence.",
        "Methods such as toString are not decorative; they are inspection tools. When combined with a clear creation order and deliberate scenario design, they make debugging and explanation much easier."
      ],
      buildChecklist: [
        "Create a tester after the core classes compile logically in your head.",
        "Instantiate representative objects with meaningful data.",
        "Run happy-path operations first, then edge cases such as duplicates or empty collections.",
        "Print intermediate state after important operations.",
        "Use toString to turn hidden object state into readable output."
      ],
      managementChecklist: [
        "Keep one tester scenario per rule so failures are easy to localize.",
        "Print enough context to understand what changed.",
        "Re-run static counters after every state transition that should affect them.",
        "Use testers to validate both normal and failure paths.",
        "Treat the tester as proof that your reading of the statement is consistent."
      ],
      objectWord: "testable unit",
      managerWord: "scenario harness"
    }
  ];

  function makeConceptCode(concept, index) {
    const level = index + 1;
    switch (concept.slug) {
      case "classes-objects":
        return `public class ModelLevel${level} {\n    private String label = "${concept.objectWord}";\n    private int complexity = ${level};\n\n    public String describe() {\n        return label + " at level " + complexity;\n    }\n}`;
      case "encapsulation-accessors":
        return `public class ProtectedLevel${level} {\n    private int score = ${level};\n\n    public int getScore() {\n        return score;\n    }\n\n    public void setScore(int score) {\n        this.score = Math.max(0, score);\n    }\n}`;
      case "constructors-initialization":
        return `public class InitLevel${level} {\n    private final String name;\n    private int value;\n\n    public InitLevel${level}(String name) {\n        this.name = name;\n        this.value = ${level};\n    }\n}`;
      case "collections-arraylist":
        return `import java.util.ArrayList;\n\npublic class CollectionLevel${level} {\n    private ArrayList<String> items = new ArrayList<>();\n\n    public boolean addItem(String item) {\n        if (items.size() >= ${Math.max(3, Math.min(30, level + 2))}) {\n            return false;\n        }\n        return items.add(item);\n    }\n}`;
      case "static-members":
        return `public class StaticLevel${level} {\n    private static int activeCount = 0;\n    private boolean active;\n\n    public void activate() {\n        if (!active) {\n            active = true;\n            activeCount++;\n        }\n    }\n}`;
      case "equality-search":
        return `public class SearchLevel${level} {\n    public boolean sameCode(String left, String right) {\n        return left != null && left.equalsIgnoreCase(right);\n    }\n}`;
      case "type-conversion-boxing":
        return `String text = "${level * 3}";\nInteger wrapper = Integer.valueOf(text);\nint primitive = wrapper.intValue();\nDouble next = Double.valueOf(primitive + ${level});\nString result = next.toString();`;
      case "testing-workflow":
        return `public class TestLevel${level} {\n    public static void main(String[] args) {\n        System.out.println("Running focused scenario ${level}");\n        System.out.println("Check one rule, one edge case, and one summary output.");\n    }\n}`;
      default:
        return `// Example ${level}`;
    }
  }

  function makeExampleNarrative(concept, stage, index) {
    const level = index + 1;
    return {
      title: `${level}. ${stage} for ${concept.shortTitle}`,
      summary: paragraph([
        `This level starts with ${stage.toLowerCase()} and asks you to apply ${concept.shortTitle.toLowerCase()} in the smallest scenario that still matters.`,
        `The goal is to see how a ${concept.objectWord} grows into a ${concept.managerWord} without losing clarity or correctness.`,
        `In an exam, this is the difference between writing a single working line and writing a model that survives all later requirements.`
      ]),
      management: paragraph([
        `To manage this level well, keep the rule count low, verify one expectation at a time, and make every field or method name reveal intent.`,
        `If the example feels trivial, that is useful: primitive examples train your eye so complex ones do not overload your reasoning later.`,
        `By level ${level}, you should already be checking how the statement would describe the same rule in natural language.`
      ]),
      code: makeConceptCode(concept, index)
    };
  }

  function bandForLevel(level) {
    return masteryBands.find(function (band) {
      return level >= band.min && level <= band.max;
    }) || masteryBands[0];
  }

  function buildMasteryParagraphs(concept, level) {
    const band = bandForLevel(level);
    const focusA = concept.buildChecklist[level % concept.buildChecklist.length];
    const focusB = concept.managementChecklist[level % concept.managementChecklist.length];
    const summaryA = concept.summary[level % concept.summary.length];
    const summaryB = concept.summary[(level + 1) % concept.summary.length];
    const stageA = exampleStages[level % exampleStages.length];
    const stageB = exampleStages[(level + 7) % exampleStages.length];
    const examSentence = `At level ${level}, you are no longer just naming ${concept.objectWord}s; you are proving why the statement needs that model and how the resulting code stays coherent under change.`;
    return [
      paragraph([
        `Level ${level} belongs to the ${band.label} band of ${concept.shortTitle.toLowerCase()}.`,
        summaryA,
        `What changes here is not only the amount of syntax you can write, but the amount of design pressure you can absorb without collapsing into random edits.`
      ]),
      paragraph([
        `From a build perspective, the priority is ${focusA.toLowerCase()}.`,
        `That sounds simple, but on an exam it decides whether later methods align with the original model or start compensating for bad early decisions.`,
        `A reliable answer grows from a constructor, field list, and method list that all tell the same story.`
      ]),
      paragraph([
        `From a management perspective, the key habit is ${focusB.toLowerCase()}.`,
        `Management in Java exam work means guarding invariants, keeping updates synchronized, and making sure one change cannot silently corrupt later calculations or reports.`,
        `You are managing logic, not just typing code.`
      ]),
      paragraph([
        examSentence,
        `When the statement adds one more business rule, your design should have a predictable place for that rule instead of forcing a rewrite of unrelated methods.`,
        `That is how concept mastery becomes exam speed.`
      ]),
      paragraph([
        `A common failure mode at this level is to remember isolated syntax but forget intent.`,
        `Students often write methods that technically compile yet belong in the wrong class, compare the wrong field, or update only half of the state that should move together.`,
        `The cure is to restate the rule in words before writing the next line.`
      ]),
      paragraph([
        `The evolution from ${stageA.toLowerCase()} toward ${stageB.toLowerCase()} matters because advanced tasks are usually just repeated simple tasks with more coordination, more constraints, and less tolerance for accidental inconsistency.`,
        `If you can narrate the small case clearly, the complex case becomes an extension rather than a mystery.`,
        `That is why this guide intentionally stretches from primitive examples to absurd ones.`
      ]),
      paragraph([
        `A productive way to study this level is to build one tiny version, one medium version, and one ugly overstretched version of the same idea.`,
        `The tiny version teaches clarity, the medium version teaches coordination, and the ugly overstretched version reveals where naming, ownership, and validation start to matter more than raw typing speed.`,
        `That three-scale comparison is one of the fastest ways to internalize ${concept.shortTitle.toLowerCase()}.`
      ]),
      paragraph([
        `When you review finished code at this level, inspect it in layers: first the model, then the state transitions, then the reporting surface, and only after that the syntax polish.`,
        `Most exam mistakes are architectural before they are grammatical.`,
        `A student may write every semicolon correctly and still lose the exercise because the wrong class owns the wrong decision.`
      ]),
      paragraph([
        `If you want to manage the concept under stress, create a private checklist that asks whether the object can ever become invalid, whether one method silently depends on another, and whether the tester would reveal a broken invariant quickly.`,
        `That checklist becomes even more valuable when the statement introduces late changes such as extra filters, totals, percentages, or cross-object synchronization.`,
        `The stronger the checklist, the calmer the implementation.`
      ]),
      paragraph([
        `For deliberate practice, take one real exam method and ask three questions: why is this class the owner, what state can change, and what proof would convince you it still works after the change?`,
        `Those three questions convert passive reading into active engineering.`,
        `Repeated enough times, they turn ${concept.shortTitle.toLowerCase()} into a dependable habit instead of a memorized topic.`
      ])
    ];
  }

  const concepts = conceptSeeds.map(function (concept) {
    return Object.assign({}, concept, {
      examples: exampleStages.map(function (stage, index) {
        return makeExampleNarrative(concept, stage, index);
      }),
      masterySteps: Array.from({ length: 101 }, function (_, level) {
        return {
          level: level,
          title: `0-${level} mastery ramp for ${concept.shortTitle}`,
          paragraphs: buildMasteryParagraphs(concept, level)
        };
      })
    });
  });

  const examASections = [
    {
      title: "Exam A — Core classes",
      description: "Entity class plus manager class: one Alumno represents one student, and Grupo manages many Alumno objects with validation, aggregation, and reporting.",
      code: `import java.util.ArrayList;

public class Alumno {
    private String dni;
    private String nombre;
    private double notaMedia;
    private boolean beca;

    public Alumno(String dni, String nombre) {
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = 0;
        this.beca = false;
    }

    public String getDni() {
        return dni;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getNotaMedia() {
        return notaMedia;
    }

    public void setNotaMedia(double notaMedia) {
        this.notaMedia = notaMedia;
    }

    public void setBeca(boolean beca) {
        this.beca = beca;
    }

    public boolean getBeca() {
        return beca;
    }

    @Override
    public String toString() {
        return "Alumno{dni='" + dni + "', nombre='" + nombre + "', notaMedia=" + notaMedia + ", beca=" + beca + "}";
    }
}

class Grupo {
    private String nombre;
    private ArrayList<Alumno> estudiantes;
    private static final int MAX_ESTUDIANTES = 25;

    public Grupo(String nombre) {
        this.nombre = nombre;
        this.estudiantes = new ArrayList<>();
    }

    public static int getMAX_ESTUDIANTES() {
        return MAX_ESTUDIANTES;
    }

    public String getNombre() {
        return nombre;
    }

    public boolean anyadirAlumno(Alumno a) {
        if (estudiantes.size() >= MAX_ESTUDIANTES) {
            return false;
        }

        for (Alumno alumno : estudiantes) {
            if (alumno.getDni().equals(a.getDni())) {
                return false;
            }
        }

        estudiantes.add(a);
        return true;
    }

    public Alumno borrarAlumno(String dni) {
        for (int i = 0; i < estudiantes.size(); i++) {
            if (estudiantes.get(i).getDni().equals(dni)) {
                return estudiantes.remove(i);
            }
        }
        return null;
    }

    public int getNumeroAlumnos() {
        return estudiantes.size();
    }

    public double getNotaMedia() {
        if (estudiantes.isEmpty()) {
            return 0;
        }

        double suma = 0;
        for (Alumno alumno : estudiantes) {
            suma += alumno.getNotaMedia();
        }
        return suma / estudiantes.size();
    }

    public void mostrarAlumnosConBeca() {
        for (Alumno alumno : estudiantes) {
            if (alumno.getBeca()) {
                System.out.println(alumno);
            }
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Grupo: ").append(nombre).append("\\n");
        for (int i = 0; i < estudiantes.size(); i++) {
            sb.append(i + 1).append(". ").append(estudiantes.get(i)).append("\\n");
        }
        return sb.toString();
    }
}`
    },
    {
      title: "Exam A — Tester and static exercise",
      description: "This section proves the model works and also shows the static counter pattern with Jugador.",
      code: `public class GrupoTester {
    public static void main(String[] args) {
        Grupo daw = new Grupo("1DAW");
        Grupo asir = new Grupo("1ASIR");

        Alumno a1 = new Alumno("111A", "Ana");
        Alumno a2 = new Alumno("222B", "Luis");
        Alumno a3 = new Alumno("333C", "Marta");
        Alumno a4 = new Alumno("444D", "Carlos");
        Alumno a5 = new Alumno("555E", "Elena");

        a1.setNotaMedia(8.5);
        a2.setNotaMedia(6.2);
        a3.setNotaMedia(9.1);
        a4.setNotaMedia(7.0);
        a5.setNotaMedia(5.9);

        a1.setBeca(true);
        a3.setBeca(true);

        daw.anyadirAlumno(a1);
        daw.anyadirAlumno(a2);
        daw.anyadirAlumno(a3);
        daw.anyadirAlumno(a4);
        daw.anyadirAlumno(a5);

        Alumno b1 = new Alumno("666F", "Javier");
        Alumno b2 = new Alumno("777G", "Lucia");
        Alumno b3 = new Alumno("888H", "Pedro");

        asir.anyadirAlumno(b1);
        asir.anyadirAlumno(b2);
        asir.anyadirAlumno(b3);

        System.out.println("Students in 1DAW: " + daw.getNumeroAlumnos());
        System.out.println("Average grade in 1DAW: " + daw.getNotaMedia());
        daw.mostrarAlumnosConBeca();
        System.out.println(daw);
        System.out.println("Removed: " + daw.borrarAlumno("222B"));
        System.out.println("Duplicate add: " + daw.anyadirAlumno(new Alumno("111A", "Other")));
        System.out.println(asir);
    }
}

class Jugador {
    private String nombre;
    private int nivel;
    private boolean conectado;
    private static int jugadoresConectados = 0;

    public Jugador(String nombre, int nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.conectado = true;
        jugadoresConectados++;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public boolean isConectado() {
        return conectado;
    }

    public void conectar() {
        if (!conectado) {
            conectado = true;
            jugadoresConectados++;
        }
    }

    public void desconectar() {
        if (conectado) {
            conectado = false;
            jugadoresConectados--;
        }
    }

    public static int getJugadoresConectados() {
        return jugadoresConectados;
    }

    @Override
    public String toString() {
        return "Jugador{nombre='" + nombre + "', nivel=" + nivel + ", conectado=" + conectado + "}";
    }
}`
    },
    {
      title: "Exam A — Explicit conversion answer",
      description: "A legal and easy-to-explain chain from text to wrapper, primitive, another wrapper, and back to text.",
      code: `String texto = "25";
Integer numeroObjeto = Integer.valueOf(texto);
int numeroPrimitivo = numeroObjeto.intValue();
Double numeroDouble = Double.valueOf(numeroPrimitivo);
String resultadoFinal = numeroDouble.toString();
System.out.println("Final result: " + resultadoFinal);`
    }
  ];

  const examBSections = [
    {
      title: "Exam B — Core classes",
      description: "Entrada stores the data of one ticket. Evento manages many tickets, validates constraints, computes reports, and exposes business operations.",
      code: `import java.util.ArrayList;

public class Entrada {
    private String codigo;
    private String comprador;
    private double precio;
    private String tipo;
    private boolean vendida;

    public Entrada(String codigo, String comprador, String tipo) {
        this.codigo = codigo;
        this.comprador = comprador;
        this.tipo = tipo;

        if (tipo.equalsIgnoreCase("NORMAL")) {
            this.precio = 50;
        } else if (tipo.equalsIgnoreCase("VIP")) {
            this.precio = 100;
        } else if (tipo.equalsIgnoreCase("PALCO")) {
            this.precio = 200;
        } else {
            this.precio = 0;
        }

        this.vendida = false;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getComprador() {
        return comprador;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getTipo() {
        return tipo;
    }

    public boolean isVendida() {
        return vendida;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
        if (tipo.equalsIgnoreCase("NORMAL")) {
            this.precio = 50;
        } else if (tipo.equalsIgnoreCase("VIP")) {
            this.precio = 100;
        } else if (tipo.equalsIgnoreCase("PALCO")) {
            this.precio = 200;
        } else {
            this.precio = 0;
        }
    }

    public void setVendida(boolean vendida) {
        this.vendida = vendida;
    }

    @Override
    public String toString() {
        return "Entrada{codigo='" + codigo + "', comprador='" + comprador + "', precio=" + precio
                + ", tipo='" + tipo + "', vendida=" + vendida + "}";
    }
}

class Evento {
    private String nombre;
    private int aforoMax;
    private ArrayList<Entrada> entradas;
    private boolean cancelado;

    public Evento(String nombre, int aforoMax) {
        this.nombre = nombre;
        this.aforoMax = aforoMax;
        this.entradas = new ArrayList<>();
        this.cancelado = false;
    }

    public String getNombre() {
        return nombre;
    }

    public int getAforoMax() {
        return aforoMax;
    }

    public boolean agregarEntrada(Entrada e) {
        if (cancelado || entradas.size() >= aforoMax) {
            return false;
        }

        for (Entrada entrada : entradas) {
            if (entrada.getCodigo().equals(e.getCodigo())) {
                return false;
            }
        }

        entradas.add(e);
        return true;
    }

    public Entrada eliminarEntrada(String codigo) {
        for (int i = 0; i < entradas.size(); i++) {
            if (entradas.get(i).getCodigo().equals(codigo)) {
                return entradas.remove(i);
            }
        }
        return null;
    }

    public void venderEntrada(String codigo) {
        for (Entrada entrada : entradas) {
            if (entrada.getCodigo().equals(codigo)) {
                entrada.setVendida(true);
                return;
            }
        }
    }

    public void mostrarEntradasVIPVendidas() {
        for (Entrada entrada : entradas) {
            if (entrada.isVendida() && entrada.getTipo().equalsIgnoreCase("VIP")) {
                System.out.println(entrada);
            }
        }
    }

    public double calcularRecaudacion() {
        double suma = 0;
        for (Entrada entrada : entradas) {
            if (entrada.isVendida()) {
                suma += entrada.getPrecio();
            }
        }
        return suma;
    }

    public double calcularPorcentajeOcupacion() {
        if (aforoMax == 0) {
            return 0;
        }
        int vendidas = 0;
        for (Entrada entrada : entradas) {
            if (entrada.isVendida()) {
                vendidas++;
            }
        }
        return (vendidas * 100.0) / aforoMax;
    }

    public boolean estaEventoCompleto() {
        int vendidas = 0;
        for (Entrada entrada : entradas) {
            if (entrada.isVendida()) {
                vendidas++;
            }
        }
        return vendidas == aforoMax;
    }

    public void cancelarEvento() {
        cancelado = true;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Evento{nombre='").append(nombre).append("', aforoMax=").append(aforoMax)
          .append(", cancelado=").append(cancelado).append("}\\n");
        for (Entrada entrada : entradas) {
            sb.append(entrada).append("\\n");
        }
        return sb.toString();
    }
}`
    },
    {
      title: "Exam B — Tester and static member exercise",
      description: "The tester demonstrates normal flows, filtered reporting, and the static total of active members.",
      code: `public class EventoTester {
    public static void main(String[] args) {
        Evento evento = new Evento("Spring Concert", 10);

        Entrada e1 = new Entrada("E001", "Ana", "VIP");
        Entrada e2 = new Entrada("E002", "Luis", "NORMAL");
        Entrada e3 = new Entrada("E003", "Marta", "VIP");
        Entrada e4 = new Entrada("E004", "Carlos", "PALCO");
        Entrada e5 = new Entrada("E005", "Elena", "NORMAL");
        Entrada e6 = new Entrada("E006", "Pedro", "VIP");

        evento.agregarEntrada(e1);
        evento.agregarEntrada(e2);
        evento.agregarEntrada(e3);
        evento.agregarEntrada(e4);
        evento.agregarEntrada(e5);
        evento.agregarEntrada(e6);

        evento.venderEntrada("E001");
        evento.venderEntrada("E002");
        evento.venderEntrada("E003");
        evento.venderEntrada("E004");
        evento.venderEntrada("E006");

        System.out.println("Revenue: " + evento.calcularRecaudacion());
        System.out.println("Occupation %: " + evento.calcularPorcentajeOcupacion());
        System.out.println("Event full? " + evento.estaEventoCompleto());
        System.out.println("Sold VIP tickets:");
        evento.mostrarEntradasVIPVendidas();
        System.out.println("Removed: " + evento.eliminarEntrada("E005"));
        System.out.println(evento);
        evento.cancelarEvento();
    }
}

class Socio {
    private int numSocio;
    private String nombre;
    private double cuotaMensual;
    private boolean activo;
    private static double totalCuotasSociosActivos = 0;

    public Socio(int numSocio, String nombre, double cuotaMensual) {
        this.numSocio = numSocio;
        this.nombre = nombre;
        this.cuotaMensual = cuotaMensual;
        this.activo = false;
    }

    public int getNumSocio() {
        return numSocio;
    }

    public void setNumSocio(int numSocio) {
        this.numSocio = numSocio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getCuotaMensual() {
        return cuotaMensual;
    }

    public void setCuotaMensual(double cuotaMensual) {
        if (activo) {
            totalCuotasSociosActivos -= this.cuotaMensual;
            totalCuotasSociosActivos += cuotaMensual;
        }
        this.cuotaMensual = cuotaMensual;
    }

    public boolean isActivo() {
        return activo;
    }

    public void activar() {
        if (!activo) {
            activo = true;
            totalCuotasSociosActivos += cuotaMensual;
        }
    }

    public void desactivar() {
        if (activo) {
            activo = false;
            totalCuotasSociosActivos -= cuotaMensual;
        }
    }

    public static double getTotalCuotasSociosActivos() {
        return totalCuotasSociosActivos;
    }

    @Override
    public String toString() {
        return "Socio{numSocio=" + numSocio + ", nombre='" + nombre + "', cuotaMensual=" + cuotaMensual
                + ", activo=" + activo + "}";
    }
}`
    },
    {
      title: "Exam B — Explicit conversion answer",
      description: "Again the safe pattern is one conversion step at a time with wrappers made explicit.",
      code: `String numeroTexto = "42";
Integer numeroObjeto = Integer.valueOf(numeroTexto);
int numeroPrimitivo = numeroObjeto.intValue();
Float numeroFloat = Float.valueOf(numeroPrimitivo);
String resultadoFinal = numeroFloat.toString();
System.out.println("Final result: " + resultadoFinal);`
    }
  ];

  const exams = [
    {
      id: "exam-a",
      title: "Exam A Solutions and Concept Map",
      subtitle: "Students, groups, conversion chains, boxing, and shared player connectivity",
      overview: [
        "Exam A is a classic object-plus-manager design exercise. The safe reading is: Alumno stores the state of one student and Grupo manages a collection of many students under capacity and uniqueness rules.",
        "The later questions deliberately branch into theory: explicit conversion chains, autoboxing and unboxing, and a static counter scenario with Jugador. That means the exam is testing both class construction and language-level type reasoning."
      ],
      sections: examASections,
      questionFlow: [
        "Identify the entity class and the manager class.",
        "Write private fields and a constructor with sane defaults.",
        "Add getters and setters only where they make sense.",
        "Implement collection management methods with validation before mutation.",
        "Add tester code that proves counting, averaging, filtering, and deletion.",
        "Answer conversion and boxing questions step by step, naming the exact type shifts.",
        "Separate instance state from shared static state in the final exercise."
      ],
      relatedConcepts: [
        "classes-objects",
        "encapsulation-accessors",
        "constructors-initialization",
        "collections-arraylist",
        "static-members",
        "equality-search",
        "type-conversion-boxing",
        "testing-workflow"
      ]
    },
    {
      id: "exam-b",
      title: "Exam B Solutions and Concept Map",
      subtitle: "Tickets, events, revenue, occupancy, shared active-fee tracking, and conversion chains",
      overview: [
        "Exam B reuses the same fundamental architecture as Exam A but increases business rules: derived price by type, sold-state filtering, revenue, occupancy percentage, event cancellation, and a static monetary total in Socio.",
        "The main skill here is recognizing that once the object model is stable, all these features are just manager methods and state transitions layered on top of a valid class design."
      ],
      sections: examBSections,
      questionFlow: [
        "Separate Entrada as the entity and Evento as the manager.",
        "Compute derived values such as price from the ticket type in a controlled place.",
        "Protect the collection with uniqueness, capacity, and cancellation rules.",
        "Add filtered output and aggregate calculations such as revenue and occupancy.",
        "Prove the model with a tester that exercises happy path and state changes.",
        "Use the Socio exercise to show correct shared static updates.",
        "Treat explicit conversions and boxing as precise type narratives, not vague descriptions."
      ],
      relatedConcepts: [
        "classes-objects",
        "encapsulation-accessors",
        "constructors-initialization",
        "collections-arraylist",
        "static-members",
        "equality-search",
        "type-conversion-boxing",
        "testing-workflow"
      ]
    }
  ];

  window.JavaExamSiteData = {
    concepts: concepts,
    exams: exams
  };
})();
