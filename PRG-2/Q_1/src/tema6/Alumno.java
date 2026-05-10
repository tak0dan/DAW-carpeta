package tema6;

import java.util.Arrays;

public class Alumno {

    private String nia;
    private String nombre;
    private int edad;
    private int[] notas;

        public Alumno() {
        this.notas = new int[3]; 
    }

    public Alumno(String nia, String nombre, int edad) {
        this.nia = nia;
        this.nombre = nombre;
        this.edad = edad;
        this.notas = new int[3];
    }

    // 🔹 Getters y setters
    public String getNia() {
        return nia;
    }

    public void setNia(String nia) {
        this.nia = nia;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int[] getNotas() {
        return notas;
    }

    public void setNotas(int[] notas) {
        if (notas.length == 3) {
            this.notas = notas;
        }
    }

    public void setNota(int posicion, int nota) {
        if (posicion >= 0 && posicion < 3) {
            notas[posicion] = nota;
        }
    }

    public double getMedia() {
        int suma = 0;
        for (int nota : notas) {
            suma += nota;
        }
        return (double) suma / notas.length;
    }

    @Override
    public String toString() {
        return "Alumno{" +
                "NIA='" + nia + '\'' +
                ", nombre='" + nombre + '\'' +
                ", edad=" + edad +
                ", notas=" + Arrays.toString(notas) +
                ", media=" + getMedia() +
                '}';
    }
}
