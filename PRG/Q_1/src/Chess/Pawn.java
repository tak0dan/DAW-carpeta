package Chess;

import java.util.ArrayList;
import java.util.List;

//Pawn.java
public class Pawn extends Piece {
 public Pawn(String color, int row, int col) { super(color, row, col); }

 private int direction() { return color.equals("White") ? -1 : 1; }
 private int startRow() { return color.equals("White") ? 6 : 1; }

 @Override
 public boolean canMoveTo(int destRow, int destCol, Piece[][] board) {
     int forward = direction();
     int dr = destRow - row;
     int dc = Math.abs(destCol - col);

     // One step forward
     if (dc == 0 && dr == forward && board[destRow][destCol] == null) return true;
     // Two steps from start
     if (dc == 0 && row == startRow() && dr == 2 * forward &&
         board[row + forward][col] == null && board[destRow][destCol] == null) return true;
     // Diagonal capture
     if (dc == 1 && dr == forward && board[destRow][destCol] != null &&
         !board[destRow][destCol].color.equals(color)) return true;

     return false;
 }

 @Override
 public List<int[]> getAvailableMoves(Piece[][] board) {
     List<int[]> moves = new ArrayList<>();
     int forward = direction();

     // Forward one
     int nr = row + forward;
     if (nr >= 0 && nr < 8 && board[nr][col] == null) {
         moves.add(new int[]{nr, col});
     }

     // Forward two from start
     if (row == startRow()) {
         nr = row + 2 * forward;
         if (nr >= 0 && nr < 8 && board[row + forward][col] == null && board[nr][col] == null) {
             moves.add(new int[]{nr, col});
         }
     }

     // Captures
     int[] cols = {col - 1, col + 1};
     for (int nc : cols) {
         if (nc >= 0 && nc < 8) {
             nr = row + forward;
             if (nr >= 0 && nr < 8 && board[nr][nc] != null && !board[nr][nc].color.equals(color)) {
                 moves.add(new int[]{nr, nc});
             }
         }
     }
     return moves;
 }
}