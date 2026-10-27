package Tema_3;
import java.util.Scanner;
public class Task3_1_6 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		System.out.println("Dame algun valor numerico");
		double n = tec.nextDouble();
		if(n<0) {
			System.out.println("Pertenece al primer intervalo");
		}else if(n>=100){
			System.out.println("Pertenece al tercer intervalo");
		}else {
			System.out.println("Pertenece al segundo intervalo");
		}
	}
}
