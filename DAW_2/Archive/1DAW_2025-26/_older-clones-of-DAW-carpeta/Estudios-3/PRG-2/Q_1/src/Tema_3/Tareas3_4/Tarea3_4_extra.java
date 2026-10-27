package Tema_3.Tareas3_4;
import java.util.Scanner;

public class Tarea3_4_extra {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        System.out.print("Introduce una frase: ");
        String your_string = tec.nextLine();
        String es_palindromo = your_string.toUpperCase();

        es_palindromo = es_palindromo.replace(" ", "");
        es_palindromo = es_palindromo.replace('Á', 'A');
        es_palindromo = es_palindromo.replace('É', 'E');
        es_palindromo = es_palindromo.replace('Í', 'I');
        es_palindromo = es_palindromo.replace('Ó', 'O');
        es_palindromo = es_palindromo.replace('Ú', 'U');
        es_palindromo = es_palindromo.replaceAll("[^A-ZÁÉÍÓÚÑ]", "");

        boolean no_es_palindromo = false;

        int central;
        if (es_palindromo.length() % 2 == 0) {
            central = es_palindromo.length() / 2 - 1;
        } else {
            central = (es_palindromo.length() + 1) / 2 - 1;
        }

        for (int i = 0; i <= central&&!no_es_palindromo; i++) {
            if (es_palindromo.charAt(i) != es_palindromo.charAt(es_palindromo.length() - 1 - i)) {
                no_es_palindromo = true;
            }
        }

        if (!no_es_palindromo) {
            System.out.println("" + your_string + " es un palíndromo.");
        } else {
            System.out.println("No es un palíndromo.");
        }

        tec.close();
    }
}
