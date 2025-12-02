package Tema_5;
import java.util.Scanner;
import java.util.Random;
public class Tarea4_1_Ej_5 {
	public static void main(String[] args) {
		Random r = new Random();
		Scanner tec = new Scanner(System.in);
		boolean salir_del_bucle = false;
		int cantidad_numeros = 0;
		
		while(salir_del_bucle == false && cantidad_numeros==0) {
			System.out.println("Dime cuantos numeros quieres generar.");
			if(tec.hasNextInt()) {
				cantidad_numeros = tec.nextInt();
				salir_del_bucle = true;
			}
		}
		String aaa = "";
		int resta/*PORQ RESTAMOS?*/= 0;
		int v[] = new int[cantidad_numeros];
		for(int i = 0; i<cantidad_numeros;i++) {
			v[i] = r.nextInt(300);
			resta = resta-v[i];
			aaa = aaa + v[i]+" - ";
		}
		System.out.println("El resultado de esa calculacion tán rar es: " + aaa.substring(0, aaa.length()-3) + " = " + resta);
	}
}
