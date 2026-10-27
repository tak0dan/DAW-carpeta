package Tema_5;
import java.util.Scanner;

public class array_fibonacci_1 {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        System.out.println("Give me a position of a number:");
        int pos = tec.nextInt();


        if (pos < 0) {
            System.out.println("Negative index? No thanks.");
            return;
        }

        if (pos == 0) {
            System.out.println("0");
            return;
        }

        if (pos == 1) {
            System.out.println("0 1");
            return;
        }

        int[] v = new int[pos + 1];
        v[0] = 0;
        v[1] = 1;

        for (int i = 2; i <= pos; i++) {
            v[i] = v[i - 1] + v[i - 2];
        }

        String out = "";

        for (int i = 0; i <= pos; i++) {
            out = out + v[i];
            if (i < pos) {
                out = out + " ";
            }
        }

        System.out.println(out);
    }
}
