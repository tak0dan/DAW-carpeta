package Tema_5;
import java.util.Scanner;

public class Palindromo {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);

        System.out.println("Escribe una frase:");
        String frase = tec.nextLine();

        frase = frase.toLowerCase();
        frase = frase.replace(" ", "");

        char[] v = frase.toCharArray();

        boolean palin = true;

        for (int i = 0; i < v.length / 2; i++) {
            if (v[i] != v[v.length - 1 - i]) {
                palin = false;
                break;
            }
        }

        if (palin) {
            System.out.println("La frase es palíndroma");
        } else {
            System.out.println("La frase no es palíndroma");
        }
    }
}
