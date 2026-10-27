package Tema_3;
import java.util.Scanner;
public class Task3_1_18 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		
		double suma = 0;
		double numero;
		int i = -1;
		
		do {
			System.out.println("Dame el numero para sumar o 0 para terminar");
			numero = tec.nextDouble();
			suma = suma + numero;
			i++;
		}while(numero!=0);
		System.out.println("Tu resultado es " + suma);
		System.out.println("Durante el procso has metido "+i+" numeros.");
	}
}
