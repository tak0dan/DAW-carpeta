package tema6;

public class Producto {

	private String Nombre;
	private double Precio;
	final double IVA = 21;
	
	public Producto() {
		super();
		this.Nombre = Nombre;
		this.Precio = Precio;
		
	}
	public String getNombre() {
		return Nombre;
	}
	public double getPrecio() {
		return Precio;
	}
	public void setNombre(String Nombre) {
		this.Nombre = Nombre;
	}
	public void setPrecio(double Precio) {
		
		if(Precio < 0) {
			Precio = 0;
		}
		this.Precio = Precio;
	}
	public double getPrecioFinal() {
		return this.Precio/100*(100+IVA);
	}
	
	@Override
	public String toString() {
		return "Producto [Nombre=" + Nombre + ", Precio=" + Precio + ", IVA=" + IVA + ", getNombre()=" + getNombre()
				+ ", getPrecio()=" + getPrecio() + ", getPrecioFinal()=" + getPrecioFinal() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
