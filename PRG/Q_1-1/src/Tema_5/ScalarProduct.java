package Tema_5;
import java.util.Scanner;
import java.util.Random;

public class ScalarProduct {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        Random rnd = new Random();

        final int LENGTH = 8;

        int[] v = new int[LENGTH];
        int[] result = new int[LENGTH];

        for (int i = 0; i < LENGTH; i++) {
            v[i] = rnd.nextInt(21) - 10;
        }

        System.out.println("Enter a scalar:");
        int scalar = tec.nextInt();

        for (int i = 0; i < LENGTH; i++) {
            result[i] = v[i] * scalar;
        }

        System.out.println();
        System.out.println("Vector   | Scalar | Result");
        System.out.println("----------------------------------------");

        for (int i = 0; i < LENGTH; i++) {
            System.out.printf("%7d | %6d | %7d%n", v[i], scalar, result[i]);
        }
    }
}
