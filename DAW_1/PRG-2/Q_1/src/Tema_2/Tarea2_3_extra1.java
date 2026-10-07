package Tema_2;
import java.util.Scanner;
public class Tarea2_3_extra1 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Dame numero 1");
		int a = tec.nextInt();

		System.out.println("Dame numero 2");
		int b = tec.nextInt();

		System.out.println("Dame numero 3");
		int c = tec.nextInt();
			
		double discriminante = ((b*b)-4.0*a*c);
		if(discriminante >= 0) {
			double x1 = ((-(b) + discriminante)/2*a);
			double x2 = ((-(b) - discriminante)/2*a);
			System.out.println("X1 = " + x1 + "     X2 = " + x2);
		}else {
			System.out.println("No tiene soluciones reales.");
		}
		
	}
}
