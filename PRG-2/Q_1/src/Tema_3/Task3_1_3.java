package Tema_3;
import java.util.Scanner;
public class Task3_1_3 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Dame tu numero");
		int num = scanner.nextInt();
		if(num >=0) {
			System.out.println("Numero es positivo");
		}else {
			System.out.println("Numero es negativo");
		}
	}
}
