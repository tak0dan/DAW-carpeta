package examen;

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

    public int getNumero() { return numero; }
    public void setNumero(int numero) { this.numero = numero; }

    public String getMatriculaVehiculo() { return matriculaVehiculo; }
    public void setMatriculaVehiculo(String matriculaVehiculo) { this.matriculaVehiculo = matriculaVehiculo; }

    @Override
    public String toString() {
        return "PlazaAparcamiento [" + numero=" + numero + ", ocupada=" + ocupada + ", matriculaVehiculo=" + matriculaVehiculo + "]";
    }

    public por defecto(no ocupada) {
        return null;
    }

    public Método toString() {
        return null;
    }

    public boolean estaOcupada() {
        return false;
    }

    public void aparcarVehiculo(String matricula) {
    }

    public void liberarPlaza() {
    }

    public método main() {
        return null;
    }

}