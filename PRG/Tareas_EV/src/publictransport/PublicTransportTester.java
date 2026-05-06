package publictransport;

import java.util.ArrayList;


public class PublicTransportTester{

    public static double totalAsientosEnServicio(ArrayList<PublicTransport> lista) {
        int total = 0;

        for (PublicTransport t : lista) {
            if (t.estaEnServicio()) {
                total += t.obtenerAsientos();
            }
        }

        return total;
    }

    public static void taxisParaDiscapacitados(ArrayList<PublicTransport> lista) {
        int contador = 0;

        for (PublicTransport t : lista) {
            if (t instanceof Taxi) {
                Taxi taxi = (Taxi) t;

                if (taxi.esParaDiscapacitados()) {
                    contador++;
                }
            }
        }

        System.out.println("Cantidad de taxis para discapacitados: " + contador);
    }

    public static void main(String[] args) {

        ArrayList<PublicTransport> lista = new ArrayList<>();

        Taxi taxi1 = new Taxi("1111AAA", "Toyota", 100, 1, true);
        Taxi taxi2 = new Taxi("2222BBB", "Nissan", 110, 2, false);

        Bus bus1 = new Bus("BUS180", "Volvo", 300, 10, 50);
        Bus bus2 = new Bus("BUS181", "Mercedes", 320, 20, 60);

        lista.add(taxi1);
        lista.add(taxi2);
        lista.add(bus1);
        lista.add(bus2);

        
        taxi1.iniciarServicio();
        bus1.iniciarServicio();

       
        System.out.println("Total de asientos en servicio: " + totalAsientosEnServicio(lista));
        taxisParaDiscapacitados(lista);
    }

}