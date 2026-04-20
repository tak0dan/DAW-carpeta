package Tema_2;
import java.util.Scanner;
public class Tarea_2_3_1 {
		public static void main(String[] args){
			Scanner scanner = new Scanner(System.in);
				int i;
				for (i=0; i<2;i++) {
		       System.out.println("Dame alguna fraze.");
		       String fraze = scanner.nextLine();
		       System.out.println(fraze.indexOf("de"));
				}
	}
}

