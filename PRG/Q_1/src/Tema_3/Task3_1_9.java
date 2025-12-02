package Tema_3;
import java.util.Scanner;
public class Task3_1_9 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		System.out.println("Dame primer numero");
		double n = tec.nextDouble();
		System.out.println("Dame segundo numero");
		double n1 = tec.nextDouble();
		
		if(n>n1) {
			System.out.println("Si, primer numero es mayor que segundo");
		}else {
			System.out.println("De verdad te parece que "+n+" es mas grnde que "+n1+"???");
		}
	}
}
