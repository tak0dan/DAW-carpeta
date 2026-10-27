package Tema_3;
import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        double num1 = 0, num2 = 0;
        double result;
        String oper;
        Scanner etr = new Scanner(System.in);
        boolean aux_oper = false;

        do {
            System.out.println("¿Qué operación quieres realizar? (+ - * /)");
            oper = etr.next();
            aux_oper = oper.equals("+") || oper.equals("-") || oper.equals("/") || oper.equals("*");

            if (!aux_oper) {
                System.out.println("No es un operador válido\n");
            }
        } while (!aux_oper);

        boolean validInput = false;
        while (!validInput) {
            System.out.print("Ponga su primer número: ");
            if (etr.hasNextDouble()) {
                num1 = etr.nextDouble();
                validInput = true;
            } else {
                System.out.println("Error: debes ingresar un número válido.\n");
                etr.next();
            }
        }

        validInput = false;
        while (!validInput) {
            System.out.print("Ponga su segundo número: ");
            if (etr.hasNextDouble()) {
                num2 = etr.nextDouble();
                validInput = true;
            } else {
                System.out.println("Error: debes ingresar un número válido.\n");
                etr.next(); 
            }
        }

        if (oper.equals("/")) {
            while (num2 == 0) {
                System.out.println("\nNo puedes dividir entre 0.\n");
                System.out.print("Pon un número que no sea 0: ");
                while (!etr.hasNextDouble()) {
                    System.out.println("Error: debes ingresar un número válido.\n");
                    etr.next(); 
                }
                num2 = etr.nextDouble();
            }
        }

        switch (oper) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = (double) num1 / num2;
                break;
            default:
                result = 0;
        }

        System.out.println("\n" + num1 + " " + oper + " " + num2 + " = " + result);

        etr.close();
    }
}
