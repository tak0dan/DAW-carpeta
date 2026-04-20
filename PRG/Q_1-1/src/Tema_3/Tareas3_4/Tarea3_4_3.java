package Tema_3.Tareas3_4;
import java.util.Scanner;
public class Tarea3_4_3 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		double result = 1;
		String fract = "";
		double fractal = 1;
		double n;
		System.out.println("Give me your number");

		n = tec.nextInt();

		while(!(n>0)) {
			System.out.println("Give me a positive number");
			n = tec.nextInt();

			System.out.println();
		}
		
		for(int i = 0; i<n; i++) {
			fractal = (n-i);
			result = result*fractal;
			fract = fract+"("+n+" - "+i+") * ";
			System.out.println(result);
		}
		
		System.out.println("Factorial of "+n+" is "+n+"! = "+fract.substring(0,fract.length()-3)+" = "+result);
	}
}
