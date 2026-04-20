package Tarea6_2;

public class Ej_4_Tester {

    public static void main(String[] args) {

        Ej_4 validator = new Ej_4(8);

        validator.analyze("Abc123!!");
        System.out.println(validator);

        validator.analyze("weakpass");
        System.out.println(validator);

        validator.analyze("?   Short1!");
        System.out.println(validator);
        
        validator.analyze("Short1!");
        System.out.println(validator);
    }
}