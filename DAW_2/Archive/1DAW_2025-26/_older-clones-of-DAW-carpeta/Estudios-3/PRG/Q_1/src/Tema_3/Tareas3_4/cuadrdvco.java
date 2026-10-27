package Tema_3.Tareas3_4;

import java.util.Scanner;

public class cuadrdvco {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        int FIN = tec.nextInt();

        for (int i = 0; i < FIN; i++) {
            for (int j = 0; j < FIN; j++) {
                int minDistance;
                if (i < j) {
                    if (i < FIN - 1 - i && i < FIN - 1 - j) {
                        minDistance = i;
                    } else if (FIN - 1 - i < FIN - 1 - j) {
                        minDistance = FIN - 1 - i;
                    } else {
                        minDistance = FIN - 1 - j;
                    }
                } else {
                    if (j < FIN - 1 - i && j < FIN - 1 - j) {
                        minDistance = j;
                    } else if (FIN - 1 - i < FIN - 1 - j) {
                        minDistance = FIN - 1 - i;
                    } else {
                        minDistance = FIN - 1 - j;
                    }
                }

                if (minDistance % 2 == 0) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }

        tec.close();
    }
}
