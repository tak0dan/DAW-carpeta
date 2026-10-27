package examen.generado;


public class Fraccion {

    private int num;
    private int den;

    public Fraccion() {
        this.num = 0;
        this.den = 0;
    }

    public int getNum() {
        return num;
    }

    public int getDen() {
        return den;
    }

    @Override
    public String toString() {
        return "Fraccion [" + "num=" + num + ", " + "den=" + den + "]";
    }

    public int maximoComunDivisor(int a, int b) {
        return 0;
    }

    public int minimoComunMultiplo(int a, int b) {
        return 0;
    }

    public Fraccion sumarF(Fraccion f) {
        return null;
    }

    public void simplificarF() {
        // TODO
    }

    public void setNum(int num) {
        // TODO
    }

    public void setDen(int den) {
        // TODO
    }

    public static void main(String[] args) {
        int num = 1;
        int den = 1;
        int result = maximoComunDivisor(42, 42);
        int result = minimoComunMultiplo(42, 42);
        Fraccion result = sumarF(null);
        void result = simplificarF();
        void result = setNum(42);
        void result = setDen(42);
    }

}
