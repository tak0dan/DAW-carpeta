package Tema_2;

import java.util.Scanner;

public class Notas_tres_evas {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Introduzca la nota de la primera evaluacion");
		int nota1 = tec.nextInt();

		System.out.println("Introduzca la nota de la segunda evaluacion");
		int nota2 = tec.nextInt();

		System.out.println("Introduzca la nota de la tercera evaluacion");

		int nota3 = tec.nextInt();
		
		int nota_media = (nota1 + nota2 + nota3)/3;
		
		System.out.println("La media de tus notas es " + nota_media);
	}
}
