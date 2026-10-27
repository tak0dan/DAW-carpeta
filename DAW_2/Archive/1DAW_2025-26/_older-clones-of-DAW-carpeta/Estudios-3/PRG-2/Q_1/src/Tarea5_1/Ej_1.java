package Tarea5_1;
import java.util.Scanner;
import java.util.Random;
public class Ej_1 {
	
	public static boolean esPar(int x) {
		if(x%2==0) {
		return true;
		}
		else{return false;
		
		}
	}
	public static boolean esPrimo(int x) {
		for(int i = 2; i<x; i++) {
			if(x%i==0) {
				return false;
			}
			break;
		}
		return true;
	}
	
public static void main(String[] args) {
	Scanner tec = new Scanner(System.in);
	Random r = new Random();
	System.out.println("Give me an option of the filling:");
	System.out.println("1) Manually");
	System.out.println("2) Randomly");
	int decision = tec.nextInt();
	int x = 0;
	int mayor_counter = 0;
	int primoCount = 0;
	int parCount = 0;
	
	
	if(decision == 1) {
		for(int i = 0; i<10; i++) {
			System.out.println("Give me your number");
			x = tec.nextInt();
			if(esPar(x)) {
				parCount++;
			}
			if(esPrimo(x)) {
				primoCount++;
			}
			
			if(x>mayor_counter) {
				mayor_counter = x;
			}
		}
	
	
	}else if(decision == 2) {
		
		
		for(int i = 0; i<10; i++) {
			x = r.nextInt(1, 1000000000);
			System.out.println(x);
			if(esPar(x)) {
				parCount++;
			}
			if(esPrimo(x)) {
				primoCount++;
			}
			
			if(x>mayor_counter) {
				mayor_counter = x;
			}
		}
	}
System.out.println("Entre todos los 10 numeros hay "+primoCount+" numeros primos, "+parCount+" numeros pares y el numero mayor de todos es " + mayor_counter);

}	
}