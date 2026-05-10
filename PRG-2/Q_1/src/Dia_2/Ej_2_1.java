package Dia_2;

public class Ej_2_1 {

    public static void main(String[] args) {

        double num = -3568;
        Double numO;

        numO = num;   // autoboxing

        num = numO;   // Unboxing

        numO = new Double(num);   // constructor explicito

        numO = Double.valueOf(num);   

        // Define String variable
        String numS;
        String numS1 = "abc23";
        
        Double nummrr = Double.valueOf(numS1);// No funciona :(
        
        // Assign num primitive long -> numS
        numS = String.valueOf(num);

        // Assign numO (Long object) -> numS
        numS = numO.toString();

        System.out.println("num: " + num);
        System.out.println("numO: " + numO);
        System.out.println("numS: " + numS);
    }
}
