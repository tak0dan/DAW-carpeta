package Tarea3_5;

import java.util.Scanner;

public class Ej_4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce un número entero positivo: ");
        int n = sc.nextInt();

        if (n < 0) {
            System.out.println("Por favor, introduce un número positivo.");
        } else if (n == 0) {
            System.out.println("El elemento " + n + " de la serie de Fibonacci es 0");
        } else if (n == 1) {
            System.out.println("El elemento " + n + " de la serie de Fibonacci es 1");
        } else {
            long a0 = 0, a1 = 1, an = 0;

            for (int i = 2; i <= n; i++) {
                an = a0 + a1;
                a0 = a1;
                a1 = an;
            }

            System.out.println("El elemento " + n + " de la serie de Fibonacci es " + a1);
        }

        sc.close();
    }
}
