package AllayList_Apuntes;

import java.util.ArrayList;
import java.util.Random;;

public class ArrayList_Ejs {
	public static void main(String[] args) {
		Random r = new Random();
		// #2
		char []v = new char [5];
		v[0] = 'a';
		v[1] = 'B';
		v[2] = '6';
		v[3] = 'j';
		v[4] = 'K';
		//2.1
		for(int i = 0; i<v.length; i++) {
			Character g = v[i];
			g = g.toUpperCase(g);
			System.out.println(g);
		}
		//2.2
		for(int i = 0; i<v.length; i++) {
			Character g = v[i];
			g = g.toLowerCase(g);
			System.out.println(g);
		}
		
		for(int i = 0; i<v.length; i++) {
			Character g = v[i];
			if(g.isAlphabetic(g)) {
			System.out.println(g+" is a letter.");
			}else if(g.isDigit(g)) {
				System.out.println(g+" is a digit.");
			}else {
				System.out.println("The fuck I know what's that?");
			}
		}
		
		//#3
		
		
		
	}
}
