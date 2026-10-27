package Tema5_1;
public class Ej3Divisores {
    private int a;

    public Ej3Divisores(int a) {
        this.a = a;
    }

    public void mostrar() {
        for (int i = 1; i <= a; i++) {
            if (a % i == 0) System.out.print(i + " ");
        }
        System.out.println();
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }
}
