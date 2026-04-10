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
		
		return 0;
		
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

		
		
	}
	
}
