public class Aparcamiento_Tester {

    public static void main(String[] args) {
        Aparcamiento c = new Aparcamiento();

        // Añadir elementos
        c.añadirPlaza(new PlazaAparcamiento(1, false, "item1"));
        c.añadirPlaza(new PlazaAparcamiento(2, true, "item2"));
        c.añadirPlaza(new PlazaAparcamiento(3, false, "item3"));
        c.añadirPlaza(new PlazaAparcamiento(4, true, "item4"));
        c.añadirPlaza(new PlazaAparcamiento(5, false, "item5"));

        System.out.println(c);
        System.out.println("buscarPlaza = " + c.buscarPlaza(42));
        c.liberarVehiculo("test");
        System.out.println("After remove: " + c);

        System.out.println("Final: " + c);
    }
}
