package Chess;

public class ChessGame {
    public static void main(String[] args) {
        Board.setupStandardBoard();
        // No print here, genius—let the loop handle it

        Player white = new Player("Magnus Carlsen wannabe", "White");
        Player black = new Player("Stockfish's drunk cousin", "Black");

        boolean whitesTurn = true;
        while (true) {
            Board.printBoard();
            System.out.println((whitesTurn ? white : black).name + "'s turn (" + (whitesTurn ? "White" : "Black") + ")");
            
            if (whitesTurn) white.turn();
            else black.turn();
            
            whitesTurn = !whitesTurn;
        }
    }
}