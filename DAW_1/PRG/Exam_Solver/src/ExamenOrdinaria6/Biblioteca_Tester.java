public class Biblioteca_Tester {

    public static void main(String[] args) {
        Biblioteca c = new Biblioteca();

        // Añadir elementos
        c.añadirLibro(new Libro("item1", "item1", "item1"));
        c.añadirLibro(new Libro("item2", "item2", "item2"));
        c.añadirLibro(new Libro("item3", "item3", "item3"));
        c.añadirLibro(new Libro("item4", "item4", "item4"));
        c.añadirLibro(new Libro("item5", "item5", "item5"));

        System.out.println(c);
        System.out.println("buscarPorIsbn = " + c.buscarPorIsbn("test"));
        c.eliminarLibroPorIsbn("test");
        System.out.println("After remove: " + c);

        System.out.println("Final: " + c);
    }
}
