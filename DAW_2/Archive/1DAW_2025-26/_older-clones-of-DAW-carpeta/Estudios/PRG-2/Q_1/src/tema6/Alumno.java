package tema6;

public class Alumno {
	private String NIA;
	private String nombre;
	private int edad;
	private int[] notas;
	
	public Alumno(String nIA, String nombre, int edad) {
		super();
		NIA = nIA;
		this.nombre = nombre;
		this.edad = edad;
	
	};
	private double getMedia() {
		int j=0;
		for (int i = 0; i < notas.length; i++) {
			j = j+notas[i];
		}
		
	return (double) j / notas.length;
	}
}