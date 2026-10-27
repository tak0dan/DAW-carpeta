package Tema_3.Tareas3_4;

public class Tarea3_4_8 {
	public static void main(String[] ags) { 
		int start = 56;
		int finish = 20;
		int sum = 1;
		String in = "";
		for(int i = start; i>=finish; i=i-4) {
			in = in + i+" + ";
			sum = sum + i;
		}
		System.out.println(in.substring(0, in.length()-3) + " = " + sum);
	}
}