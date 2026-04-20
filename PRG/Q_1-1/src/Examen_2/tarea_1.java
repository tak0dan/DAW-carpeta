package Examen_2;
import java.util.Scanner;
public class tarea_1 {

	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		int n = 0;
		boolean cr = false;
		System.out.println("Dime el numero de planeta.");
		while (cr == false) {
			if (tec.hasNextInt()) {
				n = tec.nextInt();

				if (n >= 1 && n <= 8) {
					cr = true;
				} else {
					System.out.println("Tiene que ser un numero entre 1 y 8");
				}
			} else {
				System.out.println("Eso no es un numero");
				tec.next(); // consume invalid input
			}
		}

		System.out.println(n);
		String[] planetas = new String[] {
				"Mercury",
				"Venus",
				"Earth",
				"Mars",
				"Jupiter",
				"Saturn",
				"Uranus",
				"Neptune"
		};


		System.out.println("Tu planeta es "+planetas[n]+".");
	}

}
