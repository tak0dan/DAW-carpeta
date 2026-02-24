package Tema_2;
import java.util.Scanner;
public class Tarea2_3_5 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Introduzca primera palabra para el analisis");
		String texto1 = scanner.nextLine();
		System.out.println("Introduzca segunda palabra para el analisis");
		String texto2 = scanner.nextLine();

		boolean strings_equals = texto1.equalsIgnoreCase(texto2);

		if(strings_equals == true) {
			System.out.println("Las strings son iguales");
		}else{
			System.out.println("No se. No parecen ser iguales...");

		}
	}
}
	
