package Tema_3;
import java.util.Scanner;
public class Task3_1_13 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Dame el valor de presion");
		double presion = tec.nextDouble();
		System.out.println("Dame el valor de la temperatura");
		double temperatura = tec.nextDouble();
		
		if(!(presion<=100 && temperatura<212)){
			while(true) {
				System.out.println("EMERGENCIA!!!");
			}
		}
	}
}
