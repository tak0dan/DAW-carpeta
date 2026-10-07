package Chess;

import java.util.ArrayList;
import java.util.List;

public class King extends Piece {
    public King(String color, int row, int col) { super(color, row, col); }

    @Override public boolean canMoveTo(int destRow, int destCol, Piece[][] board) {
        int dr = Math.abs(destRow - row);
        int dc = Math.abs(destCol - col);
        if (dr > 1 || dc > 1) return false;
        Piece target = board[destRow][destCol];
        return target == null || !target.color.equals(this.color);
    }

    @Override public List<int[]> getAvailableMoves(Piece[][] board) {
        List<int[]> moves = new ArrayList<>();
        for (int dr = -1; dr <= 1; dr++)
            for (int dc = -1; dc <= 1; dc++)
                if (dr != 0 || dc != 0) {
                    int r = row + dr, c = col + dc;
                    if (r >= 0 && r < 8 && c >= 0 && c < 8 && 
                        (board[r][c] == null || !board[r][c].color.equals(color)))
                        moves.add(new int[]{r, c});
                }
        return moves;
    }
}
