package Theme_7_EX;

public abstract class B_Tarea_1_PT {
	private String plate;
	private String model;
	private int power;
	private boolean inService;
	public B_Tarea_1_PT(String plate, String model, int power, boolean inService) {
		
		this.inService = inService;
		this.plate = plate;
		this.model = model;
		this.power = power;
		

	}
	
	abstract void startService();
	
	abstract void finishService();
	
	abstract int getNumberOfSeats();
	
}
