package Tema_5;
import java.util.Random;
import java.util.Scanner;
public class pa_el_testo {
	public static void main(String[] args) {
		  Random r = new Random();
		  Scanner tec = new Scanner(System.in);
		  System.out.println("De cuantos numeros quieres el array?");
		  String salida="";
		  int resultado = 0;
		  int array_long = tec.nextInt();
		  int v[] = new int[array_long];
		  for(int i = 0; i<v.length; i++) {
			  v[i] = r.nextInt(10);
			  System.out.print(v[i]+" ");
			  salida = salida + v[i]+" - ";
			  resultado = resultado - v[i];
		  }
		  System.out.println();
		  System.out.println(salida.substring(0, salida.length()-3)+" = "+resultado);
		  }
}
