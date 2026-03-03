package Clases_y_UML;

public class Person {
	protected String name;
	protected String address;
	
//constructor
	public Person(String name, String address) {
		super();
		this.name = name;
		this.address = address;
	}

//getters y setters
	public String getName() {
		return name;
	}
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Person [name=" + name + ", address=" + address + "]";
	}
	

}
