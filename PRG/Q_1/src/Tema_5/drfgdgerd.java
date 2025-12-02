package Tema_5;
import java.util.Scanner;
public class drfgdgerd {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		int estudiantes = 0;
		boolean aceptado = false;
		int nota;
		int notas=0;
		do {
			System.out.println("Dime la cantidad de estudiantes en la clase");
			if (tec.hasNextInt()) {
			    int temp = tec.nextInt();
			    if (temp > 0) {
			        estudiantes = temp;
			        aceptado = true;
			    } else {
			        System.out.println("Debe ser mayor que 0");
			    }
			} else {
			    tec.next(); // consume invalid input
			}


		}while(!aceptado);
		aceptado = false;
		for(int i=0; i<estudiantes;i++) {
			do {
				System.out.println("Dime la nota de estudiante "+(i+1));
				if (tec.hasNextInt()) {
				    int notaTemp = tec.nextInt();
				    if (notaTemp >= 0 && notaTemp <= 10) {
				        nota = notaTemp;
				        aceptado = true;
				        notas += nota;
				    } else {
				        System.out.println("La nota debe estar entre 0 y 10");
				    }
				} else {
				    tec.next(); // consume invalid input
				}


			}while(!aceptado);	
		}
		
		System.out.println("La nota media entre los estudiantes es "+notas/estudiantes);
		
	}
}