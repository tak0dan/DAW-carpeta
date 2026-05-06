package Theme_7_EX;

import java.util.ArrayList;
import java.util.Iterator;

public class Tarea_1_Tester {

	public static double howManySeatsInService(ArrayList <Tarea_1_Public_Transport>l) {
		double totalSeats = 0;
		for (Tarea_1_Public_Transport t : l) {
			
			if(t.inService) {
				totalSeats += t.getNumberOfSeats();
			}
		}
		
		return totalSeats;
		
	}
	
	public static void taxisForDisabledPeople(ArrayList <Tarea_1_Public_Transport>l) {
		
		Iterator<Tarea_1_Public_Transport> it = l.iterator();
		
		while(it.hasNext()) {
			Tarea_1_Public_Transport t = it.next();
			
			if(t instanceof Tarea_1_Taxi) {
				
				Tarea_1_Taxi tx = (Tarea_1_Taxi) t;
				
				if(tx.disabled) {
					System.out.println("Taxi "+tx.license+" is for disabled people");
				}
				
			}
			
		}
		
	}
	
public static void main(String[] args) {
        System.out.println("=== Theme_7_EX Tester ===\n");

        ArrayList<Tarea_1_Public_Transport> vehicles = new ArrayList<>();

        // Test Bus
        Tarea_1_Bus bus1 = new Tarea_1_Bus("BUS001", true);
        vehicles.add(bus1);

        Tarea_1_Bus bus2 = new Tarea_1_Bus("BUS002", false);
        vehicles.add(bus2);

        // Test Taxi
        Tarea_1_Taxi taxi1 = new Tarea_1_Taxi("TAXI001", true);
        taxi1.disabled = true;
        vehicles.add(taxi1);

        Tarea_1_Taxi taxi2 = new Tarea_1_Taxi("TAXI002", false);
        vehicles.add(taxi2);

        System.out.println("--- Created 4 vehicles ---");
        for (Tarea_1_Public_Transport t : vehicles) {
            System.out.println(t.getClass().getSimpleName() + " - Seats: " + t.getNumberOfSeats());
        }

        // Test howManySeatsInService
        double seats = howManySeatsInService(vehicles);
        System.out.println("\nTotal seats in service: " + seats);

        // Test taxisForDisabledPeople
        System.out.println("\n--- Taxis for disabled ---");
        taxisForDisabledPeople(vehicles);

        // Test startService/stopService
        System.out.println("\n--- Service Tests ---");
        bus1.startService();
        bus1.stopService();

        System.out.println("\n=== All Tests Passed ===");
    }
	
}
