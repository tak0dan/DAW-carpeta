package Chess;

import java.util.ArrayList;
import java.util.List;

public class Knight extends Piece {

    public Knight(String color, int row, int col) {
        super(color, row, col);
    }

    // Check if a move is legal considering the board
    @Override
    public boolean canMoveTo(int destRow, int destCol, Piece[][] board) {
        // Must be inside the board
        if (destRow < 0 || destRow >= 8 || destCol < 0 || destCol >= 8) return false;

        // L-shaped move
        int dRow = Math.abs(destRow - row);
        int dCol = Math.abs(destCol - col);
        boolean validMove = (dRow == 2 && dCol == 1) || (dRow == 1 && dCol == 2);

        if (!validMove) return false;

        // Cannot capture your own piece
        Piece target = board[destRow][destCol];
        if (target != null && target.color.equals(this.color)) return false;

        return true;
    }

    // Optional: return all legal moves (used for AI or hint system)
    @Override
    public List<int[]> getAvailableMoves(Piece[][] board) {
        int[][] directions = {
            {2,1}, {2,-1}, {-2,1}, {-2,-1},
            {1,2}, {1,-2}, {-1,2}, {-1,-2}
        };

        List<int[]> moves = new ArrayList<>();
        for (int[] d : directions) {
            int newRow = row + d[0];
            int newCol = col + d[1];
            if (canMoveTo(newRow, newCol, board)) {
                moves.add(new int[] { newRow, newCol });
            }
        }
        return moves;
    }

    // Move the piece on the board
    public void moveTo(int destRow, int destCol, Piece[][] board) {
        if (!canMoveTo(destRow, destCol, board)) {
            System.out.println("Illegal move for Knight!");
            return;
        }

        // Update board array
        board[row][col] = null;
        board[destRow][destCol] = this;

        // Update internal coordinates
        this.row = destRow;
        this.col = destCol;
    }

    @Override
    public String toString() {
        return (color.equals("White") ? "WN" : "BN");
    }
}
