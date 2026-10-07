package Tema_3.Tareas3_4;
import java.util.Scanner;
public class Tarea3_4_5 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		System.out.println("Give me a number");
		int numero = tec.nextInt();
		String a = "";
		for(int n = 1; n<=numero; n++) {
			if(numero%n==0) {
				a = a+""+n+", ";
			}
		}
		System.out.println("The dividers of "+numero+"are: "+a.substring(0, a.length()-2));

	}
}
