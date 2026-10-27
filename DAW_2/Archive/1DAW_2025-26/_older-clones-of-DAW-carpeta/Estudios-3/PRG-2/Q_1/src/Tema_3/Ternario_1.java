package Tema_3;
import java.util.Scanner;

public class Ternario_1 {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        System.out.print("Introduce la temperatura del agua: ");
        double temperatura = tec.nextDouble();

        String estado = (temperatura >= 100) ? "vapor"
                       : (temperatura <= 0) ? "hielo"
                       : "líquido";

        System.out.println("El estado del agua es " + estado);
    }
}
