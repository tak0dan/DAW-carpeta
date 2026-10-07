package Tema_3;
import java.util.Scanner;
public class Tarea3_3_3 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		int suma = 0;
		int fin = tec.nextInt();
		for(int i=1; i<=fin; i++) {
			System.out.print(i + " + ");
			suma = suma+i;
		}
		System.out.print(" = " + suma);
	}
}
