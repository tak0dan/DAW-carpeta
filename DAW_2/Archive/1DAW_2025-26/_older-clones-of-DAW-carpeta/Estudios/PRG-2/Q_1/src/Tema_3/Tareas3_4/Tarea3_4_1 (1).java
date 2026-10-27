package Tema_3.Tareas3_4;
import java.util.Scanner;
public class Tarea3_4_1 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		System.out.println("Give me a number");
		int number = tec.nextInt();
		int suma = 0;
		String multipl = "";
		for(int i = 1; i<=10; i++) {
			System.out.println(number+" X " + i + " = " + number*i);
			multipl = multipl + (number*i + " + ");
			suma = suma + (number*i);
		}
		System.out.println("The result of sum of all the multiplications is: \n" + multipl.substring(0,multipl.length()-3) + " = " + suma);
	}
}
