package Tarea6_3;
import java.util.Scanner;
import java.util.ArrayList;
public class Ej1 {

	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		ArrayList<Integer> v = new ArrayList();
		System.out.println("Cuantos numeros quieres revisar?");
		int cantidad = tec.nextInt();
		Integer mayor = 0;
		for(int i = 0; i<cantidad; i++) {
			System.out.println("Dame el numero #"+(i+1));
			v.add((Integer)tec.nextInt());
			
		}
		for(int i = 0; i<v.size(); i++) {
			
			if(v.get(i) > mayor) {
				mayor = v.get(i);
			}
		}
		System.out.println("El numero mayor es "+mayor);

	}
	
}
