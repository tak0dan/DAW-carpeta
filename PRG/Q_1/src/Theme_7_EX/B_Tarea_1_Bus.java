package Theme_7_EX;

public class B_Tarea_1_Bus extends  B_Tarea_1_PT{

	private int busNumber;
	private int numberOfSeats;
	
	public B_Tarea_1_Bus(int busNumer, int numberOfSeats, String plate, String model, int power, boolean inService) {
		super(plate, model,  power, inService);
		this.numberOfSeats = numberOfSeats;
		this.busNumber = busNumber;
	}

	@Override
	void startService() {
		// TODO Auto-generated method stub
		if(this.isInService()==false) {
			this.setInService(true);
		}
	}

	@Override
	void finishService() {
		// TODO Auto-generated method stub
		if(this.isInService()==true) {
			this.setInService(false);
		}
		
	}

	@Override
	int getNumberOfSeats() {
		// TODO Auto-generated method stub
		int Seats = this.numberOfSeats;
		
		return Seats;
	}
	
}
