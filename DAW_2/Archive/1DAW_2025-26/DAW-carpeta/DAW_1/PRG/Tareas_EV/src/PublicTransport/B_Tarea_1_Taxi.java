package PublicTransport;

public class B_Tarea_1_Taxi extends  B_Tarea_1_PT{
	
	private int licenseNumber;
	private boolean disabled;
	

	public B_Tarea_1_Taxi(int licenseNumber, boolean disabled, String plate, String model, int power, boolean inService) {
		super(plate, model, power, inService);
		// TODO Auto-generated constructor stub
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
		int Seats = 4;
		
		return Seats;
	}

	
	
	
}
