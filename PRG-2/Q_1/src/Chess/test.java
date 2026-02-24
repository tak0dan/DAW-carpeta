package Chess;

public class test {
    public static void main(String[] args) {
        Knight whiteKnight = new Knight("white", 7, 1); 
        System.out.println("Knight starts at: " + whiteKnight.getPosition());

        int[][] moves = {
            {5, 2}, // c3
            {4, 4}, // e4
            {2, 3},  // d6
            {3, 5}  // d6

        };

        for (int[] move : moves) {
            System.out.print("Trying to move to " + Board.board[move[0]][move[1]] + " ... ");
            if (whiteKnight.canMoveTo(move[0], move[1])) {
                whiteKnight.moveTo(move[0], move[1]);
                System.out.println("Success! Now at " + whiteKnight.getPosition());
            } else {
                System.out.println("Invalid!");
            }
        }
    }
}
