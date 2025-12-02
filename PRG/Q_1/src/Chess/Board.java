package Chess;

public class Board {

    // Labels for user input / display
    public static String[][] board = {
        {"a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"},
        {"a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"},
        {"a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"},
        {"a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"},
        {"a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"},
        {"a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"},
        {"a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"},
        {"a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"}
    };

    // Actual pieces on the board
    public static Piece[][] pieces = new Piece[8][8];

    // Initialize board with pieces
    public static void initialize() {
        // Example: place knights only
        pieces[0][1] = new Knight("Black", 0, 1);
        pieces[0][6] = new Knight("Black", 0, 6);

        pieces[7][1] = new Knight("White", 7, 1);
        pieces[7][6] = new Knight("White", 7, 6);

        // TODO: Add pawns, rooks, bishops, queen, king later
    }

    // Convert "e2" into array indices [row,col]
    public static int[] parseSquare(String dest) {
        if (dest == null || dest.length() != 2) return null;

        char file = dest.charAt(0); // a-h
        char rank = dest.charAt(1); // 1-8

        if (file < 'a' || file > 'h' || rank < '1' || rank > '8') return null;

        int col = file - 'a';
        int row = 8 - (rank - '0'); // row 0 = rank 8

        return new int[] { row, col };
    }

    // Display the board in ASCII
    public static void printBoard() {
        System.out.println("\n  a  b  c  d  e  f  g  h");

        for (int r = 0; r < 8; r++) {
            System.out.print(8 - r + " ");
            for (int c = 0; c < 8; c++) {
                if (pieces[r][c] == null) {
                    System.out.print("-- ");
                } else {
                    String color = pieces[r][c].color.equals("White") ? "W" : "B";
                    String type = pieces[r][c].getClass().getSimpleName().substring(0, 1); // e.g., N for Knight
                    System.out.print(color + type + " ");
                }
            }
            System.out.println(8 - r);
        }
        System.out.println("  a  b  c  d  e  f  g  h\n");
    }
}
