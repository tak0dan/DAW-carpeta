package Chess;

import java.util.ArrayList;
import java.util.List;

//Bishop.java
public class Bishop extends Piece {
 public Bishop(String color, int row, int col) {
     super(color, row, col);
 }

 public static boolean isClearDiagonal(int r1, int c1, int r2, int c2, Piece[][] board) {
     int dr = Integer.compare(r2, r1);
     int dc = Integer.compare(c2, c1);

     int r = r1 + dr;
     int c = c1 + dc;

     while (r != r2 || c != c2) {
         if (board[r][c] != null) return false;
         r += dr;
         c += dc;
     }
     return true;
 }

 @Override
 public boolean canMoveTo(int destRow, int destCol, Piece[][] board) {
     int dr = Math.abs(destRow - row);
     int dc = Math.abs(destCol - col);
     if (dr != dc || dr == 0) return false; // must be diagonal

     if (!isClearDiagonal(row, col, destRow, destCol, board)) return false;

     Piece target = board[destRow][destCol];
     return target == null || !target.color.equals(this.color);
 }

 @Override
 public List<int[]> getAvailableMoves(Piece[][] board) {
     List<int[]> moves = new ArrayList<>();
     int[][] dirs = {{1,1},{1,-1},{-1,1},{-1,-1}};

     for (int[] d : dirs) {
         int r = row + d[0];
         int c = col + d[1];
         while (r >= 0 && r < 8 && c >= 0 && c < 8) {
             if (board[r][c] != null) {
                 if (!board[r][c].color.equals(color)) moves.add(new int[]{r, c});
                 break;
             }
             moves.add(new int[]{r, c});
             r += d[0];
             c += d[1];
         }
     }
     return moves;
 }

 public static boolean isValidBishopMove(int row, int col, int destRow, int destCol, Piece[][] board) {
	// TODO Auto-generated method stub
	return false;
 }
}
