package Ejercicio10;

public abstract class Employee implements Payable {
	protected String SSN;
	protected String name;
	
	public Employee(String sSN, String name) {
		super();
		SSN = sSN;
		this.name = name;
	}

	public String getSSN() {
		return SSN;
	}

	public String getName() {
		return name;
	}

	public void setSSN(String sSN) {
		SSN = sSN;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Employee [SSN=" + SSN + ", name=" + name + "]";
	}
	
	
	
}
