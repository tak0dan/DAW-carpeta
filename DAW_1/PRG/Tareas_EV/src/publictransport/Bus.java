package publictransport;

public class Bus extends PublicTransport{

    private int numeroBus;
    private int numeroAsientos;

    public Bus(String matricula, String modelo, int potencia, int numeroBus, int numeroAsientos) {
        super(matricula, modelo, potencia);
        this.numeroBus = numeroBus;
        this.numeroAsientos = numeroAsientos;
    }

    
    public void iniciarServicio() {
        enServicio = true;
        System.out.println("Bus numero " + numeroBus + " en servicio");
    }

    
    public void terminarServicio() {
        enServicio = false;
        System.out.println("Bus numero " + numeroBus + " ha terminado servicio");
    }

    
    public int obtenerAsientos() {
        return numeroAsientos;
    }
}