package Examen_1;
import java.util.Scanner;
public class Ex_2 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);

		System.out.println("Elija una figura geometrica:");
		System.out.println("1. Circulo");
		System.out.println("2. Cuadrado");
		System.out.println("3. Rectangulo");
		System.out.println("4. Triangulo");

		int figura = tec.nextInt();
		switch(figura) {
		case 1: 
			System.out.println("Has elegido circulo.");
			System.out.println("Dame el valor del radio de el circulo");
			double radio = tec.nextDouble();
			System.out.println("La area de tu circulo es π × "+radio+"² = " +Math.PI*radio*radio);
			break;
		case 2: 
			System.out.println("Has elegido cuadrado.");
			System.out.println("Dame el valor del lado de el cuadrado");
			double lado = tec.nextDouble();
			System.out.println("La area de tu cuadrado es "+lado+"² = " +lado*lado);
			break;
		case 3: 
			System.out.println("Has elegido rectangulo.");
			System.out.println("Dame el valor de la base de el cuadrado");
			double base = tec.nextDouble();
			System.out.println("Dame el valor de la altura de el cuadrado");
			double altura = tec.nextDouble();
			System.out.println("La area de tu cuadrado es "+base+"*"+altura+" = "   +base*altura);
			break;
		case 4: 
			System.out.println("Has elegido triangulo.");
			System.out.println("Dame el valor de la base de el triangulo");
			base = tec.nextDouble();
			System.out.println("Dame el valor de la altura de el triangulo");
			altura = tec.nextDouble();
			System.out.println("La area de tu triangulo es "+base+"*"+altura+" = "   +base*altura);
			break;
		default:
			System.out.println("Opcion no valida.");
		}



	}
}
