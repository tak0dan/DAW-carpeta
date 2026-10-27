package Account;

public class SameSourceTargetException extends Exception {
    public SameSourceTargetException() {
        super("Misma cuenta marcada");
    }
    public SameSourceTargetException(String mensaje) {
        super(mensaje);
    }
}
