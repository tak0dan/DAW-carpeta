package Tema_3;
import java.util.Scanner;
public class Task3_1_4 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Dime el valor de la x");
		double valor_x = scanner.nextDouble();
		if(valor_x ==2 || valor_x==-2) {
			System.out.println("La funcion no esta definida");
		}else {
			double funcion = (1/((valor_x*valor_x)-4));
			System.out.println("La funcion de x="+funcion);
		}
	}
}
