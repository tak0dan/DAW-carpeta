package Tema_3;
import java.util.Scanner;
public class Tarea3_3_13 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		int suma = 0;
		int a = 0;
		String eqw = "(";
		for(int i = 1; i<=10; i++) {
			System.out.println("Dame tu numero");
			a = tec.nextInt();
			eqw = eqw + (a + " + ");
			suma = suma + a;
		}
		eqw = eqw.substring(0,eqw.length()-3) + (")/10");
		System.out.println("The average of your ten numbers is: ");
		System.out.println(eqw + " = " + suma);
	}
}
