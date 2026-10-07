package Tema_3;
import java.util.Scanner;
public class Task3_1_2 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Tell me your score");
		int score = scanner.nextInt();
		if(score>100) {
			System.out.println("High");
		}else {
			System.out.println("Low");
		}
	}
}