package Tema_3;
import java.util.Scanner;
public class Tarea3_3_17 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		int numero = 0;
		int ovr_cnt=0, btw_cnt = 0, under_cnt = 0;
		for(int i = 0; i<10; i++) {
			System.out.println("Give me your number");
			numero = tec.nextInt();

			if(numero<15) {
				under_cnt++;
			}else if(25<numero||numero<45){
				btw_cnt++;
			}else if(numero>50){
				ovr_cnt++;
			}
		}
		System.out.println("Numbers under 15 were " + under_cnt + ". Numbers in between 25 and 45 were " + btw_cnt + ". Numbers over 50 were " + ovr_cnt + ".");
	}
}
