package Tarea6_3;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Ej_6 {

    public static ArrayList<Integer> generateArrayList () {

        ArrayList<Integer> numbers = new ArrayList<>();
        Random rand = new Random();

        for (int i = 0; i < 5; i++) {
            int num = rand.nextInt(11); 
            numbers.add(num);
        }

        Collections.sort(numbers);

        return numbers;
    }
}