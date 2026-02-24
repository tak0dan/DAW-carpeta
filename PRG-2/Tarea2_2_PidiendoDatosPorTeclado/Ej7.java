package Tema_2;
import java.util.Scanner;
public class Ej7 {
	public static void main(String[] args) {
		Scanner importacion = new Scanner(System.in);
		
		final double con_IVA = 1.21;
		System.out.println("Introduzca el precio original(€)");
		double precio = importacion.nextDouble();
		//double precio_final = precio * con_IVA;
		System.out.printf("El precio con IVA aplicada es : %.2f€%n", (precio * con_IVA));
	}
}
