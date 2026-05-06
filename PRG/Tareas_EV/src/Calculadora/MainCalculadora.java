package Calculadora;

import java.util.Scanner;
import java.util.InputMismatchException;

public class MainCalculadora {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        boolean salir = false;

        while (salir == false) {
            try {
                System.out.println("Primer numero:");
                double num1 = teclado.nextDouble();
                
                System.out.println("Segundo numero:");
                double num2 = teclado.nextDouble();
                
                System.out.println("Operador (+, -, *, /):");
                String signo = teclado.next();

                double total = 0;
                
                if (signo.equals("+")) {
                    total = num1 + num2;
                } else if (signo.equals("-")) {
                    total = num1 - num2;
                } else if (signo.equals("*")) {
                    total = num1 * num2;
                } else if (signo.equals("/")) {
                    if (num2 == 0) {
                        throw new ArithmeticException("No se puede dividir por cero");
                    }
                    total = num1 / num2;
                } else {
                    throw new WrongOperator("Ese operador no existe");
                }

                System.out.println("Resultado: " + total);
                salir = true;

            } catch (InputMismatchException e) {
                System.out.println("Error: No has puesto un numero");
                teclado.next(); 
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }
}