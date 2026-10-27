package Prueba_Examen_B;

public abstract class Plan {
	protected int duracion;
	
	
	

	public abstract String obtenerResumen();
	public abstract void ejecutar();
	public int getDuracion() {
		return duracion;
	}
	public void setDuracion(int duracion) {
		this.duracion = duracion;
	}
	
	
	
	@Override
	public String toString() {
		return "Plan [duracion=" + duracion + "]";
	}
	
	

}
