package Tema_2;
import java.util.Scanner;
public class Nombre_tres_letras {
		public static void main(String[] args){
			Scanner scanner = new Scanner(System.in);
				int i;
				for (i=0; i<2;i++) {
		       System.out.println("Dame algun nombre.");
		       String fraze = scanner.nextLine();
		       System.out.println(fraze.substring(0,3));
				}
	}
}

