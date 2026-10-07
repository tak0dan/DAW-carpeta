import java.util.ArrayList;
import java.util.Iterator;

public class Biblioteca {

    private ArrayList<Libro> libros;

    public Biblioteca() {
        this.libros = new ArrayList<>();
    }

    @Override
    public String toString() {
        return "Biblioteca [" + "libros=" + libros + "]";
    }

    public void añadirLibro(Libro l) {
        // TODO
    }

    public Libro buscarPorIsbn(String isbn) {
        return null;
    }

    public void eliminarLibroPorIsbn(String isbn) {
        // TODO
    }

    public static void main(String[] args) {
        Biblioteca obj = new Biblioteca();
        ArrayList<Libro> libros = new ArrayList<>();
        obj.añadirLibro(null);
        Libro result = obj.buscarPorIsbn("test");
        obj.eliminarLibroPorIsbn("test");
    }

}
