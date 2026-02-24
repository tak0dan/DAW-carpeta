package Tema5_1;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        System.out.println("Exercise 1: Enter 10 numbers");
        Ej1Numeros e1 = new Ej1Numeros();
        e1.leer();
        System.out.println("Even numbers: " + e1.getPares());
        System.out.println("Prime numbers: " + e1.getPrimos());
        System.out.println("Largest number: " + e1.getMayor());

        System.out.println("\nExercise 2: Factorial");
        Ej2Factorial e2 = new Ej2Factorial(5);
        System.out.println(e2.factorial());

        System.out.println("\nExercise 3: Divisors");
        Ej3Divisores e3 = new Ej3Divisores(12);
        e3.mostrar();

        System.out.println("\nExercise 4: Greeting");
        Ej4Saludo.saluda("Pepe Sanchez", 'b');

        System.out.println("\nExercise 5: Vector sum");
        int[] a = {1, 2, 3};
        int[] b = {4, 5, 6};
        System.out.println(Arrays.toString(Ej5SumaVectores.sumar(a, b)));

        System.out.println("\nExercise 6: Scalar product");
        System.out.println(Arrays.toString(Ej6EscalarVector.producto(2, a)));

        System.out.println("\nExercise 7: Average");
        System.out.println(Ej7a11.media(1, 2, 3));

        System.out.println("\nExercise 8: Middle character");
        System.out.println(Ej7a11.caracterMedio("abcdef"));

        System.out.println("\nExercise 9: Vowel count");
        System.out.println(Ej7a11.contarVocales("murcielago"));

        System.out.println("\nExercise 10: Leap year");
        System.out.println(Ej7a11.esBisiesto(2024));

        System.out.println("\nExercise 11: Strong password");
        System.out.println(Ej7a11.passwordFuerte("abc1234567"));
    }
}
