package Tema5_1;
public class Ej6EscalarVector {
    public static int[] producto(int a, int[] b) {
        int[] r = new int[b.length];
        for (int i = 0; i < b.length; i++) r[i] = a * b[i];
        return r;
    }
}
