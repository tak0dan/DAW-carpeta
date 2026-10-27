package Tema_3;
import java.util.Scanner;
public class Ejemplos_pdf_1 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Dame la respuesta a la pregunta");
		String resp = scanner.nextLine().substring(0,1); 
		System.out.println("Dame un int");
		int some_number = scanner.nextInt(); scanner.nextLine();
		
		if (resp.equalsIgnoreCase("b")) {
			System.out.println("La respuesta es correcta");
		} else {
			System.out.println("La respuesta es incorrecta");
		}
		
		if((some_number%2)==0) {
			System.out.println("Numero es par");
		}else {
			System.out.println("Numero es impar");
		}
	}
}
