package Tema_3;
import java.util.Scanner;
public class Task3_1_10 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int var_int1 = scanner.nextInt();
		int var_int2 = scanner.nextInt();scanner.nextLine();
		String var_string1 = scanner.nextLine();
		String var_string2 = scanner.nextLine();
		
		//Los ints iguales:
		if(var_int1==var_int2) {
			System.out.println("Si, son iguales");
		}else {
			System.out.println("No, no son iguales");
		}
		
		
		
		//Los Strings iguales
		if(var_string1.equals(var_string2)) {
			System.out.println("Si, los strings son iguales");
		}else {
			System.out.println("No, los strings no son iguales");
		}
	}
}
