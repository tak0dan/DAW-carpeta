package Tarea3_5;
import java.util.Scanner;

public class Ej_4_mega_raro {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        int numero_1 = 0;
        int numero_2 = 1;
        int numero_3 = 1;

        String concat_general = "" + numero_1 + " , " + numero_2 + " , " + numero_3 + " , ";
        boolean numero_encontrado = false;
        boolean acabar_bucle = false;
        int i;

        System.out.println("Give me your number");
        double numero_para_encontrar = 0;
        boolean there_is_number_to_find = false;

        while (there_is_number_to_find == false) {
            if (tec.hasNextDouble()) {
                numero_para_encontrar = tec.nextDouble();
                numero_para_encontrar = (int) Math.sqrt(numero_para_encontrar * numero_para_encontrar);
                there_is_number_to_find = true;
            } else {
                System.out.println("That’s not a valid number.");
                System.out.println("Give me your number");
                tec.next(); 
            }
        }

        System.out.println("El numero introducido es " + numero_para_encontrar);

        if (numero_para_encontrar == 0) {
            System.out.println("Tu numero 0 está encontrado en la posición 1");
            System.out.println("La Sucesión de Fibonacci es 0");
            tec.close();
            return;
        } else if (numero_para_encontrar == 1) {
            System.out.println("Tu numero 1 está encontrado en las posiciones 2 y 3");
            System.out.println("La Sucesión de Fibonacci es 0 , 1 , 1");
            tec.close();
            return;
        }

        for (i = 0; acabar_bucle == false; i++) {
            numero_1 = numero_2;
            numero_2 = numero_3;
            numero_3 = numero_1 + numero_3;

            concat_general = concat_general + numero_3 + " , ";

            if (numero_para_encontrar <= numero_3) {
                acabar_bucle = true;
            }
            if (numero_para_encontrar == numero_3) {
                numero_encontrado = true;
            }
        }

        System.out.println("La Sucesión de Fibonacci es " + concat_general.substring(0, concat_general.length() - 3));

        if (numero_encontrado == true) {
            System.out.println("Tu numero " + numero_para_encontrar + " está encontrado en la posición " + (i + 3));
        } else {
            System.out.println("Tu numero no es parte de la sucesión de Fibonacci.");
        }

        tec.close();
    }
}
