public abstract class Plan {
    private String nombre;
    private int duracion;

    public Plan(String nombre, int duracion) {
        this.nombre = nombre;
        this.duracion = duracion;
    }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public int getDuracion() { return duracion; }
    public void setDuracion(int duracion) { this.duracion = duracion; }

    public abstract String obtenerResumen();
    public abstract void ejecutar();

    @Override
    public String toString() {
        return obtenerResumen();
    }
}
