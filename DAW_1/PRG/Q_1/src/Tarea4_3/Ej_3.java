package Tarea4_3;
import java.util.Random;
public class Ej_3 {
	public static void main(String[] args) {
		Random r = new Random();
		int i;
		int j;
		int v[][] = new int[10][10]; 
		boolean h[][] = new boolean[10][10]; 

		for(i = 0; i<10; i++) {
			for(j = 0; j<10;j++) {

				v[i][j]=r.nextInt(1,500);
				System.out.print(" ["+v[i][j]+"] \t");
			}
			System.out.println();
		}
		System.out.println("\n\n\n");
		i=0;	
		j=0;
		
		for(i = 0; i<10; i++) {
			for(j = 0; j<10;j++) {

				if(r.nextInt(1,10)%2==0) {
					h[i][j] = true;
				}else {
					h[i][j] = false;
				}
				
				System.out.print(" ["+h[i][j]+"] \t");
			}
			System.out.println();

		}	
		System.out.println("\n\n\n");

		i=0;	
		j=0;
		for(i=0;i<10;i++) {
			for(j = 0; j<10;j++) {
				if(h[i][j]==true) {
					System.out.print(" ["+v[i][j]+"] \t");
				}else {
					System.out.print(" ["+""+"] \t");
				}
			}
			System.out.println();
		}
	}
}
