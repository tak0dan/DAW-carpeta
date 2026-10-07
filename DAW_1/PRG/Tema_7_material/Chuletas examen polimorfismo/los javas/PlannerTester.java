package Prueba_Examen_B;

import java.util.List;
import java.util.ArrayList;



public class PlannerTester {
	
	public static void muestraTareasPendientes(List <Plan> l) {
		for (int i = 0; i < l.size(); i++) {
			if (l.get(i) instanceof Tarea) {
				Tarea t = (Tarea) l.get(i);
				if(!t.obtenerResumen().contains("Realizada")) {
					System.out.println(t.obtenerResumen());
				}
			}
		}
	}
	

	
	public static int devuelveDuracionTotalPlanes(List <Plan> l) {
		int total = 0;
		for (int i = 0; i < l.size(); i++) {
			total += l.get(i).getDuracion();
		}
		return total;
	}

	public static void main(String[] args) {
		
		List<Plan> l = new ArrayList<>();
		
		
		l.add(new Tarea("Estudiar Java", true));
        l.add(new Tarea("Hacer ejercicio", false));
        l.add(new Tarea("Leer libro", true));
		
        l.add(new Evento("Reunión de trabajo", 10));
        l.add(new Evento("Clase de yoga", 8));
        l.add(new Evento("Cena familiar", 21));
        l.add(new Evento("Concierto", 25));
		
        muestraTareasPendientes(l);
        System.out.println(devuelveDuracionTotalPlanes(l));
        
        System.out.println(l);
		
	}

}
