package Tema_3;

public class Tarea3_3_10 {
	public static void main(String[] args) {
		int suma = 0;
		for(int i = 1; i<=100; i++) {
			if(i%2==0) {
				System.out.print( i + " + ");
			suma = suma + i;
			}
		}
		System.out.print("0 = " + suma);

	}
}
