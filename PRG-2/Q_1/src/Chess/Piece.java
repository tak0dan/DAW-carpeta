package Chess;

import java.util.List;

public abstract class Piece {
    public int row;
    public int col;
    public String color;  // "White" or "Black"

    public Piece(String color, int row, int col) {
        this.color = color;
        this.row = row;
        this.col = col;
    }

    // Each piece type will implement its own move rules
    public abstract boolean canMoveTo(int destRow, int destCol, Piece[][] board);

    // Optional: more advanced pieces will return lists of all legal moves
    public abstract List<int[]> getAvailableMoves(Piece[][] board);

    public String position() {
        // For debugging, returns rank/file like "e4"
        return Board.board[row][col];
    }
}
