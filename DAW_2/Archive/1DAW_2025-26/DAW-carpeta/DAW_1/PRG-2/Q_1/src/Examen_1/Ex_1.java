package Examen_1;
import java.util.Scanner;
public class Ex_1 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Dame el valor del primer lado de triangulo.");
		double lado_1 = tec.nextDouble();
		System.out.println("Dame el valor del segundo lado de triangulo.");
		double lado_2 = tec.nextDouble();
		System.out.println("Dame el valor del tercer lado de triangulo.");
		double lado_3 = tec.nextDouble();
		
		if(lado_1+lado_2<=lado_3||lado_1+lado_3<=lado_2||lado_3+lado_2<=lado_1) {
			System.out.println("No es un triangulo valido");
		}else if(lado_1==lado_2||lado_2==lado_3||lado_3==lado_1) {
			System.out.println("El triangulo es Isosceles");
		}else if(lado_1==lado_2&&lado_1==lado_3) {
			System.out.println("El triangulo es Equilatero");
		}else {
			System.out.println("El triangulo es Escaleno");
		}	
		tec.close();
	}
}
