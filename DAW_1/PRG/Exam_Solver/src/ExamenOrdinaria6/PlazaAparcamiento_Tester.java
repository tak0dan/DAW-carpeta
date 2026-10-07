public class PlazaAparcamiento_Tester {

    public static void main(String[] args) {
        PlazaAparcamiento e1 = new PlazaAparcamiento();
        System.out.println("Default: " + e1);

        PlazaAparcamiento e2 = new PlazaAparcamiento(1, false, "valor");
        System.out.println("Parametrized: " + e2);

        System.out.println("getNumero() = " + e1.getNumero());
        System.out.println("getMatriculaVehiculo() = " + e1.getMatriculaVehiculo());
        e1.setNumero(42);
        e1.setMatriculaVehiculo("test");
        System.out.println("estaOcupada = " + e1.estaOcupada());
        e1.aparcarVehiculo("test");

        System.out.println("Final: " + e1);
    }
}
