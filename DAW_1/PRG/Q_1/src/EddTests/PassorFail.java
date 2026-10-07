package EddTests;

import java.util.Scanner;

public class PassorFail {

	public static void main(String[] args) {
		System.out.println("Dime la Nota:");
		Scanner sc = new Scanner(System.in);
		double score = sc.nextDouble();

		String grade = (score >= 5) ? "Pass" : "Fail";
		System.out.println(grade);

		sc.close();
	}

}
