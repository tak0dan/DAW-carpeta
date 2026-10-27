public class Tarea extends Plan {
    private String descripcion;
    private boolean completada;

    public Tarea(String descripcion, int duracion) {
        super(descripcion, duracion);
        this.descripcion = descripcion;
        this.completada = false;
    }

    public void completar() {
        this.completada = true;
    }

    public boolean isCompletada() {
        return completada;
    }

    @Override
    public String obtenerResumen() {
        if (completada)
            return "Tarea: " + descripcion + " - Realizada";
        else
            return "Tarea: " + descripcion + " - Pendiente de realizar";
    }

    @Override
    public void ejecutar() {
        completar();
        System.out.println("Realizando tarea: " + descripcion);
    }
}
