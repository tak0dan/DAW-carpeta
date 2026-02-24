package Chess;

import java.util.Scanner;

public class Player {
    public String name;
    public String color;   // "White" or "Black"

    Scanner in = new Scanner(System.in);

    public Player(String name, String color) {
        this.name = name;
        this.color = color;
    }

    public void turn() {
        System.out.println("\n" + name + "'s turn (" + color + ")");

        Piece selectedPiece = null;
        int[] start = null;

        // --- STEP 1: select a piece ---
        while (true) {
            System.out.print("Select a piece (e.g., e2): ");
            String square = in.nextLine().trim();

            start = Board.parseSquare(square);
            if (start == null) {
                System.out.println("Invalid square.");
                continue;
            }

            selectedPiece = Board.pieces[start[0]][start[1]];

            if (selectedPiece == null) {
                System.out.println("No piece on that square.");
            } else if (!selectedPiece.color.equals(color)) {
                System.out.println("That's not your piece.");
            } else {
                break; // successful selection
            }
        }

        // --- STEP 2: select destination ---
        while (true) {
            System.out.print("Move to (e.g., e4): ");
            String dest = in.nextLine().trim();

            int[] end = Board.parseSquare(dest);
            if (end == null) {
                System.out.println("Invalid square.");
                continue;
            }

            if (!selectedPiece.canMoveTo(end[0], end[1], Board.pieces)) {
                System.out.println("Illegal move for this piece.");
                continue;
            }

            // Move execution
            Board.pieces[start[0]][start[1]] = null;             // clear old
            Board.pieces[end[0]][end[1]] = selectedPiece;       // place new
            selectedPiece.row = end[0];
            selectedPiece.col = end[1];

            System.out.println("Moved to " + dest + ".");
            break;
        }
    }
}
