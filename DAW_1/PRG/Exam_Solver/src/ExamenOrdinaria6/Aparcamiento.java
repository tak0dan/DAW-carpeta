import java.util.ArrayList;
import java.util.Iterator;

public class Aparcamiento {

    private ArrayList<PlazaAparcamiento> plazas;

    public Aparcamiento() {
        this.plazas = new ArrayList<>();
    }

    @Override
    public String toString() {
        return "Aparcamiento [" + "plazas=" + plazas + "]";
    }

    public void añadirPlaza(PlazaAparcamiento p) {
        // TODO
    }

    public PlazaAparcamiento buscarPlaza(int numero) {
        return null;
    }

    public int plazasLibres() {
        return 0;
    }

    public int plazasOcupadas() {
        return 0;
    }

    public boolean aparcarVehiculo(String matricula) {
        return false;
    }

    public void liberarVehiculo(String matricula) {
        // TODO
    }

    public static void main(String[] args) {
        Aparcamiento obj = new Aparcamiento();
        ArrayList<PlazaAparcamiento> plazas = new ArrayList<>();
        obj.añadirPlaza(null);
        PlazaAparcamiento result = obj.buscarPlaza(42);
        int result1 = obj.plazasLibres();
        int result2 = obj.plazasOcupadas();
        boolean result3 = obj.aparcarVehiculo("test");
        obj.liberarVehiculo("test");
    }

}
