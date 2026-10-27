package Prueba_Examen_B;

public class Tarea extends Plan{
	protected String Descripcion;
	protected boolean Completada;
	public Tarea(String descripcion, boolean compleatada) {
		super();
		Descripcion = descripcion;
		Completada = compleatada;
	}
	public String getDescripcion() {
		return Descripcion;
	}
	public boolean isCompleatada() {
		return Completada;
	}
	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}
	public void setCompleatada(boolean compleatada) {
		Completada = compleatada;
	}
	
	@Override
	public String toString() {
		return "Tarea [Descripcion=" + Descripcion + ", Completada=" + Completada + "]";
	}
	
	 public void estaCompletada() {
	        this.Completada = true;
	    }
	
	 @Override
	 public String obtenerResumen() {
		if (Completada) {
			return "Tarea: " + Descripcion + "Realizada";
		}
		else {
			return "Tarea: " + Descripcion + "Pendiente de realizar";

		}
	 }
	 
	 
	 @Override
	 public void ejecutar() {
		 estaCompletada();
		 System.out.println("Realizando tarea" + Descripcion);
		 
	 }
	 
	 
	
}	
