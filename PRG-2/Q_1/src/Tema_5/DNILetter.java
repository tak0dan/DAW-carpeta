package Tema_5;
import java.util.Scanner;

public class DNILetter {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);

        char[] letters = {
            'T','R','W','A','G','M','Y','F','P','D','X','B',
            'N','J','Z','S','Q','V','H','L','C','K','E'
        };

        System.out.println("Enter DNI number (without the letter):");
        int dni = tec.nextInt();

        int pos = dni % 23;
        char letter = letters[pos];

        System.out.println("Your full DNI is: " + dni + letter);
    }
}
