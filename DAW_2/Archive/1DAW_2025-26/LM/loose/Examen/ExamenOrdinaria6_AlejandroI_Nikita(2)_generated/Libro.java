package examen;

public class Libro {

    private String titulo;
    private String autor;
    private String isbn;

    public Libro(String titulo, String autor, String isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }

    public String getTitulo() { return titulo; }


    public String getIsbn() { return isbn; }

    @Override
    public String toString() {
        return "Libro [" + titulo=" + titulo + ", autor=" + autor + ", isbn=" + isbn + "]";
    }

    public Método toString() {
        return null;
    }

}