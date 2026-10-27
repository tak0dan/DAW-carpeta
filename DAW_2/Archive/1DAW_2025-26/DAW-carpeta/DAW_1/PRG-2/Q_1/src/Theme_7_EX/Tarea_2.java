package Theme_7_EX;

import java.util.ArrayList;
import java.util.ListIterator;
import java.util.Scanner;

public class Tarea_2 {

	public static void main(String[] args) {
		
		Scanner tec = new Scanner(System.in);
		
		ArrayList<String> words = new ArrayList<>();
		
		
		
		for(int i = 0; i<10; i++) {
			System.out.println("Give me a word number "+(i+1));
			words.add(tec.nextLine());
		}
		
		ListIterator<String> li = words.listIterator(words.size());
		
		while(li.hasPrevious()) {
			System.out.print("  "+li.previous());
		}
	}
	
}
