package AllayList_Apuntes;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;
public class PruebasArrayList {
	public static void main (String []args) {
		Scanner tec = new Scanner(System.in);
		Random r = new Random();
		//cómo crear arraylists
		ArrayList <Integer> l= new ArrayList<Integer>();
		ArrayList <Integer> lm= new ArrayList<Integer>();
		//añadir el elemento al array (de esta forma se va al final siempre)
		l.add(8);
		l.add(9);
		l.add(10);
		//añadir al inicio del array
		l.addFirst(6);
		//añadir a una posición concreta del array
		l.add(1,7);
		//devolver todo el array
		System.out.println(l);
		//devolver una posición concreta del array
		System.out.println("Tercera posición: "+l.get(2));
		//devolver el tamaño del array
		System.out.println("Tamaño del array: "+l.size());
		//Devolver la primera y la última posición del array
			//primera
			System.out.println("Primera posición: "+l.getFirst());
			//última
			System.out.println("Última posición: "+l.getLast());
			//ambas
			System.out.println("En la primera posición tienes "+l.getFirst()+ ", y en la última "+ l.getLast());
		//borrar un elemento del array
			l.remove(0);
			System.out.println(l);
			//printear los elementos uno por uno
			for(int i=0; i<l.size(); i++)

				System.out.print(l.get(i)+"*");
		for(int i=0; i<6; i++)
			lm.add(r.nextInt(1, 50));
		
		System.out.println("Dime un número");
		int n = tec.nextInt();
		
		if(lm.contains(n))
			System.out.println("Has acertado! Los números ganadores eran: "+ lm);
		else
			
			System.out.println("Has fallado... Los números ganadores eran: "+ lm);
		
		
		
		int v[] = new int[8];
		ArrayList<Integer> asd = new ArrayList<Integer>();
		asd.addAll(asd);
		System.out.println(asd);
		
	}

}