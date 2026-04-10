package Theme_7_EX;

public class Tarea_1_Bus extends Tarea_1_Public_Transport {
	
	public Tarea_1_Bus(String license, boolean inService) {
		super(license);
		
	}
	private int busNumber;
	private int numberOfSeats;
	@Override
	void startService() {
	    if (!this.inService) {
	        this.inService = true;
	        System.out.println("Bus number " + this.busNumber + " in service now.");
	    }
	}

	@Override
	void stopService() {
	    if (this.inService) {
	        this.inService = false;
	        System.out.println("Bus number " + this.busNumber + " has finished its service.");
	    }
	}
	
	@Override
	int getNumberOfSeats() {
		int numberOfSeats = this.numberOfSeats;
		return numberOfSeats;
	}
	


	
}
