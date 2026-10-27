package examen.generado;


public class Producto {

    private String nombre;
    private double precio;
    private double precioFinal;

    public Producto() {
        this.nombre = null;
        this.precio = 0.0;
        this.precioFinal = 0.0;
    }

    @Override
    public String toString() {
        return "Producto [" + "nombre=" + nombre + ", " + "precio=" + precio + ", " + "precioFinal=" + precioFinal + "]";
    }

    public String getNombre() {
        return null;
    }

    public double getPrecio() {
        return 0.0;
    }

    public void setNombre(String Nombre) {
        // TODO
    }

    public void setPrecio(double Precio) {
        // TODO
    }

    public double getPrecioFinal() {
        return 0.0;
    }

}
