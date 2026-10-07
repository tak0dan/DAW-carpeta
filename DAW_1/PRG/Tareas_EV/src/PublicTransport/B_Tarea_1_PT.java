package PublicTransport;

public abstract class B_Tarea_1_PT {
	private String plate;
	private String model;
	private int power;
	private boolean inService;

	public B_Tarea_1_PT(String plate, String model, int power, boolean inService) {
		this.plate = plate;
		this.model = model;
		this.power = power;
		this.inService = inService;
	}

	public boolean isInService() {
		return inService;
	}

	public void setInService(boolean inService) {
		this.inService = inService;
	}

	abstract void startService();

	abstract void finishService();

	abstract int getNumberOfSeats();
}
