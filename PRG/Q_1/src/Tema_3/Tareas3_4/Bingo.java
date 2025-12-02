package Tema_3.Tareas3_4;
import java.util.Random;
import java.util.Scanner;

public class Bingo {
    public static void main(String[] args) {
        final int FIN = 5;
        final int MAX_NUMBER = 100; // numbers from 0 to 99
        int[][] card_player = new int[FIN][FIN];
        boolean[] drawnNumbers = new boolean[MAX_NUMBER]; // track numbers already drawn
        Random r = new Random();
        Scanner sc = new Scanner(System.in);

        // Generate unique Bingo card
        for (int i = 0; i < FIN; i++) {
            for (int j = 0; j < FIN; j++) {
                boolean unique;
                int new_number;
                do {
                    new_number = r.nextInt(MAX_NUMBER);
                    unique = true;
                    for (int x = 0; x <= i; x++) {
                        for (int y = 0; y < FIN; y++) {
                            if (x == i && y >= j) continue;
                            if (card_player[x][y] == new_number) unique = false;
                        }
                    }
                } while (!unique);
                card_player[i][j] = new_number;
            }
        }

        System.out.println("Your Bingo card:");
        printCard(card_player);

        boolean fullBingo = false;

        while (!fullBingo) {
            System.out.println("\nPress Enter to draw next number...");
            sc.nextLine(); // wait for user input

            int next_number;
            // Draw a number that has not been drawn before
            do {
                next_number = r.nextInt(MAX_NUMBER);
            } while (drawnNumbers[next_number]);
            drawnNumbers[next_number] = true;

            System.out.println("Next number is: " + next_number);

            // Mark the number if it exists on the card
            boolean matched = false;
            for (int i = 0; i < FIN; i++) {
                for (int j = 0; j < FIN; j++) {
                    if (card_player[i][j] == next_number) {
                        card_player[i][j] = -1; // mark as hit
                        System.out.println("You have a match on number " + next_number + " at (" + i + "," + j + ")");
                        matched = true;
                    }
                }
            }
            if (!matched) System.out.println("No match this time.");

            // Check if the card is fully marked
            fullBingo = isCardFull(card_player);

            System.out.println("\nUpdated card:");
            printCard(card_player);
        }

        System.out.println("\nBINGO! Entire card is completed!");
        sc.close();
    }

    private static boolean isCardFull(int[][] card) {
        for (int[] row : card) {
            for (int n : row) {
                if (n != -1) return false;
            }
        }
        return true;
    }

    private static void printCard(int[][] card) {
        for (int[] row : card) {
            for (int n : row) {
                if (n == -1) System.out.print(" X ");
                else System.out.printf("%2d ", n);
            }
            System.out.println();
        }
    }
}
