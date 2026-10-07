import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.zip.*;
import java.util.stream.*;

public class TestRunner {

    static int passed = 0, failed = 0;
    static List<String> failures = new ArrayList<>();
    static boolean debug = false;

    static class TestCase {
        String name;
        String[] paragraphs;
        String[][] expectedClasses; // [name, role, fields, methods]
        TestCase(String name, String[] paragraphs, String[][] expectedClasses) {
            this.name = name;
            this.paragraphs = paragraphs;
            this.expectedClasses = expectedClasses;
        }
    }

    public static void main(String[] args) throws Exception {
        debug = args.length > 0 && "--debug".equals(args[0]);
        
        List<TestCase> tests = createTests();
        for (TestCase test : tests) {
            runTest(test);
        }
        
        System.out.println("\n==========================================");
        System.out.println("RESULTS: " + passed + " passed, " + failed + " failed out of " + (tests.size() * 4) + " checks");
        if (!failures.isEmpty()) {
            System.out.println("FAILURES:");
            for (String f : failures) System.out.println("  - " + f);
        }
        System.exit(failed > 0 ? 1 : 0);
    }

    static List<TestCase> createTests() {
        List<TestCase> tests = new ArrayList<>();

        // Test 1: Simple class with fields in colon format
        tests.add(new TestCase("SimpleFields",
            new String[]{
                "Clase Persona: nombre: String, edad: int, altura: double",
                "Métodos: cumplirAnios(): void, esMayorEdad(): boolean"
            },
            new String[][]{
                {"Persona", "ENTITY", "3", "2"}
            }
        ));

        // Test 2: Class with ArrayList and constructor init
        tests.add(new TestCase("ArrayListField",
            new String[]{
                "Clase Biblioteca: libros: ArrayList<Libro>, direccion: String, abierta: boolean",
                "Clase Libro: titulo: String, paginas: int",
                "La abierta se inicializará a true en el constructor"
            },
            new String[][]{
                {"Biblioteca", "SERVICE", "3", "0"},
                {"Libro", "ENTITY", "2", "0"}
            }
        ));

        // Test 3: Constructor init with multiple fields (Alumno pattern)
        tests.add(new TestCase("ConstructorInit",
            new String[]{
                "Clase Alumno: nombre: String, notaMedia: double, beca: boolean",
                "La notaMedia y la beca se inicializarán en el constructor a 0 y a false"
            },
            new String[][]{
                {"Alumno", "ENTITY", "3", "0"}
            }
        ));

        // Test 4: Tester class with main
        tests.add(new TestCase("TesterClass",
            new String[]{
                "Clase Calculadora: sumar(a: int, b: int): int, restar(a: int, b: int): int",
                "Clase Calculadora Tester: crea un tester con una calculadora y prueba sumar(2,3) y restar(5,2)"
            },
            new String[][]{
                {"Calculadora", "SERVICE", "0", "2"},
                {"Calculadora_Tester", "TESTER", "0", "1"}
            }
        ));

        // Test 5: Full exam (Entrada/Evento style)
        tests.add(new TestCase("FullExam",
            new String[]{
                "Clase Producto: codigo: int, nombre: String, precio: double, stock: int",
                "Clase Tienda: productos: ArrayList<Producto>, abierta: boolean",
                "agregarProducto(p: Producto): boolean - Añade p al ArrayList si no existe otro con el mismo codigo",
                "venderProducto(codigo: int): Producto - Busca por codigo y lo devuelve, eliminándolo del ArrayList",
                "calcularValorStock(): double - Suma el precio por stock de todos los productos",
                "Clase Tienda Tester: crea un tester con 3 productos, vende 1 y muestra el valor del stock"
            },
            new String[][]{
                {"Producto", "ENTITY", "4", "0"},
                {"Tienda", "SERVICE", "2", "3"},
                {"Tienda_Tester", "TESTER", "0", "1"}
            }
        ));

        return tests;
    }

    static void runTest(TestCase test) throws Exception {
        File tempDir = new File("/tmp/test_" + test.name);
        deleteDir(tempDir);
        tempDir.mkdirs();

        // Create DOCX
        String docxPath = new File(tempDir, "exam.docx").getAbsolutePath();
        CreateTestDocx.createDocx(docxPath, test.paragraphs);

        // Run SemanticExam2Java (redirect output to tempDir for tests)
        String savedForce = SemanticExam2Java.FORCE_OUTPUT_DIR;
        SemanticExam2Java.FORCE_OUTPUT_DIR = new File(tempDir, "src/exam").getAbsolutePath();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintStream oldOut = System.out;
        System.setOut(new PrintStream(baos));
        
        try {
            SemanticExam2Java.cliMain(new String[]{docxPath});
        } catch (Exception e) {
            SemanticExam2Java.FORCE_OUTPUT_DIR = savedForce;
            System.setOut(oldOut);
            System.out.println("CRASH in " + test.name + ": " + e.getMessage());
            failed++;
            failures.add(test.name + " crashed: " + e.getMessage());
            return;
        }
        SemanticExam2Java.FORCE_OUTPUT_DIR = savedForce;
        System.setOut(oldOut);
        String output = baos.toString("UTF-8");

        if (debug) {
            System.out.println("=== " + test.name + " OUTPUT ===");
            System.out.println(output);
            System.out.println("===================");
        }

        // Parse output
        boolean testPassed = true;

        // Generated files are under src/<exam-folder>/
        File genDir = new File(tempDir, "src/exam");
        File[] generatedFiles = genDir.listFiles((d, name) -> name.endsWith(".java"));
        if (generatedFiles == null || generatedFiles.length == 0) {
            fail(test.name, "No Java files generated in " + genDir);
            return;
        }

        // Compile generated files into tempDir (preserving package dir structure)
        String javacCmd = "javac -d " + tempDir.getAbsolutePath() + " " +
            Arrays.stream(generatedFiles).map(f -> f.getAbsolutePath()).collect(Collectors.joining(" "));
        ProcessBuilder pb = new ProcessBuilder("bash", "-c", javacCmd);
        pb.directory(tempDir);
        Process p = pb.start();
        String compileErrors = new String(p.getErrorStream().readAllBytes(), "UTF-8");
        int exitCode = p.waitFor();
        if (exitCode != 0) {
            fail(test.name, "Compilation failed:\n" + compileErrors);
            return;
        }

        // Check expected classes exist
        for (String[] cls : test.expectedClasses) {
            String clsName = cls[0];
            int expFields = Integer.parseInt(cls[2]);
            int expMethods = Integer.parseInt(cls[3]);

            // Check file exists in generated folder
            File clsFile = new File(genDir, clsName + ".java");
            if (!clsFile.exists()) {
                fail(test.name, "Missing class file: " + clsName + ".java in " + genDir);
                testPassed = false;
                continue;
            }

            String content = new String(Files.readAllBytes(clsFile.toPath()), "UTF-8");

            // Count fields (look for "private" declarations)
            long fieldCount = content.lines()
                .filter(l -> l.matches(".*\\bprivate\\b.*\\b(int|double|boolean|String|ArrayList|float|long|char|byte|short)\\b.*;"))
                .count();
            // Also count non-private field patterns
            long nonPrivateFields = content.lines()
                .filter(l -> l.matches(".*\\b(public|protected)?\\s*(int|double|boolean|String|ArrayList|float|long|char|byte|short)\\s+\\w+\\s*;.*"))
                .count();

            if (fieldCount != expFields) {
                fail(test.name, clsName + " expected " + expFields + " fields, got " + fieldCount);
                testPassed = false;
            }

            // Count method declarations
            long methodCount = content.lines()
                .filter(l -> l.matches(".*\\b(public|private|protected)\\s+(\\w+\\.?<?\\w*>?)\\s+\\w+\\s*\\(.*\\)\\s*\\{.*"))
                .count();

            if (methodCount != expMethods) {
                // Also count without modifiers
                long altMethodCount = content.lines()
                    .filter(l -> l.matches(".*\\b(public|private|protected|static)?\\s*(void|int|double|boolean|String|\\w+)\\s+\\w+\\s*\\(.*\\)\\s*\\{.*"))
                    .count();
                if (altMethodCount != expMethods && methodCount != expMethods) {
                    fail(test.name, clsName + " expected " + expMethods + " methods, got " + methodCount + " (alt: " + altMethodCount + ")");
                    testPassed = false;
                }
            }
        }

        if (testPassed) {
            passed++;
            System.out.println("PASS: " + test.name);
        } else {
            failed++;
            System.out.println("FAIL: " + test.name + " (see above)");
        }

        // Cleanup
        deleteDir(tempDir);
    }

    static void fail(String testName, String msg) {
        System.out.println("FAIL DETAIL [" + testName + "]: " + msg);
        failures.add(testName + ": " + msg);
    }

    static void deleteDir(File dir) {
        if (dir.exists()) {
            for (File f : dir.listFiles()) {
                if (f.isDirectory()) deleteDir(f);
                f.delete();
            }
            dir.delete();
        }
    }
}
