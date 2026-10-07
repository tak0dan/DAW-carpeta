package Tema_2;
import java.util.Scanner;
public class String_and_int {
		public static void main(String[] args){
			Scanner scanner = new Scanner(System.in);
			String algun_String;
		       System.out.println("Dame algun String.");
		       for(int i = 0;i<2;i++) {
		       algun_String= scanner.nextLine();
		       System.out.println("Dame algun int(numero).");
		       int algun_Int = scanner.nextInt();
		       	if(algun_Int<=algun_String.length()) {
				       System.out.println(algun_String.charAt(algun_Int));

		       	}else {
		       	System.out.println("De verdad pusiste un numero fuera de la longitud? Y para que?");
				}}
	}

}
