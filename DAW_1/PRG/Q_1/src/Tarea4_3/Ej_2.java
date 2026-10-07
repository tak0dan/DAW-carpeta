package Tarea4_3;
import java.util.Random;
public class Ej_2 {
	public static void main(String[] args) {
		Random r = new Random();
		int v[][] = new int[10][10]; 
		for(int i = 0; i<10; i++) {
			for(int j = 0; j<10;j++) {

				v[i][j]=r.nextInt(1,500);
				System.out.print(" ["+v[i][j]+"] \t");
			}
			System.out.println();


		}
		System.out.println("\n\n\n");
		for(int x = 0; x<10; x++) {
			for(int y = 0; y<10;y++) {
				if(y+x==v.length-1) {
					System.out.print(" ["+v[x][y]+"] \t");
				}else {
					System.out.print(" ["+""+"] \t");

				}
			}
			System.out.println(); 
		}
	}
}
