package Tarea3_5;
import java.util.Scanner;
public class Ej_2 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		int denominador=0;
		int numerador = 0;
		int divisor = 0;
		while(numerador==0) {
			System.out.println("Dame el numerador");
			numerador=tec.nextInt();
		}
		while(denominador==0) {
			System.out.println("Dame el numerador");
			denominador=tec.nextInt();
		}
		System.out.print("Dividion simplificada de " + numerador + "/" + denominador);

		for(int i=Math.min(numerador, denominador);i>=2;i--) {
			while(denominador%i==0&&numerador%i==0) {
				numerador=numerador/i;
				denominador=denominador/i;
			}
		}

		System.out.println(" es " +numerador+"/"+denominador);

	}
}
