package Tema_3;

public class Tarea3_3_9 {
	public static void main(String[] args) {
		int suma = 0;
		for(int i = 1; i<=100; i++) {
			if(i%2==1) {
				System.out.print( i + " + ");
			suma = suma + i;
			}
			System.out.print(" = ");
		}
	}
}
