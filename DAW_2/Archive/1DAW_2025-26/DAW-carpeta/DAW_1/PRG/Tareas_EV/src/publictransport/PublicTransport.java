package publictransport;

public abstract class PublicTransport {

	    protected String matricula;
	    protected String modelo;
	    protected int potencia;
	    protected boolean enServicio;

	    public PublicTransport(String matricula, String modelo, int potencia) {
	        this.matricula = matricula;
	        this.modelo = modelo;
	        this.potencia = potencia;
	        this.enServicio = false;
	    }

	    public abstract void iniciarServicio();
	    public abstract void terminarServicio();
	    public abstract int obtenerAsientos();

	    public boolean estaEnServicio() {
	        return enServicio;
	    }
	}
