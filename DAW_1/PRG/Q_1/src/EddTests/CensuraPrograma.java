
package EddTests;


import java.util.Scanner;


public class CensuraPrograma {
	

	public static void fijarNivelSeguridad(int nivelActual, int nivelNuevo) {
		nivelActual = nivelNuevo;
		System.out.println("Cambiado nivel de Seguridad a " + nivelNuevo);
	}
	

	// Función que modifica directamente el mensaje (simulación paso por referencia)
	public static void censurarMensaje(StringBuilder texto, int nivel) {
		
		for (int i = 0; i < texto.length(); i++) {
			char c = texto.charAt(i);

			boolean censurar = false;

			// Nivel 1: solo vocales
			if (nivel >= 1 && "aeiouAEIOUáéíóúÁÉÍÓÚ".indexOf(c) != -1) {
				censurar = true;
			}

			// Nivel 2: vocales y números
			if (nivel >= 2 && Character.isDigit(c)) {
				censurar = true;
			}

			// Nivel 3: censura todo menos espacios
			if (nivel >= 3 && c != ' ') {
				censurar = true;
			}

			if (censurar) {
				texto.setCharAt(i, '*');
			}
		}
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("=== SISTEMA DE CENSURA DE MENSAJES ===");

		int nivelSeguridad = 1;

		// --- Entrada del mensaje ---
		StringBuilder mensaje = new StringBuilder();
		System.out.print("Introduce un mensaje confidencial: ");
		mensaje.append(sc.nextLine());

		// --- Selección del nivel de seguridad ---
		System.out.print("Elige nivel de seguridad (1-3): ");
		int nivelUsuario = sc.nextInt();
		fijarNivelSeguridad(nivelSeguridad, nivelUsuario);

		// --- Aplicamos la censura según el nivel ---
		censurarMensaje(mensaje, nivelSeguridad);

		System.out.println("\nMensaje tras aplicar la censura:");
		System.out.println(mensaje);

		sc.close();
	}

}
