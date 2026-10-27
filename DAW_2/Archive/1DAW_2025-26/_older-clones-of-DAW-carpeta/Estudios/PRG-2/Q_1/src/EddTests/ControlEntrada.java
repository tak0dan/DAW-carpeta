
package EddTests;

import java.time.LocalDate;
import java.util.Scanner;
import java.time.Period;
import java.util.Scanner;

public class ControlEntrada {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		boolean tieneEntrada;
		System.out.print("Introduce tu edad: ");
		int edad = sc.nextInt();

		System.out.print("Introduce tu altura en cm: ");
		int altura = sc.nextInt();

		System.out.print("¿Tienes entrada? (true/false): ");
		tieneEntrada = sc.nextBoolean();
		
		if (tieneEntrada = true) {
			if (edad > 12 || altura >= 140) {
				System.out.println("✅ Puedes subir a la atracción. ¡Diviértete!");
			} else {
				System.out.println("❌ Lo siento, no cumples los requisitos para subir.");
			}
		} else {
			System.out.println("❌ Lo siento, no puedes entrar sin entrada.");
		}

		sc.close();
	}
}
