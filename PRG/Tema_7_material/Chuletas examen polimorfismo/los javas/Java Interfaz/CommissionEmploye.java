package Ejercicio10;

public class CommissionEmploye extends Employee {

	private double baseSalary;
	private double sales;
	private double commission;
	
	
	public CommissionEmploye(String sSN, String name, double baseSalary, double sales, double commission) {
		super(sSN, name);
		this.baseSalary = baseSalary;
		this.sales = sales;
		this.commission = commission;
	}
	
	


	public double getBaseSalary() {
		return baseSalary;
	}




	public double getSales() {
		return sales;
	}




	public double getCommission() {
		return commission;
	}




	public void setBaseSalary(double baseSalary) {
		this.baseSalary = baseSalary;
	}




	public void setSales(double sales) {
		this.sales = sales;
	}




	public void setCommission(double commission) {
		this.commission = commission;
	}




	@Override
	public double getAmountToPay() {
		return 0;
	}

}
