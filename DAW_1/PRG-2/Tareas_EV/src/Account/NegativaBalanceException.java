package Account;

public class NegativaBalanceException extends Exception {
    public NegativaBalanceException() {
        super("Eso no es un operador valido");
    }
    public NegativaBalanceException(String mensaje) {
        super(mensaje);
    }
}