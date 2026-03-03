package Tema_5;
import java.util.Scanner;

public class array_fibonacci {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        System.out.println("Give me a position of a number:");
        int pos = tec.nextInt();

        // Basic sanity check
        if (pos < 0) {
            System.out.println("Negative index? No thanks.");
            return;
        }
        if (pos == 0) {
            System.out.println("Your number is 0");
            return;
        }
        if (pos == 1) {
            System.out.println("Your number is 1");
            return;
        }

        int[] v = new int[pos + 1];
        v[0] = 0;
        v[1] = 1;

        for (int i = 2; i <= pos; i++) {
            v[i] = v[i - 1] + v[i - 2];
        }

        System.out.println("Your number is " + v[pos]);
    }
}
