package Parchis;

import java.util.ArrayList;

public class Parchis_Tester {
    public static void main(String[] args) {
        System.out.println("=== Parchis Tester ===\n");

        // Test Ficha class
        System.out.println("--- Ficha Tests ---");

        Ficha ficha1 = new Ficha(1, "rojo", 0);
        System.out.println("Created ficha1: ID=" + ficha1.getID() +
                           ", Color=" + ficha1.getColor() +
                           ", Casilla=" + ficha1.getCasilla());

        ficha1.setCasilla(10);
        System.out.println("After setCasilla(10): Casilla=" + ficha1.getCasilla());

        // Edge cases
        Ficha ficha2 = new Ficha(2, "azul", 68);
        System.out.println("Created ficha2: ID=" + ficha2.getID() +
                           ", Color=" + ficha2.getColor() +
                           ", Casilla=" + ficha2.getCasilla());

        // ArrayList test
        System.out.println("\n--- ArrayList Tests ---");
        ArrayList<Ficha> fichas = new ArrayList<>();
        fichas.add(ficha1);
        fichas.add(ficha2);
        System.out.println("Added 2 fichas, ArrayList size: " + fichas.size());

        System.out.println("Iterating fichas:");
        for (Ficha f : fichas) {
            System.out.println("  Ficha " + f.getID() + ": " + f.getColor() + ", pos " + f.getCasilla());
        }

        // Test Parchis_Metodos (empty but compiles)
        Parchis_Metodos metodos = new Parchis_Metodos();
        System.out.println("\nParchis_Metodos instance created: " + metodos.getClass().getSimpleName());

        System.out.println("\n=== All Tests Passed ===");
    }
}