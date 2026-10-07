/*package Ev_2;
import java.util.ArrayList;
import java.util.Scanner;

import tema6.Punto3D;
public class Point3D_ArrayList {

    public static void main(String[] args) {

        Scanner tec = new Scanner(System.in);
        ArrayList<Punto3D> p1 = new ArrayList<>();

        // pedimos 5 puntos
        for (int i = 0; i < 5; i++) {
            System.out.println("Introduce la coordenada x del punto " + (i + 1) + ": ");
            double x = tec.nextDouble();

            System.out.println("Introduce la coordenada y del punto " + (i + 1) + ": ");
            double y = tec.nextDouble();

            System.out.println("Introduce la coordenada z del punto " + (i + 1) + ": ");
            double z = tec.nextDouble();

            Punto3D p = new Punto3D(x, y, z);
            p1.add(p);
        }

        // lista antes de borrar
        System.out.println("Lista antes de borrar: " + p1);

        // borrar el último punto sin usar su posicion
        if (!p1.isEmpty()) {
            p1.remove(p1.size() - 1);
        }

        // lista después de borrar
        System.out.println("Lista después de borrar el último punto: " + p1);

        tec.close();
    }
}
*/
package Ev_2;

