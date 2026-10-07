package Calculadora;


public class WrongOperator extends Exception {
    public WrongOperator() {
        super("Eso no es un operador valido");
    }
    public WrongOperator(String mensaje) {
        super(mensaje);
    }
}