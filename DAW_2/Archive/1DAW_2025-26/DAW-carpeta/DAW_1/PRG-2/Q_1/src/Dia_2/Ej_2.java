package Dia_2;

public class Ej_2 {

    public static void main(String[] args) {

        long num = -3568;
        Long numO;

        numO = num;   // autoboxing

        num = numO;   // Unboxing

        numO = new Long(num);   // constructor explicito

        numO = Long.valueOf(num);   

        // Define String variable
        String numS;

        // Assign num primitive long -> numS
        numS = String.valueOf(num);

        // Assign numO (Long object) -> numS
        numS = numO.toString();

        System.out.println("num: " + num);
        System.out.println("numO: " + numO);
        System.out.println("numS: " + numS);
    }
}
