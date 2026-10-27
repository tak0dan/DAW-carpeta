package metodos;

import java.util.Scanner;
import java.util.Random;

public class MetodosA {

    private static Scanner tec = new Scanner(System.in);
    private static Random r = new Random();

    // -------------------------
    // 1D ARRAYS
    // -------------------------

    public static void LLenarArray(int []v) {
        System.out.println("Introduce los " + v.length + " enteros del array: ");
        for(int i=0; i<v.length; i++) {
            v[i] = tec.nextInt();
            tec.nextLine();
        }
    }

    public static void LLenarArrayRandom(int[] v, int min, int max) {
        for (int i = 0; i < v.length; i++) {
            v[i] = r.nextInt(max - min + 1) + min;
        }
    }

    public static void LLenarArray(double []v) {
        System.out.println("Introduce los " + v.length + " doubles del array: ");
        for(int i=0; i<v.length; i++) {
            v[i] = tec.nextDouble();
            tec.nextLine();
        }
    }

    public static void LLenarArrayRandom(double []v, double min, double max) {
        for(int i=0; i<v.length; i++) {
            v[i] = min + (max - min) * r.nextDouble();
        }
    }

    public static void LLenarArray(String []v) {
        System.out.println("Introduce las " + v.length + " cadenas del array: ");
        for(int i=0; i<v.length; i++) {
            v[i] = tec.nextLine();
        }
    }

    public static void LLenarArrayRandom(String []v, int longitud) {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(int i=0; i<v.length; i++) {
            StringBuilder sb = new StringBuilder();
            for(int j=0; j<longitud; j++) {
                sb.append(chars.charAt(r.nextInt(chars.length())));
            }
            v[i] = sb.toString();
        }
    }


    // -------------------------
    // 2D ARRAYS
    // -------------------------

    public static void LLenarArray(int [][]m) {
        System.out.println("Introduce los elementos de la matriz int:");
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                m[i][j] = tec.nextInt();
                tec.nextLine();
            }
        }
    }

    public static void LLenarArrayRandom(int [][]m, int min, int max) {
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                m[i][j] = r.nextInt(max - min + 1) + min;
            }
        }
    }

    public static void LLenarArray(double [][]m) {
        System.out.println("Introduce los elementos de la matriz double:");
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                m[i][j] = tec.nextDouble();
                tec.nextLine();
            }
        }
    }

    public static void LLenarArrayRandom(double [][]m, double min, double max) {
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                m[i][j] = min + (max - min) * r.nextDouble();
            }
        }
    }

    public static void LLenarArray(String [][]m) {
        System.out.println("Introduce los elementos de la matriz String:");
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                m[i][j] = tec.nextLine();
            }
        }
    }

    public static void LLenarArrayRandom(String [][]m, int longitud) {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                StringBuilder sb = new StringBuilder();
                for(int k=0; k<longitud; k++) {
                    sb.append(chars.charAt(r.nextInt(chars.length())));
                }
                m[i][j] = sb.toString();
            }
        }
    }


    // -------------------------
    // SHOW / PRINT METHODS
    // -------------------------

    public static void MostrarArray(int []v) {
        System.out.println("Los elementos del array son: ");
        for(int i=0; i<v.length; i++) {
            System.out.print(v[i] + "\t");
        }
    }

    public static void MostrarArray(double []v) {
        System.out.println("Los elementos del array son: ");
        for(int i=0; i<v.length; i++) {
            System.out.print(v[i] + "\t");
        }
    }

    public static void MostrarArray(String []v) {
        System.out.println("Los elementos del array son: ");
        for(int i=0; i<v.length; i++) {
            System.out.print(v[i] + "\t");
        }
    }

    public static void MostrarArray(char []v) {
        System.out.println("Los elementos del array son: ");
        for(int i=0; i<v.length; i++) {
            System.out.print(v[i] + "\t");
        }
    }

    public static void MostrarArray(boolean []v) {
        System.out.println("Los elementos del array son: ");
        for(int i=0; i<v.length; i++) {
            System.out.print(v[i] + "\t");
        }
    }

    public static void MostrarArray(int [][]m) {
        System.out.println("Contenido de la matriz:");
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                System.out.print(m[i][j] + "\t");
            }
            System.out.println();
        }
    }

    public static void MostrarArray(double [][]m) {
        System.out.println("Contenido de la matriz:");
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                System.out.print(m[i][j] + "\t");
            }
            System.out.println();
        }
    }

    public static void MostrarArray(String [][]m) {
        System.out.println("Contenido de la matriz:");
        for(int i=0; i<m.length; i++) {
            for(int j=0; j<m[i].length; j++) {
                System.out.print(m[i][j] + "\t");
            }
            System.out.println();
        }
    }

}
