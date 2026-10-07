package Tarea6_2;

public class Ej_3 {

    private String str;
    private int cant_pal;
    private int l_may;
    private int l_men;
    private int w_space;

    public Ej_3() {
    }

    private void reset() {
        str = null;
        cant_pal = 0;
        l_may = 0;
        l_men = 0;
        w_space = 0;
    }

    public void analyze(String s) {

        reset();              // important
        this.str = s;

        boolean inWord = false;
        char[] v = s.toCharArray();

        for (int i = 0; i < v.length; i++) {

            if (Character.isUpperCase(v[i])) l_may++;
            if (Character.isLowerCase(v[i])) l_men++;

            if (Character.isWhitespace(v[i])) {
                w_space++;
                inWord = false;
            } else {
                if (!inWord) {
                    cant_pal++;
                    inWord = true;
                }
            }
        }
    }

    @Override
    public String toString() {
        return "Ej_3 [str=" + str +
                ", cant_pal=" + cant_pal +
                ", l_may=" + l_may +
                ", l_men=" + l_men +
                ", w_space=" + w_space + "]";
    }
}