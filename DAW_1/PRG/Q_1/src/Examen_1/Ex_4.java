package Examen_1;
import java.util.Scanner;
public class Ex_4 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		System.out.println("Dame el infinitivo de cuanquier verbo.");
		String verbo = tec.nextLine();
		String terminacion = verbo.substring(verbo.length()-2,verbo.length()).toLowerCase();
		switch(terminacion) {
		case "ar":
			System.out.println("Tu verbo pertenece a la 1ª conjugación");
			break;
		case "er": 
			System.out.println("Tu verbo pertenece a 2ª conjugación");
			break;
		case "ir":
			System.out.println("Tu verbo pertenece a 3ª conjugación");
			break;
		default:
			System.out.println("Pues parece, que no en un verbo correcto.");
			break;

		}
	}
}
