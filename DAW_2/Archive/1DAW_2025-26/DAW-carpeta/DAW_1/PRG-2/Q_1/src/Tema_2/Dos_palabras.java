package Tema_2;
import java.util.Scanner;
public class Dos_palabras {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Introduzca tu palabra para el analisis");
		String texto = scanner.nextLine();
		System.out.println("Introduzca la segunda palabra para el analisis");
		String texto1 = scanner.nextLine();

			int iguales = texto.compareToIgnoreCase(texto1);
			if(iguales == 0) {
			System.out.println("Si, son iguales");
			}else {
				System.out.println("No son iguales");
			}
	}
}
