package Tema_3;
import java.util.Scanner;
public class Task3_1_1 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Escribe un operador");
		char operador = scanner.nextLine().charAt(1);
		if(operador=='*' || operador=='/' || operador=='+' || operador=='-') {
			System.out.println("Operador es valido");
		}else{
			System.out.println("Operador no es valido");
		}
	}
}
