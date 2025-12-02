package Chess;

import java.util.Scanner;

public class marks {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        // --- Player names ---
        System.out.print("Enter Player 1 name: ");
        String p1 = in.nextLine();

        System.out.print("Enter Player 2 name: ");
        String p2 = in.nextLine();

        // --- Random colors ---
        boolean p1White = Math.random() < 0.5;

        Player whitePlayer = p1White ? new Player(p1, "White") : new Player(p2, "White");
        Player blackPlayer = p1White ? new Player(p2, "Black") : new Player(p1, "Black");

        System.out.println("\n" + whitePlayer.name + " is White.");
        System.out.println(blackPlayer.name + " is Black.\n");

        // --- Initialize the piece board ---
        Board.initialize();

        boolean endGame = false;
        int turn = 0;

        // --- Main game loop ---
        while (!endGame) {
            Board.printBoard(); // optional: you'll implement this later

            if (turn % 2 == 0) whitePlayer.turn();
            else blackPlayer.turn();

            turn++;

            // TODO: detect check, checkmate, stalemate
            // endGame = true;
        }

        in.close();
        System.out.println("Game over!");
    }
}
