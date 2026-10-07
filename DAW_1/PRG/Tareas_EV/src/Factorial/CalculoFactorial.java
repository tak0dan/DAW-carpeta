package Factorial;


import java.util.Scanner;

public class CalculoFactorial {
    public static int factorial(int n) throws NegativeNumberException {
        if (n < 0) {
            throw new NegativeNumberException("El numero es negativo");
        }
        int resultado = 1;
        for (int i = n; i > 0; i--) {
            resultado = resultado * i;
        }
        return resultado;
    }

    public static void main(String[] args) {
    	Scanner teclado = new Scanner(System.in);
        try {
            System.out.print("Introduce un numero: ");
            int num = teclado.nextInt();
            System.out.println("Resultado: " + factorial(num));
        } catch (NegativeNumberException e) {
            System.out.println(e.getMessage());
        }
    }
}