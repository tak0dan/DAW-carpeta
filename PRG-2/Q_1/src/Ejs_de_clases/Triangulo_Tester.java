package Ejs_de_clases;

import java.nio.channels.NonReadableChannelException;

public class Triangulo_Tester {
	
	public static void main(String[] args) {
		Punto v1 = new Punto(1, 3);
		Punto v2 = new Punto(6, 3);
		Punto v3 = new Punto(1, 6);
		
		Triangulo a = new Triangulo(v1, v2, v3);
		System.out.println(a.calcTipo());
		System.out.println(a);
	}
	
}
