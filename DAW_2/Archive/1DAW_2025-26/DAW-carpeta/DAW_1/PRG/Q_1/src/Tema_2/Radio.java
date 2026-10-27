package Tema_2;

import java.util.Scanner;

import java.util.Scanner;

public class Radio {
	public static void main(String[] args) {
		
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Dime el radio(cm)");
		
		double r = tec.nextDouble(); tec.nextLine();
		
		double l = (Math.PI*r*2);
		double a = (Math.PI*r*r);
		
		System.out.println("El area de un circulo de radio r=" + r + " (cm) es " + a + " (cm²)");
		System.out.println("La longtitud de circumferencia de radio r=" + r + " (cm) es " + l + " (cm²)");
		
	}
}
