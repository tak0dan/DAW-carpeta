package Tema_3;
import java.util.Scanner;
public class Tarea3_3_20 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		double greatest = 0;
		double number = 0;
		for(int i = 0; i<10; i++) {
			System.out.println("Give me some number");
			number = tec.nextDouble();
			if(number>greatest) {
				greatest = number;
			}
		}
		System.out.println("The greatest number is " + greatest);
	}
}
