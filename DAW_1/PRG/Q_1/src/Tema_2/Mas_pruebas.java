package Tema_2;

import java.util.Scanner;


public class Mas_pruebas {
	
	
	public static void main(String[] args) {
		
		Scanner tec = new Scanner(System.in);
		//System.out.println("Introduzca tu contraseña");

		//String nom1 = "nigga";
		//String nom2 = tec.nextLine();
		//if(nom1.equals(nom2)){
		//System.out.println("Me gusta tu contraseña");
		//}
		
		
		String resp;
		String aBuscar = tec.nextLine();
		System.out.println("Que palabra te ha salido al abrir el diccionario");
		do {
		resp = tec.nextLine();
		if(aBuscar.compareTo(resp) < 0) {
		    System.out.println("La palabra está antes");
		} else if(aBuscar.compareTo(resp) > 0) {
		    System.out.println("La palabra está después");
		} else {
		    System.out.println("¡Has encontrado la palabra!");
		}

		}while (aBuscar.compareTo(resp)!=0);
	}
}

