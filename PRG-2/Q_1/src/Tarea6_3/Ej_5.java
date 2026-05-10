package Tarea6_3;

import java.util.ArrayList;

public class Ej_5 {

    public ArrayList<String> addAll(ArrayList<String> list1, ArrayList<String> list2) {

        ArrayList<String> list3 = new ArrayList<>();

        list3.addAll(list1);
        list3.addAll(list2);

        return list3;
    }
}