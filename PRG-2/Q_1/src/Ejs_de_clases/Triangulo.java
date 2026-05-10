package Ejs_de_clases;

public class Triangulo {

    private Punto p1;
    private Punto p2;
    private Punto p3;

    public Triangulo(Punto p1, Punto p2, Punto p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    public double lado1() {
        return p1.getDistancia(p2);
    }

    public Punto getP1() {
		return p1;
	}

	public void setP1(Punto p1) {
		this.p1 = p1;
	}

	public Punto getP2() {
		return p2;
	}

	public void setP2(Punto p2) {
		this.p2 = p2;
	}

	public Punto getP3() {
		return p3;
	}

	public void setP3(Punto p3) {
		this.p3 = p3;
	}

	public double lado2() {
        return p2.getDistancia(p3);
    }
    
    public String calcTipo() {

        double a = lado1();
        double b = lado2();
        double c = lado3();

        if (a + b <= c || b + c <= a || a + c <= b) {
            return "ERROR IN CALCULATION"; // Not a valid triangle
        }

        if (a == b && b == c) {
            return "Equilateral";
        }
        else if (a == b || b == c || a == c) {
            return "Isosceles";
        }
        else {
            return "Scalene";
        }
    }


    
    public double lado3() {
        return p3.getDistancia(p1);
    }

	@Override
	public String toString() {
		return "Triangulo [p1=" + p1 + ", p2=" + p2 + ", p3=" + p3 + ", lado1()=" + lado1() + ", getP1()=" + getP1()
				+ ", getP2()=" + getP2() + ", getP3()=" + getP3() + ", lado2()=" + lado2() + ", calcTipo()="
				+ calcTipo() + ", lado3()=" + lado3() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}

	
}
