package tema6;

public class City {
	private String nombre;
	private long poblacion;
	private int provincia;
	
	public City(String nombre, long poblacion, int provincia) {
		
		this.nombre = nombre;
		this.poblacion = poblacion;
		this.provincia = provincia;
		
	}
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public long getPoblacion() {
		return poblacion;
	}
	public void setPoblacion(long poblacion) {
		this.poblacion = poblacion;
	}
	public int getProvincia() {
		return provincia;
	}
	public void setProvincia(int provincia) {
		this.provincia = provincia;
	}
	
	
	
	
	
}
