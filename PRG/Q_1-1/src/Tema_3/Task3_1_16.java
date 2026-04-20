package Tema_3;
import java.util.Scanner;
public class Task3_1_16 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		double value_1;
		double value_2;
		char operando;
		System.out.println("Dame el primer valor");
		value_1 = tec.nextDouble();tec.nextLine();
		
		do {
		System.out.println("Dame el operador");
		
		operando = tec.nextLine().charAt(0);
		if(operando!='/' && operando!='*' && operando!='-' && operando!='+') {
			System.out.println("No es valor correcto. Las operaciones permitidas son:");
			System.out.println("Division (/)");
			System.out.println("Multiplicacion (*)");
			System.out.println("Resta (-)");
			System.out.println("Suma (+)");
		}
		}while(operando!='/' && operando!='*' && operando!='-' && operando!='+');
		
		System.out.println("Dame el segundo valor");
		value_2 = tec.nextDouble();
		
		double resultado = 0;
		
		switch(operando) {
		case '/': resultado = (value_1/value_2);
		break;
		case '+': resultado = (value_1+value_2);
		break;
		case '-': resultado = (value_1-value_2);
		break;
		case '*': resultado = (value_1*value_2);
		break;
		}
		System.out.println("Tu resultado es " + resultado);
	}
}
