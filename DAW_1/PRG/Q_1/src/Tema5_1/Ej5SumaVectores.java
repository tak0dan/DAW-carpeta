package Tema5_1;
public class Ej5SumaVectores {
    public static int[] sumar(int[] a, int[] b) {
        int[] r = new int[a.length];
        for (int i = 0; i < a.length; i++) r[i] = a[i] + b[i];
        return r;
    }
}
