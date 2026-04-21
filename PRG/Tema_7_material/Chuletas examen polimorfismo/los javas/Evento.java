package Prueba_Examen_B;

public class Evento extends Plan {
	protected String titulo;
	protected int Hora;
	public Evento(String titulo, int hora) {
		super();
		this.titulo = titulo;
		Hora = hora;
	}
	public String getTitulo() {
		return titulo;
	}
	public int getHora() {
		return Hora;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public void setHora(int hora) {
		Hora = hora;
	}
	
	@Override
	public String toString() {
		return "Evento [titulo=" + titulo + ", Hora=" + Hora + "]";
	}
	
	@Override
	public String obtenerResumen() {
		return "Evento:" + titulo + "a las " + Hora;
	}
	
	
	@Override
	public void ejecutar() {
		System.out.println("Asistiendo al evento: " + titulo);
	}
	
	
	
}
