package Tema_3;
import java.util.Scanner;

public class Task3_1_12 {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);

        System.out.println("Dame el resultado del examen");
        int examen = tec.nextInt();

        System.out.println("Dame el numero de las programas hechas");
        int programasHechas = tec.nextInt();

        tec.nextLine();

        boolean asistencia = false; 

        while (true) {
            System.out.println("Fue presente? (Y/n)");
            String input = tec.nextLine().substring(0,1); 
            System.out.println(input);

            if (input.isEmpty() || input.equalsIgnoreCase("Y")) {
                asistencia = true; 
                break;
            } else if (input.equalsIgnoreCase("N")) {
                asistencia = false;
                break;
            } else {
                System.out.println("Por favor ingresa 'Y' o 'n'."); 
            }
        }

        if (examen >= 70 && programasHechas > 8 && asistencia) {
            System.out.println("Aprobado");
        } else {
            System.out.println("Suspendido");
        }

        tec.close();
    }
}
