package Examen;

public class PlazaAparcamiento {

	private int numero;
	private boolean ocupada;
	private String matriculaVehiculo;
	
	
	public PlazaAparcamiento(int numero) {
		this.numero = numero;
		this.ocupada = false;
		
		
		
	}
	
	public PlazaAparcamiento(int numero, boolean ocupada, String matriculaVehiculo) {
		if(ocupada == false) {
			matriculaVehiculo = null;
		}
		this.numero = numero;
		this.ocupada = ocupada;
		this.matriculaVehiculo = matriculaVehiculo;

	
		
		
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getMatriculaVehiculo() {
		return matriculaVehiculo;
	}

	public void setMatriculaVehiculo(String matriculaVehiculo) {
		this.matriculaVehiculo = matriculaVehiculo;
	}

	
	public boolean estaOcupada(int numero) {
		
		
		return ocupada;
		
	}
	
	public void aparcarVehiculo(String Matricula) {
		if(this.ocupada==false) {
			this.ocupada = true;
			this.matriculaVehiculo = Matricula;
		}

	}
	
	public void liberarPlaza(String Matricula) {
		if(this.matriculaVehiculo.equals(Matricula)) {
			this.ocupada = false;
			this.matriculaVehiculo = null;
		}

	}
	
	@Override
	public String toString() {
		return "PlazaAparcamiento [numero=" + numero + ", ocupada=" + ocupada + ", matriculaVehiculo="
				+ matriculaVehiculo + "]";
	}
	
	
	
	
	
	
}
