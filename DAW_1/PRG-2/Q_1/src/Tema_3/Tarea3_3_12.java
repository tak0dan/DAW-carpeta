package Tema_3;

public class Tarea3_3_12 {
	public static void main(String[] args) {
		int suma = 0;
		long prod = 1;
		String sum_p = "";
		String prod_p = "";
		for(int i = 10; i<=20; i++) {
			if(i%2==0) {
				sum_p = sum_p + ( i + " + ");
				prod_p = prod_p + ( i + " * ");

			suma = suma + i;
			prod = prod * i;
			}
		}
		System.out.println(sum_p.substring(0,sum_p.length()-3)+ " = " + suma);
		System.out.println(prod_p.substring(0,prod_p.length()-3)+ " = " + prod);


	}
}
