package Tema_5;
public class CountLongWords {
    public static void main(String[] args) {

        String[] v = {"window", "curtain", "table", "chair"};

        int count = 0;

        for (int i = 0; i < v.length; i++) {
            if (v[i].length() > 5) {
                count++;
            }
        }

        System.out.println(count + " words with more than 5 characters");
    }
}
