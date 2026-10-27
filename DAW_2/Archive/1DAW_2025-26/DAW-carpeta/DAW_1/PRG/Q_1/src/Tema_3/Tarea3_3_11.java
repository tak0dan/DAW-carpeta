package Tema_3;

public class Tarea3_3_11 {
	public static void main(String[] args) {
		int suma1 = 0;
		int suma2 = 0;
		String pares = "";
		String impares = "";
		for(int i = 1; i<=100; i++) {
			if(i%2==1) {
				pares = pares + ( i + " + ");
			suma1 = suma1 + i;
			}else {
				impares = impares + ( i + " + ");
				suma2 = suma2 + i;
			}
		}
		System.out.println(pares + "0 = " + suma1);
		System.out.println(impares + "0 = " + suma2);
	}
}
