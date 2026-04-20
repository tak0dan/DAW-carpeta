/*
package Tests_Generator;
import com.github.javaparser.*;
import com.github.javaparser.ast.*;
import com.github.javaparser.ast.expr.*;
import com.github.javaparser.ast.stmt.*;
import com.github.javaparser.ast.visitor.VoidVisitorAdapter;

import java.io.*;
import java.nio.file.*;
import java.util.*;

public class SmartTestGenerator {

    public static void generateTests(
            String projectRoot,
            String packageName,
            String className,
            int mode
    ) throws Exception {

        Path root = Paths.get(projectRoot);

        Optional<Path> classFile = Files.walk(root)
                .filter(p -> p.toString().endsWith(".java"))
                .filter(p -> p.getFileName().toString().equals(className + ".java"))
                .filter(p -> {
                    try {
                        String content = Files.readString(p);
                        return content.contains("package " + packageName);
                    } catch (Exception e) {
                        return false;
                    }
                })
                .findFirst();

        if (classFile.isEmpty()) {
            throw new RuntimeException("Class not found");
        }

        CompilationUnit cu = StaticJavaParser.parse(classFile.get());

        List<Integer> boundaryValues = new ArrayList<>();

        cu.accept(new VoidVisitorAdapter<Void>() {
            @Override
            public void visit(BinaryExpr expr, Void arg) {
                super.visit(expr, arg);

                if (expr.getOperator() == BinaryExpr.Operator.EQUALS ||
                        expr.getOperator() == BinaryExpr.Operator.GREATER ||
                        expr.getOperator() == BinaryExpr.Operator.GREATER_EQUALS ||
                        expr.getOperator() == BinaryExpr.Operator.LESS ||
                        expr.getOperator() == BinaryExpr.Operator.LESS_EQUALS) {

                    expr.getRight().ifIntegerLiteralExpr(lit -> {
                        int val = lit.asInt();
                        boundaryValues.add(val - 1);
                        boundaryValues.add(val);
                        boundaryValues.add(val + 1);
                    });
                }
            }
        }, null);

        generateJUnitFile(projectRoot, packageName, className, boundaryValues, mode);
    }

    private static void generateJUnitFile(
            String projectRoot,
            String packageName,
            String className,
            List<Integer> boundaryValues,
            int mode
    ) throws Exception {

        String testClass = className + "GeneratedTest";

        StringBuilder sb = new StringBuilder();

        sb.append("package ").append(packageName).append(";\n\n");
        sb.append("import org.junit.jupiter.api.*;\n\n");
        sb.append("public class ").append(testClass).append(" {\n\n");

        sb.append("    @Test\n");
        sb.append("    void boundaryTest() {\n");
        sb.append("        ").append(className).append(" obj = new ").append(className).append("();\n");

        Set<Integer> unique = new HashSet<>(boundaryValues);

        Random r = new Random();

        for (int val : unique) {

            int testVal = val;

            if (mode == -1) testVal = val - 100;
            if (mode == 1) testVal = val;
            if (mode == 0) testVal = val + r.nextInt(3) - 1;

            sb.append("        obj.check(").append(testVal).append(");\n");
        }

        sb.append("    }\n");
        sb.append("}\n");

        Path out = Paths.get(projectRoot,
                "src/test/java",
                packageName.replace(".", "/"),
                SmartTestGenerator         testClass + ".java");

        Files.createDirectories(out.getParent());
        Files.writeString(out, sb.toString());
    }
}
*/