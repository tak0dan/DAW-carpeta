package Product;

public class LowStockException extends Exception {
    public LowStockException() {
        super("El stock del producto es demasiado bajo.");
    }
    public LowStockException(String mensaje) {
        super(mensaje);
    }
}