package Ejercicio10;

public class HourlyEmployee extends Employee {

	private double wage;
	private int hours;
	
	
	public HourlyEmployee(String sSN, String name, double wage, int hours) {
		super(sSN, name);
		this.wage = wage;
		this.hours = hours;
	}


	public double getWage() {
		return wage;
	}


	public int getHours() {
		return hours;
	}


	public void setWage(double wage) {
		this.wage = wage;
	}


	public void setHours(int hours) {
		this.hours = hours;
	}


	@Override
	public double getAmountToPay() {
		// TODO Auto-generated method stub
		return 0;
	}

}
