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

    public static final String[] PIECE_UNICODE = {
        " ", "♔", "♕", "♖", "♗", "♘", "♙", // White
        "♚", "♛", "♜", "♝", "♞", "♟"  // Black, no extra space you clown
    };

    public enum PieceType {
        EMPTY, KING, QUEEN, ROOK, BISHOP, KNIGHT, PAWN
    }

    public static void printBoard() {
        System.out.println("\n   ╔═══════════════════════════════════════╗");
        for (int r = 0; r < 8; r++) {
            System.out.print((8 - r) + "  ║ ");
            for (int c = 0; c < 8; c++) {
                Piece p = pieces[r][c];
                String symbol = "·"; // empty square

                if (p != null) {
                    int idx = p instanceof King ? 1 :
                        p instanceof Queen ? 2 :
                        p instanceof Rook ? 3 :
                        p instanceof Bishop ? 4 :
                        p instanceof Knight ? 5 :
                        p instanceof Pawn ? 6 : 0;

                    if (p.color.equals("Black")) idx += 6;
                    symbol = PIECE_UNICODE[idx];
                }
                System.out.print(symbol + "  ");
            }
            System.out.println("║ " + (8 - r));
        }
        System.out.println("   ╚═══════════════════════════════════════╝");
        System.out.println("     a  b  c  d  e  f  g  h\n");
    }

    public static void setupStandardBoard() {
        for (int r = 0; r < 8; r++)
            for (int c = 0; c < 8; c++)
                pieces[r][c] = null;

        for (int c = 0; c < 8; c++) {
            pieces[1][c] = new Pawn("Black", 1, c);
            pieces[6][c] = new Pawn("White", 6, c);
        }

        PieceType[] backRank = {PieceType.ROOK, PieceType.KNIGHT, PieceType.BISHOP, PieceType.QUEEN,
                                PieceType.KING, PieceType.BISHOP, PieceType.KNIGHT, PieceType.ROOK};
        for (int c = 0; c < 8; c++) {
            pieces[0][c] = createPiece(backRank[c], "Black", 0, c);
            pieces[7][c] = createPiece(backRank[c], "White", 7, c);
        }
    }

    private static Piece createPiece(PieceType type, String color, int row, int col) {
        if (type == PieceType.KING) return new King(color, row, col);
        if (type == PieceType.QUEEN) return new Queen(color, row, col);
        if (type == PieceType.ROOK) return new Rook(color, row, col);
        if (type == PieceType.BISHOP) return new Bishop(color, row, col);
        if (type == PieceType.KNIGHT) return new Knight(color, row, col);
        if (type == PieceType.PAWN) return new Pawn(color, row, col);
        return null;
    }
}