package Tarea3_5;
import java.util.Scanner;
public class Ej_1 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		System.out.println("Give me a positive number");
		int numero_usuario;
		boolean primo = true;
		int divisores = 0;
		do {
			System.out.println("Your number has to be positive.");
			numero_usuario = tec.nextInt();
		}while(!(numero_usuario>0));
		
		for(int i = 2; i<numero_usuario&&primo==true; i++) {
			if(numero_usuario%i==0) {
				System.out.println("Tu numero - "+numero_usuario+" no es primo.");
				primo = false;
			}
		}
		if(primo == true) {
			System.out.println("Tu numero es primo");
		}
	}
}
