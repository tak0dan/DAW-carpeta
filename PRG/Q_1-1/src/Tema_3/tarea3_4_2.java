package Tema_3;
import java.util.Scanner;
public class tarea3_4_2 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		
		int suma = 0;

		String conct = "";
		int NMR = 0;
		boolean n = false;
		while (!n) {
			System.out.println("Give me a number for a multiplication table. ");
			if (tec.hasNextInt()) {
				NMR = tec.nextInt();
				n = true;
			}else {
				System.out.println("It's not a damn number!!!");
					tec.next();

				}
			}
		
		
		for(int i = 0; i<10; i++) {
			conct = conct + (NMR*i)+ " + ";
			suma = suma + (NMR*i);
			System.out.println(NMR + " * " + i + " = " + (NMR*i));
		}
		System.out.println(conct.substring(0, conct.length()-3)+" = "+ suma);
	}
}
