package Tema_2;

import java.util.Scanner;

public class Divisionrealentera {
	public static void main(String[] args) {
		
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Dame el numero 1");
		double num1 = tec.nextDouble();
		System.out.println("Dame el numero 2");
		double num2 = tec.nextDouble();
		
		System.out.println("La multiplicacion de tus dos numeros es " + (num1*num2));
		System.out.println("La suma de tus dos numeros es " + (num1+num2));
		System.out.println("La resta de tus dos numeros es " + (num1-num2));
		System.out.println("La division entera de tus dos numeros es " + ((int)num1/(int)num2));
		System.out.println("La division real de tus dos numeros es " + (num1/num2));

	}
}
