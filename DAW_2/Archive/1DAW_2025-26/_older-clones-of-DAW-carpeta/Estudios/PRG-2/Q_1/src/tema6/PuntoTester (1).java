package tema6;

import java.util.Scanner;
import java.util.Random;

public class PuntoTester {
	public static void main(String[] args) {
	
	Scanner tec = new Scanner(System.in);
	Random r = new Random();
	Punto p = new Punto();
	System.out.println(p);
	int elems = 0;

	do {
	    System.out.println("Cuantos elementos quieres testear?");

	    if (tec.hasNextDouble()) {
	        elems = (int)tec.nextDouble();

	        if (elems <= 0) {
	            System.out.println("El número debe ser mayor que 0.");
	            elems = 0; // force retry
	        }

	    } else {
	        System.out.println("Entrada inválida. Introduce un número entero.");
	        tec.next(); // discard invalid input
	    }

	} while (elems == 0);

	
	

	if(elems<0) {
		elems = -elems;
	}
	Punto arr[] = new Punto[elems];
	System.out.println(arr);
	
	for(int i = 0; i<arr.length; i++) {
		arr[i] = new Punto();
		arr[i].setX(r.nextDouble(-50,50));
		arr[i].setY(r.nextDouble(-50,50));
		System.out.println("["+arr[i]+"] ");
		System.out.println("X=("+arr[i].getX()+"), \nY=("+arr[i].getY()+")");
	}
	
	
	
	p.setX(6.5);
	System.out.println(p);

	p.setY(-4.7);
	System.out.println(p);
	
	
	
	}
}
