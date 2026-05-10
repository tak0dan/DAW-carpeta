package publictransport;

public class Taxi extends PublicTransport {

    private int numeroLicencia;
    private boolean paraDiscapacitados;

    public Taxi(String matricula, String modelo, int potencia, int numeroLicencia, boolean paraDiscapacitados) {
        super(matricula, modelo, potencia);
        this.numeroLicencia = numeroLicencia;
        this.paraDiscapacitados = paraDiscapacitados;
    }

    
    public void iniciarServicio() {
        enServicio = true;
        System.out.println("Taxi con licencia " + numeroLicencia + " en servicio");
    }

    
    public void terminarServicio() {
        enServicio = false;
        System.out.println("Taxi con licencia " + numeroLicencia + " ha terminado servicio");
    }

    
    public int obtenerAsientos() {
        return 4;
    }

    public boolean esParaDiscapacitados() {
        return paraDiscapacitados;
    }
}