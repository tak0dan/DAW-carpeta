package Tema_5;
import java.util.Scanner;
import java.util.Random;

public class Tarea4_1_Ej_9 {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        Random r = new Random();

        int cantidad_numeros = 0;

        while (cantidad_numeros <= 0) {
            System.out.println("Dime cuantos números quieres generar.");

            if (tec.hasNextInt()) {
                cantidad_numeros = tec.nextInt();
            } else {
                System.out.println("Introduce un número válido.");
                tec.next(); // discard garbage
            }
        }

        String[] names = {
                "Alice", "Bob", "Charlie", "Diana", "Ethan",
                "Fiona", "George", "Hannah", "Ian", "Julia",
                "Kevin", "Laura", "Michael", "Nina", "Oscar",
                "Paula", "Quentin", "Rachel", "Samuel", "Tina",
                "Umar", "Violet", "William", "Xenia", "Yusuf",
                "Zara", "Liam", "Noah", "Emma", "Olivia",
                "Ava", "Sophia", "Isabella", "Mia", "Amelia"
        };

        String[] v = new String[cantidad_numeros];

        for (int i = 0; i < v.length; i++) {

            String new_name;
            boolean exists;

            do {
                new_name = names[r.nextInt(names.length)];
                exists = false;

                for (int j = 0; j < i; j++) {
                    if (new_name.equals(v[j])) {
                        exists = true;
                        break;
                    }
                }
            } while (exists);

            v[i] = new_name;
            System.out.print(v[i] + " ");
        }
    }
}
