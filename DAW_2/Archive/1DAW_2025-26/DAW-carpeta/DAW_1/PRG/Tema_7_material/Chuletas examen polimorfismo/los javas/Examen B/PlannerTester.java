import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

public class PlannerTester {

    // Apartado b) - Muestra las tareas pendientes de la lista
    public static void muestraTareasPendientes(List<Plan> l) {
        for (int i = 0; i < l.size(); i++) {
            if (l.get(i) instanceof Tarea) {
                Tarea t = (Tarea) l.get(i);
                if (!t.isCompletada()) {
                    System.out.println(t.obtenerResumen());
                }
            }
        }
    }

    // Apartado c) - Devuelve la duración total de todos los planes
    public static int devuelveDuracionTotalPlanes(List<Plan> l) {
        int total = 0;
        for (int i = 0; i < l.size(); i++) {
            total += l.get(i).getDuracion();
        }
        return total;
    }

    public static void main(String[] args) {

        // Apartado d) - Lista de planes con 3 tareas y 4 eventos
        List<Plan> lista = new ArrayList<>();

        lista.add(new Tarea("Estudiar Java", 60));
        lista.add(new Tarea("Hacer ejercicio", 45));
        lista.add(new Tarea("Leer libro", 30));

        try {
            lista.add(new Evento("Reunion de trabajo", 10, 60));
            lista.add(new Evento("Clase de yoga", 8, 90));
            lista.add(new Evento("Cena familiar", 21, 120));
            lista.add(new Evento("Concierto", 19, 150));
        } catch (HoraIncorrectaException e) {
            System.out.println("Error al crear evento: " + e.getMessage());
        }

        // Llamada a muestraTareasPendientes
        System.out.println("--- Tareas pendientes ---");
        muestraTareasPendientes(lista);

        // Llamada a devuelveDuracionTotalPlanes
        System.out.println("\nDuracion total: " + devuelveDuracionTotalPlanes(lista) + " minutos");

        // Apartado d) - Provocar la excepcion con una hora incorrecta
        System.out.println("\n--- Probando excepcion HoraIncorrectaException ---");
        try {
            Evento eventoMalo = new Evento("Evento imposible", 25, 60);
        } catch (HoraIncorrectaException e) {
            System.out.println("Excepcion capturada: " + e.getMessage());
        }

        // Apartado e) - LinkedList con ListIterator
        System.out.println("\n--- Ejercicio LinkedList ---");
        LinkedList<Integer> numeros = new LinkedList<>();
        numeros.add(10);
        numeros.add(20);
        numeros.add(30);
        numeros.add(40);
        numeros.add(50);
        System.out.println("Lista inicial: " + numeros);

        // Recorrer de atras hacia adelante y multiplicar x2
        ListIterator<Integer> it = numeros.listIterator(numeros.size());
        while (it.hasPrevious()) {
            int val = it.previous();
            it.set(val * 2);
        }
        System.out.println("Tras multiplicar x2: " + numeros);

        // Recorrer hacia adelante e insertar 25 detras de multiplos de 20
        it = numeros.listIterator();
        while (it.hasNext()) {
            int val = it.next();
            if (val % 20 == 0) {
                it.add(25);
            }
        }
        System.out.println("Tras insertar 25 detras de multiplos de 20: " + numeros);

        // Recorrer hacia adelante y borrar el 40
        it = numeros.listIterator();
        while (it.hasNext()) {
            int val = it.next();
            if (val == 40) {
                it.remove();
            }
        }
        System.out.println("Tras borrar el 40: " + numeros);
    }
}
