package examen.generado;


public class Libro {

    private String titulo;
    private String autor;
    private int numero_Paginas;

    public Libro() {
        this.titulo = null;
        this.autor = null;
        this.numero_Paginas = 0;
    }

    @Override
    public String toString() {
        return "Libro [" + "titulo=" + titulo + ", " + "autor=" + autor + ", " + "numero_Paginas=" + numero_Paginas + "]";
    }

    public void setTitulo() {
        // TODO
    }

    public void setAutor() {
        // TODO
    }

    public String getTitulo() {
        return null;
    }

    public String getAutor() {
        return null;
    }

    public void setNumero_Paginas() {
        // TODO
    }

    public int getNumero_Paginas() {
        return 0;
    }

}
