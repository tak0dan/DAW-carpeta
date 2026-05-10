package Tarea6_2;


public class Ej_4 {

    private boolean seguro;
    private String str;

    private boolean has_special;
    private boolean has_may;
    private boolean has_men;
    boolean min_length_satisfied = false;

    private int min_length = 8;   

    public Ej_4(int min_length) {
        this.min_length = min_length;
    }

    private void reset() {
        seguro = false;
        str = null;
        has_special = false;
        has_may = false;
        has_men = false;
    }

    public void analyze(String s) {

        reset();
        this.str = s;
        char[] v = s.toCharArray();
        min_length_satisfied = (v.length >= min_length);

        for (int i = 0; i < v.length; i++) {

            if (Character.isUpperCase(v[i])) {
                has_may = true;
            }

            if (Character.isLowerCase(v[i])) {
                has_men = true;
            }

            if (!Character.isAlphabetic(v[i]) && !Character.isDigit(v[i])) {
                has_special = true;
            }
        }

        if (v.length >= min_length && has_may && has_men && has_special) {
            seguro = true;
        }
    }

    @Override
    public String toString() {
        return "Ej_4 [seguro=" + seguro +
               ", str=" + str +
               ", has_special=" + has_special +
               ", has_may=" + has_may +
               ", has_men=" + has_men +
               ", min_length satisfied = "+ min_length_satisfied+ "]" ;
    }
}