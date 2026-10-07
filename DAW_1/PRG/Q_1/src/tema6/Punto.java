package tema6;

public class Punto {

	 //atributos o variables de instancia

	 private double x; //x value of the point

	 private double y; //y value of the point

	 //constructores

	 public Punto(){ } 

	 public Punto(double x, double y){ 

	 this.x=x;

	 this.y=y;

	 }

	 // getters

	 public double getX() {

	 return x;

	 }

	 public double getY() {

	 return y;

	 }

	 // setters

	 public void setX(double x) {

	 this.x = x;

	 }

	 public void setY(double y) {

	 this.y = y;

	 }

	 public void setXY(double x, double y) {

	 this.x = x;

	 this.y = y;

	 }

	 public void moverPunto(double abs, double ord) {

	 x = x+abs;

	 y = y+ord;

	 }

	 @Override

	 public String toString() {

	 return "(" + x + ", " + y + ")";

	 }



	}



