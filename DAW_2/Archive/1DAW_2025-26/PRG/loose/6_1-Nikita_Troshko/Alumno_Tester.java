package tema6;

import java.util.Scanner;

public class Alumno_Tester {

    public static void main(String[] args) {

        Alumno aVacio = new Alumno();
        aVacio.setNia("0001");
        aVacio.setNombre("TestVacio");
        aVacio.setEdad(18);
        aVacio.setNotas(new int[]{5, 5, 5});
        System.out.println(aVacio);

        Alumno aParam = new Alumno("0002", "TestParam", 20);
        aParam.setNota(0, 7);
        aParam.setNota(1, 8);
        aParam.setNota(2, 9);
        System.out.println(aParam);

        System.out.println("Media esperada: 8.0");
        System.out.println("Media real: " + aParam.getMedia());

        Alumno[] alumnos = new Alumno[3];

        alumnos[0] = aVacio;
        alumnos[1] = aParam;
        alumnos[2] = new Alumno("0003", "TestArray", 22);
        alumnos[2].setNotas(new int[]{4, 6, 8});

        for (Alumno a : alumnos) {
            System.out.println(a);
        }

        Scanner sc = new Scanner(System.in);
        System.out.print("Introduce un NIA: ");
        String niaBuscado = sc.nextLine();

        Alumno encontrado = buscarAlumnoPorNia(alumnos, niaBuscado);

        if (encontrado != null) {
            System.out.println("Alumno encontrado:");
            System.out.println(encontrado);
        } else {
            System.out.println("Alumno NO encontrado.");
        }

        sc.close();

    }

    public static Alumno buscarAlumnoPorNia(Alumno[] alumnos, String nia) {
        for (Alumno a : alumnos) {
            if (a.getNia().equals(nia)) {
                return a;
            }
        }
        return null;
    }
}
