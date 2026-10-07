package Chess;

import java.util.ArrayList;
import java.util.List;

public class Queen extends Piece {

    public Queen(String color, int row, int col) {
        super(color, row, col);
    }

    @Override
    public boolean canMoveTo(int destRow, int destCol, Piece[][] board) {
        int dr = Math.abs(destRow - row);
        int dc = Math.abs(destCol - col);

        boolean straight = (row == destRow || col == destCol);
        boolean diagonal = (dr == dc && dr != 0);
        if (!straight && !diagonal) return false;

        if (straight) {
            if (!Rook.isClearPath(row, col, destRow, destCol, board)) return false;
        } else {
            if (!Bishop.isClearDiagonal(row, col, destRow, destCol, board)) return false;
        }

        Piece target = board[destRow][destCol];
        return target == null || !target.color.equals(this.color);
    }

    @Override
    public List<int[]> getAvailableMoves(Piece[][] board) {
        List<int[]> moves = new ArrayList<>();

        // Rook directions (horizontal + vertical)
        int[][] rookDirs = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        // Bishop directions (diagonals)
        int[][] bishopDirs = {{1, 1}, {1, -1}, {-1, 1}, {-1, -1}};

        for (int[] d : rookDirs) addLine(moves, d[0], d[1], board);
        for (int[] d : bishopDirs) addLine(moves, d[0], d[1], board);

        return moves;
    }

    private void addLine(List<int[]> moves, int dr, int dc, Piece[][] board) {
        int r = row + dr;
        int c = col + dc;
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            Piece p = board[r][c];
            if (p == null) {
                moves.add(new int[]{r, c});
            } else {
                if (!p.color.equals(color)) moves.add(new int[]{r, c});
                break;
            }
            r += dr;
            c += dc;
        }
    }
}