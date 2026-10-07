public class Evento extends Plan {
    private String titulo;
    private int hora;

    public Evento(String titulo, int hora, int duracion) throws HoraIncorrectaException {
        super(titulo, duracion);
        if (hora < 0 || hora > 23) {
            throw new HoraIncorrectaException("Hora incorrecta: " + hora + ". Debe estar entre 0 y 23.");
        }
        this.titulo = titulo;
        this.hora = hora;
    }

    public String getTitulo() { return titulo; }
    public int getHora() { return hora; }

    public void setHora(int hora) throws HoraIncorrectaException {
        if (hora < 0 || hora > 23) {
            throw new HoraIncorrectaException("Hora incorrecta: " + hora + ". Debe estar entre 0 y 23.");
        }
        this.hora = hora;
    }

    @Override
    public String obtenerResumen() {
        return "Evento: " + titulo + " a las " + hora;
    }

    @Override
    public void ejecutar() {
        System.out.println("Asistiendo al evento: " + titulo + "...");
    }
}
