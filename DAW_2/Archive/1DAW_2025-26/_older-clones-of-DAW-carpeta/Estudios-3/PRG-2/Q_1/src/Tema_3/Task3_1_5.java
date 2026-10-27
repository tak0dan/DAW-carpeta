package Tema_3;
import java.util.Scanner;
public class Task3_1_5 {
	public static void main(String[] args) {

		Scanner tec = new Scanner(System.in);
		System.out.println("Dame un valor numerico");
		int extra = tec.nextInt();
		if (extra < 0)
			System.out.println("small");
		else if (extra == 0)
			System.out.println("medium");
		else 
			System.out.println("large");
	}
}
