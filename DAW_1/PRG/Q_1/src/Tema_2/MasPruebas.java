package Tema_2;
import java.util.Scanner;
public class MasPruebas {
		public static void main(String[] args){
			Scanner scanner = new Scanner(System.in);
			
			System.out.println("Dime tu nombre");
			String nombre = scanner.nextLine();
			
			String saludo = ("Hola "+nombre +"!");
			System.out.println("Tu nombre es " + nombre + "\n" + saludo);
			System.out.println("La longtitud te tu nombre es " + nombre.length());
			System.out.println("La longtitud de saludo es " + saludo.length());
	}
}

