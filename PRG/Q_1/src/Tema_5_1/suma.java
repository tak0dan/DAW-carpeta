package Tema_5_1;

public class suma {
	public static int Suma(int n) {
		if(n == 0) {//CB
			return 0;
		} 
		else {
			return n+Suma(n-1);
		}
	}
	public static void main(String[] args) {
		System.out.println(Suma(1));
	}
}
