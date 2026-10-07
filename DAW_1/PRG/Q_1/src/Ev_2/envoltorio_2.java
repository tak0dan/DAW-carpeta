package Ev_2;
import java.util.ArrayList;
public class envoltorio_2 {
		
		public static void main (String args []) {
		ArrayList <String> c1= new ArrayList<String>();
		
		c1.add("ROJO");
		c1.add("VERDE");
		c1.add("AZUL");
		
		ArrayList <String> c2= new ArrayList<String>();
		
		c2.add("AMARILLO");
		c2.add("ROSA");
		c2.add("MORADO");
		c2.add("NEGRO");
		
		ArrayList <String> c3= new ArrayList<String>();
		
		c3.addAll(c1);
		c3.addAll(c2);
		
		System.out.println(c3);
		}
	}