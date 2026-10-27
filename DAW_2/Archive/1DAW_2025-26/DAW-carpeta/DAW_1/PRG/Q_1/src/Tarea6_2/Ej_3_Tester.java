package Tarea6_2;

public class Ej_3_Tester {

    public static void main(String[] args) {

        Ej_3 analyzer = new Ej_3();

        analyzer.analyze("it is just a tester");
        System.out.println(analyzer);

        analyzer.analyze("hola world");
        System.out.println(analyzer);

        analyzer.analyze("    quiero     MAS    espacios     ");
        System.out.println(analyzer);
    }
}