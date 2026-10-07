package tema6;

public class Fraccion {

	private int num;
	private int den;

	public Fraccion(int num, int den) {
	    // Fix denominator zero
	    if (den == 0) {
	        den = 1;
	    }

	    // Fix numerator zero
	    if (num == 0) {
	        this.num = 0;
	        this.den = 1;
	        return;
	    }

	    this.num = num;
	    this.den = den;
	    simplificarF();
	}






	public Fraccion(Fraccion sumarF) {
		// TODO Auto-generated constructor stub
	}





	private int maximoComunDivisor(int a, int b) {
		int temporal;//Para no perder b
		while (b != 0) {
			temporal = b;
			b = a % b;
			a = temporal;
		}
		return a;
	}

	private int minimoComunMultiplo(int a, int b) {
		// Y ahora aplicamos la fórmula que dice:
		// MCM(a, b) = (a * b) / MCD(a, b)
		return (a * b) / maximoComunDivisor(a, b);
	}

	public Fraccion sumarF(Fraccion f) {
		int temp = minimoComunMultiplo(this.den, f.den);
		this.num=this.num*(temp/this.den);
		f.num=f.num*(temp/f.den);
		this.den = temp;
		f.den = temp;
		int nuevoNum = this.num + f.num;
		int nuevoDen = temp;
		simplificarF();
		return new Fraccion(nuevoNum, nuevoDen);
	}



	public void simplificarF() {
		int mcd = maximoComunDivisor(num, den);
		num /= mcd;
		den /= mcd;

		if (den < 0) {
			num = -num;
			den = -den;
		}
	}

	public int getNum() {

		return this.num;
	}
	public int getDen() {
		return this.den;
	}

	public void setNum(int num) {
		if (num==0) {
			this.num = 1;
		}else {
			this.num = num;
		}
	}
	public void setDen(int den) {
		if (den==0) {
			this.den = -1;
		}else {
			this.den = den;
		}
	}




	@Override
	public String toString() {
		return "Fraccion [num=" + num + ", den=" + den + ", getNum()=" + getNum() + ", getDen()=" + getDen()
		+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	} 


}
