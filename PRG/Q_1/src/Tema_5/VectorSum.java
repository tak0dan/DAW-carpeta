package Tema_5;
import java.util.Scanner;

public class VectorSum {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
    	System.out.println("Give me the length of the array.");
        final int LENGTH = tec.nextInt();


        int[] v1 = new int[LENGTH];
        int[] v2 = new int[LENGTH];
        int[] sum = new int[LENGTH];

        System.out.println("Enter values for the first vector:");
        for (int i = 0; i < LENGTH; i++) {
            v1[i] = tec.nextInt();
        }

        System.out.println("Enter values for the second vector:");
        for (int i = 0; i < LENGTH; i++) {
            v2[i] = tec.nextInt();
        }

        for (int i = 0; i < LENGTH; i++) {
            sum[i] = v1[i] + v2[i];
        }

        System.out.println("Resulting vector (sum):");
        for (int i = 0; i < LENGTH; i++) {
            System.out.print(sum[i] + " ");
        }
    }
}
