package Tarea3_5;
import java.util.Scanner;
public class Ej_1_extra {
	public static void main(String[] args) {
		boolean primo = true;
		int divisores = 0;
		int numero_usuario;
		String numeros_primos = "Los numeros primos entre 1 y 100 son: ";
		int total_numeros_primos = 0;
		for(int j = 0; j<=100; j++) {
			primo = true;
		numero_usuario = j;
		for(int i = 2; i<numero_usuario; i++) {
			if(numero_usuario%i==0) {
				primo = false;
			}
		}
		if(primo == true) {
			total_numeros_primos++;
			numeros_primos = numeros_primos+( j + " - ");
		}
		}
		System.out.println("Entre 1 y 100 hay " + total_numeros_primos + " numeros.");
		System.out.println(numeros_primos.substring(0,numeros_primos.length()-3));
	}
}
