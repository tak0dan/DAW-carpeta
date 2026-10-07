package Theme_7_EX;

public class Tarea_1_Taxi extends Tarea_1_Public_Transport{

	private int licenseNumber;
	protected boolean disabled;
	
	public Tarea_1_Taxi(String license, boolean inService) {
		super(license);
	}
	
	@Override
	void startService() {
		if(this.inService = false) {
			this.inService = true;
			System.out.println("Bus number "+ this.licenseNumber+" in service now.");
		}
		
	}
	@Override
	void stopService() {
		if(this.inService = true) {
			this.inService = false;
			System.out.println("Bus number "+ this.licenseNumber+" has finished its service.");
		}
		
	}
	
	@Override
	int getNumberOfSeats() {
		int numberOfSeats = 4;
		return numberOfSeats;
	}
	
	
}
