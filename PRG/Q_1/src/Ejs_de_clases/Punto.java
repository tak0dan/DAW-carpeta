package Ejs_de_clases;

public class Punto {

    public int x;
    public int y;

    public Punto(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
	public String toString() {
		return "Punto [x=" + x + ", y=" + y + ", getX()=" + getX() + ", getY()=" + getY() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public double getDistancia(Punto p2) {
        return Math.sqrt(
            Math.pow(p2.x - this.x, 2) +
            Math.pow(p2.y - this.y, 2)
        );
    }
}
