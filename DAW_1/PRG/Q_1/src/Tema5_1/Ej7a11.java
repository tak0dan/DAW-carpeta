package Tema5_1;

public class Ej7a11 {
    public static double media(double a, double b, double c) {
        return (a + b + c) / 3;
    }

    public static char caracterMedio(String a) {
        return a.charAt(a.length() / 2);
    }

    public static int contarVocales(String a) {
        int r = 0;
        for (int i = 0; i < a.length(); i++) {
            char c = Character.toLowerCase(a.charAt(i));
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') r++;
        }
        return r;
    }

    public static boolean esBisiesto(int a) {
        return (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;
    }

    public static boolean passwordFuerte(String a) {
        if (a.length() < 10) return false;
        int d = 0;
        for (int i = 0; i < a.length(); i++) {
            char c = a.charAt(i);
            if (!Character.isLetterOrDigit(c)) return false;
            if (Character.isDigit(c)) d++;
        }
        return d >= 2;
    }
}
