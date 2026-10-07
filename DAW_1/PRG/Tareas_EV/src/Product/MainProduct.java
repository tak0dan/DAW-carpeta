package Product;

public class MainProduct {
    public static void main(String[] args) {
        Product p = new Product();
        p.setName("Mesa");
        try {
            p.setStock(10);
            p.setStock(2);
        } catch (LowStockException e) {
            System.out.println(e.getMessage());
        }
    }
}