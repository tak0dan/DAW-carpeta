package Tema_5;
import java.util.Scanner;
import java.util.Random;
public class Tarea4_1_Ej_8 {
	public static void main(String[] args) {
		Random r = new Random();
		Scanner tec = new Scanner(System.in);
		int cantidad_numeros = 0;

		while (cantidad_numeros <= 0) {
			System.out.println("Dime cuantos números quieres generar.");

			if (tec.hasNextInt()) {
				cantidad_numeros = tec.nextInt();
			} else {
				System.out.println("Introduce un número válido.");
				tec.next(); // discard garbage
			}
		}
		int holder = 0;
		int calc_length;
		int v[] = new int[cantidad_numeros];
		for(int i = 0; i<v.length; i++) {
			v[i] = r.nextInt(300);
		}
		if(v.length%2==0) {
			calc_length = v.length/2;
		}else {
			calc_length = ((v.length+1)/2)-1;
		}
		for(int i = 0; i<v.length; i++) {
			System.out.print(v[i] + " ");
		}
		for(int i = 0; i<calc_length;i++) {
			holder = v[i];
			v[i] = v[v.length-1-i];
			v[v.length-i-1] = holder;
		}
		System.out.println();
		for(int i = 0; i<v.length; i++) {
			System.out.print(v[i] + " ");
		}
	}
}
