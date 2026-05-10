/*package Tema5_1;

import java.util.Scanner;

public class Ej1Numeros {
    private int pares;
    private int primos;
    private int mayor;

    public Ej1Numeros() {
        pares = 0;
        primos = 0;
        mayor = Integer.MIN_VALUE;
    }

    public void leer() {
        Scanner tec = new Scanner(System.in);
        for (int i = 0; i < 10; i++) {
            int a = tec.nextInt();
            if (esPar(a)) pares++;
            if (esPrimo(a)) primos++;
            if (a > mayor) mayor = a;
        }
    }

    public static boolean esPar(int n) {
        return n % 2 == 0;
    }

    public static boolean esPrimo(int x) {
        if (x < 2) return false;
        for (int i = 2; i <= Math.sqrt(x); i++) {
            if (x % i == 0) return false;
        }
        return true;
    }

    public int getPares() {
        return pares;
    }

    public int getPrimos() {
        return primos;
    }

    public int getMayor() {
        return mayor;
    }
}
*/