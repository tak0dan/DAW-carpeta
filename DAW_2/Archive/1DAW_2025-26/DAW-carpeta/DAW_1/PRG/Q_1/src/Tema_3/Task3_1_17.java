package Tema_3;
import java.util.Scanner;

public class Task3_1_17 {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);

        System.out.println("Dame el número del mes (1-12):");
        int mes = tec.nextInt();

        tec.nextLine();

        boolean bisiesto = false;

        while (true) {
            System.out.println("Fue presente? (Y/n)");
            String input = tec.nextLine().substring(0,1);
            System.out.println(input);

            if (input.isEmpty() || input.equalsIgnoreCase("Y")) {
                bisiesto = true;
                break;
            } else if (input.equalsIgnoreCase("N")) {
                bisiesto = false;
                break;
            } else {
                System.out.println("Por favor ingresa 'Y' o 'n'.");
            }
        }

        int dias = 0;

        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dias = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dias = 30;
                break;
            case 2:
                if (bisiesto) {
                    dias = 29;
                } else {
                    dias = 28;
                }
                break;
            default:
                System.out.println("Número de mes inválido. Debe estar entre 1 y 12.");
                tec.close();
                return;
        }

        System.out.println("El mes " + mes + " tiene " + dias + " días.");

        tec.close();
    }
}
