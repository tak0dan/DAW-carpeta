package Examen_1;
import java.util.Scanner;
public class Ex_3 {
	public static void main(String[] args) {
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Dime cuantos litros de agua consumes al dia.");
		double litros = tec.nextDouble();
		System.out.println("Bueno, y que temperatura ambiental tienes?(°C)");
		double temperatura = tec.nextDouble();
		if(litros<1||temperatura>40) {
			System.out.println("No se, como has podido sobrevivir hasta aqui, pero estas en el riesgo alto de deshidratacion.");
		}else if(litros>=2&&temperatura<30) {
			System.out.println("Estas en el riesgo bajo de la deshidratacion.");
		}else if(litros<=2&&litros>=1.5||temperatura<=35&&temperatura>=30) {
			System.out.println("Estas en el riesgo moderado de la deshidratacion.");
		}else if((litros<=1.5&&litros>=1)&&(temperatura>35)) {
			System.out.println("Estas en el riesgo alto de la deshidratacion.");
		}
		
	}
}
