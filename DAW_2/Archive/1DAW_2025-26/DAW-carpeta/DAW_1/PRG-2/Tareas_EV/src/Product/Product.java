package Product;

public class Product {
    private String name;
    private int stock;
    public static final int STOCKLIMIT = 5;

    public Product() {}

    public void setStock(int stock) throws LowStockException {
        if (stock < STOCKLIMIT) {
            throw new LowStockException("Stock por debajo del limite permitido");
        }
        this.stock = stock;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return name + " tiene stock de " + stock;
    }
}