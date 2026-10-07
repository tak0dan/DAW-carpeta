package Empleado_Tests;

public class Empleado {

	private String nombre;
	private double salario;
	
	public Empleado(String n, double s) {
		nombre = n;
		salario = s;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String n) {
		this.nombre = n;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double s) {
		this.salario = s;
	}
	
	
	public void subirSalario(double p) {salario += salario*p/100;}
	public void bajarSalario(double p) {salario -= salario*p/100;}
	public double salarioAnual() {
		return salario*12;
	}
}
