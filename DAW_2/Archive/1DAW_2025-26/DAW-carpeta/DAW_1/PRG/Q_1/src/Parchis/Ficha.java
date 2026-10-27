package Parchis;

public class Ficha {
	private int id;
	private String color;
	private int casilla;

	public Ficha(int id, String color, int casilla) {
		this.id = id;
		this.color = color;
		this.casilla = casilla;
	}

	public int getID() {
		return id;
	}
	public int getCasilla() {
		return casilla;
	}
	public String getColor() {
		return color;
	}
	public void setCasilla(int casilla) {
		this.casilla = casilla;
	}
	public void setColor(String color) {
		color = color.toLowerCase();
		boolean correcta = false;
		while(correcta == false) {
			System.out.println("Introduzca el color");
			if(color != "rojo" && color != "amarillo" && color != "azul" && color != "verde") {
				System.out.println("No es valor correcto para el color");
			}
			else {
				this.color = color;
			}
		}	
	}

	
	
}
