package Chess;

public class Knight {
    public int row;   
    public int col;   
    public String color;

    public Knight(String color, int row, int col) {
        this.color = color;
        this.row = row;
        this.col = col;
    }


	public boolean canMoveTo(int destRow, int destCol) {
        if (destRow < 0 || destRow >= 8 || destCol < 0 || destCol >= 8)
            return false;

        int dRow = Math.abs(destRow - row);
        int dCol = Math.abs(destCol - col);

        boolean validMove = (dRow == 2 && dCol == 1) || (dRow == 1 && dCol == 2);

        return validMove;
    }

    public String getPosition() {
        return Board.board[row][col];
    }

    public void moveTo(int destRow, int destCol) {
        if (canMoveTo(destRow, destCol)) {
            this.row = destRow;
            this.col = destCol;
        } else {
            System.out.println("Illegal move for Knight!");
        }
    }
}
