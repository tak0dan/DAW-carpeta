package Tema_2;
import java.util.Scanner;
public class Tarea2_3_7 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Dime tu correo");
		String tu_Correo = scanner.nextLine();
		
		int arroba = tu_Correo.indexOf("@");
		
		System.out.println("Tu usuario es " + (tu_Correo.substring(0, arroba)));
		System.out.println("Tu usuario es " + (tu_Correo.substring(arroba+1, tu_Correo.length())));

	}
}
