package Tema_2;
import java.util.Scanner;
public class Ej6 {

public static void main(String[] args) {
	Scanner scanner = new Scanner(System.in);
	
	System.out.println("Introduzca el precío del producto(€)");
	double precio = scanner.nextDouble();
	int descuento;
	System.out.println("Introduzca el descuento (%)");
	do {
	descuento = scanner.nextInt();
	}while (descuento<0||descuento>=100);
	double precio_con_descuento = (precio*(1.0-(descuento/100.0)));
	System.out.printf("El precio de producto con descuento es: %.2f€%n",precio_con_descuento);
	}
}
