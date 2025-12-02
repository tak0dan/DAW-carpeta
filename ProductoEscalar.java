import java.util.Scanner;

public class ProductoEscalar {
    public static void main(String[] args) {
        final int N = 5;
        int[] vector = new int[N];
        int[] resultado = new int[N];
        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce los valores del vector:");
        for (int i = 0; i < N; i++) {
            System.out.print("vector[" + i + "] = ");
            vector[i] = sc.nextInt();
        }

        System.out.print("\nIntroduce un escalar: ");
        int escalar = sc.nextInt();

        for (int i = 0; i < N; i++) {
            resultado[i] = vector[i] * escalar;
        }

        System.out.println("\nVector resultante:");
        for (int i = 0; i < N; i++) {
            System.out.println("resultado[" + i + "] = " + resultado[i]);
        }
    }
}
