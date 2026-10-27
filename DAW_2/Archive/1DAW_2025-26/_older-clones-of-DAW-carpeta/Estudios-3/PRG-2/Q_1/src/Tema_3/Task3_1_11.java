package Tema_3;
import java.util.Scanner;

public class Task3_1_11 {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        System.out.println("Dame algun string solamente de las letras");
        String word = tec.nextLine();
        
        boolean todoletras = true;
        for (int i = 0; i < word.length() && todoletras; i++) {
            todoletras = Character.isLetter(word.charAt(i));
        }

        if (!todoletras) {
        	for(int r = 0; r<100; r++) {
            System.out.println("ME HAS MENTIDO, NO ES UN STRING SOLAMENTE DE LETRAS, LLEVA NUMEROS!!!");
        	}} else {
            char firstChar = Character.toUpperCase(word.charAt(0));
            if (firstChar <= 'N') {
                System.out.println("Pertenece a la primera mitad del alfabeto");
            } else {
                System.out.println("Pertenece a la segunda mitad del alfabeto");
            }
        }
    }
}
