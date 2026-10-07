package Junit5_Tests;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import ejemplo.Calculadora;

class CalculadoraTest {

    @Test
    public void testEjecutarOperacionSuma() {
        Calculadora calculadora = new Calculadora();

        calculadora.operacion = "+";
        calculadora.valor1 = 5;
        calculadora.valor2 = 10;

        int resultado_actual = calculadora.ejecutarOperacion();
        int resultado_esperado = 5 + 10;

        assertEquals(resultado_esperado, resultado_actual, "Error en la suma!");
    }

    @Test
    public void testEjecutarOperacionResta() {
        Calculadora calculadora = new Calculadora();

        calculadora.operacion = "-";
        calculadora.valor1 = 5;
        calculadora.valor2 = 10;

        int resultado_actual = calculadora.ejecutarOperacion();
        int resultado_esperado = 5 - 10;

        assertEquals(resultado_esperado, resultado_actual, "Error en la resta!");
    }

    @Test
    public void testEjecutarOperacionMultiplicacion() {
        Calculadora calculadora = new Calculadora();

        calculadora.operacion = "*";
        calculadora.valor1 = 5;
        calculadora.valor2 = 10;

        int resultado_actual = calculadora.ejecutarOperacion();
        int resultado_esperado = 5 * 10;

        assertEquals(resultado_esperado, resultado_actual, "Error en la multiplicación!");
    }

    @Test
    public void testEjecutarOperacionDivision() {
        Calculadora calculadora = new Calculadora();

        calculadora.operacion = "/";
        calculadora.valor1 = 5;
        calculadora.valor2 = 10;

        int resultado_actual = calculadora.ejecutarOperacion();
        int resultado_esperado = 5 / 10;

        assertEquals(resultado_esperado, resultado_actual, "Error en la división!");
    }

    @Test
    public void testEjecutarOperacionDivisionZero() {
        assertThrows(ArithmeticException.class, () -> {
            Calculadora calculadora = new Calculadora();

            calculadora.operacion = "/";
            calculadora.valor1 = 5;
            calculadora.valor2 = 0;

            // This should throw before returning anything
            calculadora.ejecutarOperacion();
        });
    }
}