package Tema_5;

public class array_small_ex {
    public static void main(String[] args) {
        
        final int FILS = 2, COLS = 3;

        int[][] m = {
            {2, 5, 6},
            {7, 2, 4}
        };

        int[][] mt = new int[COLS][FILS]; 
        for (int i = 0; i < FILS; i++) {
            for (int j = 0; j < COLS; j++) {
                mt[j][i] = m[i][j];
            }
        }

        for (int i = 0; i < COLS; i++) {
            for (int j = 0; j < FILS; j++) {
                System.out.print(mt[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
