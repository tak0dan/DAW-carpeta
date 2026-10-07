
public class PlazaAparcamiento {

    private int numero;
    private boolean ocupada;
    private String matriculaVehiculo;

    public PlazaAparcamiento() {
        this.numero = 0;
        this.ocupada = false;
        this.matriculaVehiculo = null;
    }

    public PlazaAparcamiento(int numero, boolean ocupada, String matriculaVehiculo) {
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

    @Override
    public String toString() {
        return "PlazaAparcamiento [" + "numero=" + numero + ", " + "ocupada=" + ocupada + ", " + "matriculaVehiculo=" + matriculaVehiculo + "]";
    }

    public boolean estaOcupada() {
        return ocupada;
    }

    public void aparcarVehiculo(String matricula) {
        // TODO
    }

    public void liberarPlaza() {
        // TODO
    }

    public static void main(String[] args) {
        PlazaAparcamiento obj = new PlazaAparcamiento();
        int numero = 1;
        boolean ocupada = false;
        String matriculaVehiculo = "valor";
        boolean result = obj.estaOcupada();
        obj.aparcarVehiculo("test");
        obj.liberarPlaza();
    }

}
