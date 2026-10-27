/*
    2. Haz un programa en Java que pida un texto (un String) y un int. 
    Después ha de mostrar el carácter que está en esa posición en el texto. 
    Pon una captura de pantalla de la ejecución del programa 
    en la que introduzcas una posición que exista en ese 
    texto y otra que no.
		EXTRA: validar con un if que esa posición existe 
		para evitar el error.
*/
package Tema_2;
import java.util.Scanner;
public class Tarea2_3_2 {
		public static void main(String[] args){
			Scanner scanner = new Scanner(System.in);
			String algun_String;
		       System.out.println("Dame algun String.");
		       algun_String= scanner.nextLine();
		       System.out.println(algun_String);

		       System.out.println("Dame algun int(numero).");
		       int algun_Int = scanner.nextInt();
		       	if(algun_Int<algun_String.length()) {
				       System.out.println(algun_String.charAt(algun_Int));

		       	}else {
		       	System.out.println("De verdad pusiste un numero fuera de la longitud? Y para que?");
				}}
	}


