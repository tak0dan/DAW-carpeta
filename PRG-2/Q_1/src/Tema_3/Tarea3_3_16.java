package Tema_3;
import java.util.Scanner;
public class Tarea3_3_16 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		double numero = 0;
		int count_even = 0;
		int count_uneven=0;
		String output_unevens = "";
		String output_evens = "";
		for(int i = 0; i<10; i++) {
			System.out.println("Give me your number");
			numero = tec.nextDouble();
			
			if(numero%2==0) {
				count_even++;
				output_evens = output_evens + (numero + ", ");
			}else {
				count_uneven++;
				output_unevens = output_unevens + (numero + ", ");
			}
		}
		System.out.println("From your numbers");
		System.out.println("There were " + count_uneven + " uneven numbers: " + output_unevens.substring(0,output_unevens.length()-2));
		System.out.println("There were " + count_even + " even numbers: " + output_evens.substring(0,output_evens.length()-2));

	}
}
