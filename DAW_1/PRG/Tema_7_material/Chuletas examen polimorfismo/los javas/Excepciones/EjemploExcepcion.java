package ProbandoExcepciones;

import java.util.InputMismatchException;

public class EjemploExcepcion  {

	 public static void verificarEdad(int edad) throws MiExcepcion  {
	        if (edad < 15 || edad > 50) {
	            throw new MiExcepcion();
	        } else {
	            System.out.println("Acceso permitido");
	        }
	    }

	    public static void main(String[] args) {

	        try {
	            verificarEdad(12);
	        } catch (MiExcepcion e) {
	            System.out.println("Error: " + e.getMessage());
	        }

	    }
	}
