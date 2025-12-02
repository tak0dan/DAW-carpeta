package Tema_5;
import java.util.Scanner;
import java.util.Random;

public class Ej_x {
    public static void main(String[] args) {
        Random r = new Random();
        Scanner tec = new Scanner(System.in);
        int y=0;
        int[] v = new int[8];   
        String ng="";// step 1: create array
        MetodosA.LLenarArrayRandom(v, 1, 10);        // step 2: fill array
        MetodosA.MostrarArray(v);       // step 3: display array

        for(int i=0; i<v.length;i++) {
        	y=y-v[i];
        	ng=ng + v[i] + " - ";
        }
        System.out.println();
        System.out.println(ng.substring(0, ng.length()-3)+" = "+y);
        
        
        tec.close();
    }
}
