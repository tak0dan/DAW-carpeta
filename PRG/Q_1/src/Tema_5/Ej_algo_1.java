package Tema_5;
import java.util.Random;
import java.util.Scanner;
public class Ej_algo_1 {
	public static void main(String[] args) {
		Random r = new Random();
		Scanner tec = new Scanner(System.in);
		
		int [] v = new int[5];
		
		for(int i = 0; i<v.length; i++) {
			v[i]=r.nextInt(-10,11);
		}
		
		for(int i = 0; i<v.length; i++) {
			System.out.print(v[i]);
		}
		
	}
}
