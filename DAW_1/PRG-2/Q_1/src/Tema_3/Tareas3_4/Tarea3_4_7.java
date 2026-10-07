package Tema_3.Tareas3_4;

public class Tarea3_4_7 {
	public static void main(String[] ags) { 
		int start = 5;
		int finish = 30;
		int mult = 1;
		String in = "";
		for(int i = start; i<=finish; i=i+5) {
			in = in + i+" * ";
			mult = mult * i;
		}
		System.out.println(in.substring(0, in.length()-3) + " = " + mult);
	}
}