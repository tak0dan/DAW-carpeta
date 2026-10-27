package Tareas6_1;
import java.util.Scanner;
import java.util.Random;

import tema6.Punto;

public class Ej_1 {

    public static void main(String[] args) {
    	Random r = new Random();
        Punto[] arr = new Punto[10];
        
        for (int i = 0; i < arr.length; i++) {
            arr[i] = new Punto(); 
            arr[i].setX(r.nextDouble(-10, 10));
            arr[i].setY(r.nextDouble(-10, 10));
        }

        for(int i = 0; i<arr.length; i++) {
        	System.out.println(arr[i]);
        }
        
    }
}
