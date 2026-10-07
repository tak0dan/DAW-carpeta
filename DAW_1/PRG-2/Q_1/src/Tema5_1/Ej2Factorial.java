package Tema5_1;
public class Ej2Factorial {
    private int a;

    public Ej2Factorial(int a) {
        this.a = a;
    }

    public long factorial() {
        long r = 1;
        for (int i = 1; i <= a; i++) r *= i;
        return r;
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }
}
