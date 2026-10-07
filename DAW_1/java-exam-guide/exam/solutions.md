**Comprehensive Java Guide + Complete Solutions for Both Exams (A and B)**

---

### **1. SOLUTIONS – EXAM T6_A**

#### **a. Clase Alumno**
```java
public class Alumno {
    private String dni;
    private String nombre;
    private double notaMedia;
    private boolean beca;

    public Alumno(String dni, String nombre) {
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = 0.0;
        this.beca = false;
    }

    // Getters y setters (necesarios para los métodos de Grupo)
    public String getDni() { return dni; }
    public String getNombre() { return nombre; }
    public double getNotaMedia() { return notaMedia; }
    public boolean isBeca() { return beca; }
    public void setNotaMedia(double notaMedia) { this.notaMedia = notaMedia; }
    public void setBeca(boolean beca) { this.beca = beca; }

    @Override
    public String toString() {
        return "Alumno [dni=" + dni + ", nombre=" + nombre +
               ", notaMedia=" + notaMedia + ", beca=" + beca + "]";
    }
}
```

#### **b. Clase Grupo**
```java
import java.util.ArrayList;

public class Grupo {
    public static final int MAX_ESTUDIANTES = 30; // Constante estática
    private String nombre;
    private ArrayList<Alumno> alumnos;

    public Grupo(String nombre) {
        this.nombre = nombre;
        this.alumnos = new ArrayList<>();
    }

    public boolean anyadirAlumno(Alumno a) {
        // No existe alumno con mismo DNI y no lleno
        for (Alumno alum : alumnos) {
            if (alum.getDni().equals(a.getDni())) {
                return false;
            }
        }
        if (alumnos.size() >= MAX_ESTUDIANTES) {
            return false;
        }
        alumnos.add(a);
        return true;
    }

    public Alumno borrarAlumno(String dni) {
        for (int i = 0; i < alumnos.size(); i++) {
            if (alumnos.get(i).getDni().equals(dni)) {
                return alumnos.remove(i);
            }
        }
        return null;
    }

    public int getNumeroAlumnos() {
        return alumnos.size();
    }

    public double getNotaMedia() {
        if (alumnos.isEmpty()) return 0.0;
        double suma = 0.0;
        for (Alumno a : alumnos) {
            suma += a.getNotaMedia();
        }
        return suma / alumnos.size();
    }

    public void mostrarAlumnosConBeca() {
        for (Alumno a : alumnos) {
            if (a.isBeca()) {
                System.out.println(a);
            }
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("Grupo: " + nombre + "\n");
        for (int i = 0; i < alumnos.size(); i++) {
            sb.append((i + 1)).append(". ").append(alumnos.get(i)).append("\n");
        }
        return sb.toString();
    }
}
```

#### **c. Clase GrupoTester**
```java
public class GrupoTester {
    public static void main(String[] args) {
        Grupo g1 = new Grupo("1DAW");
        Grupo g2 = new Grupo("1ASIR");

        // Añadir 5 alumnos a 1DAW
        for (int i = 1; i <= 5; i++) {
            Alumno a = new Alumno("DNI" + i, "Alumno" + i);
            a.setNotaMedia(7.5 + i);
            if (i % 2 == 0) a.setBeca(true);
            g1.anyadirAlumno(a);
        }

        // Añadir 3 alumnos a 1ASIR
        for (int i = 6; i <= 8; i++) {
            Alumno a = new Alumno("DNI" + i, "Alumno" + i);
            a.setNotaMedia(6.0 + i);
            g2.anyadirAlumno(a);
        }

        // Pruebas
        System.out.println(g1);
        System.out.println("Número alumnos 1DAW: " + g1.getNumeroAlumnos());
        System.out.println("Nota media 1DAW: " + g1.getNotaMedia());
        System.out.println("Alumnos con beca en 1DAW:");
        g1.mostrarAlumnosConBeca();

        // Borrar
        Alumno borrado = g1.borrarAlumno("DNI2");
        System.out.println("Borrado: " + borrado);
    }
}
```

---

### **2. SOLUTIONS – EXAM T6_B**

#### **a. Clase Entrada**
```java
public class Entrada {
    private String codigo;
    private String tipo;
    private double precio;
    private boolean vendida;

    public Entrada(String codigo, String tipo) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.vendida = false;
        switch (tipo.toUpperCase()) {
            case "NORMAL": this.precio = 50; break;
            case "VIP": this.precio = 100; break;
            case "PALCO": this.precio = 200; break;
            default: this.precio = 50;
        }
    }

    public String getCodigo() { return codigo; }
    public String getTipo() { return tipo; }
    public double getPrecio() { return precio; }
    public boolean isVendida() { return vendida; }
    public void setVendida(boolean vendida) { this.vendida = vendida; }

    @Override
    public String toString() {
        return "Entrada [codigo=" + codigo + ", tipo=" + tipo +
               ", precio=" + precio + ", vendida=" + vendida + "]";
    }
}
```

#### **b. Clase Evento**
```java
import java.util.ArrayList;

public class Evento {
    private String nombre;
    private int aforoMaximo;
    private boolean cancelado;
    private ArrayList<Entrada> entradas;

    public Evento(String nombre, int aforoMaximo) {
        this.nombre = nombre;
        this.aforoMaximo = aforoMaximo;
        this.cancelado = false;
        this.entradas = new ArrayList<>();
    }

    public boolean agregarEntrada(Entrada e) {
        if (cancelado || entradas.size() >= aforoMaximo) return false;
        for (Entrada ent : entradas) {
            if (ent.getCodigo().equals(e.getCodigo())) return false;
        }
        entradas.add(e);
        return true;
    }

    public Entrada eliminarEntrada(String codigo) {
        for (int i = 0; i < entradas.size(); i++) {
            if (entradas.get(i).getCodigo().equals(codigo)) {
                return entradas.remove(i);
            }
        }
        return null;
    }

    public void venderEntrada(String codigo) {
        for (Entrada e : entradas) {
            if (e.getCodigo().equals(codigo)) {
                e.setVendida(true);
                return;
            }
        }
    }

    public double calcularRecaudacion() {
        double total = 0;
        for (Entrada e : entradas) {
            if (e.isVendida()) total += e.getPrecio();
        }
        return total;
    }

    public double calcularPorcentajeOcupacion() {
        int vendidas = 0;
        for (Entrada e : entradas) {
            if (e.isVendida()) vendidas++;
        }
        return (double) vendidas / aforoMaximo * 100;
    }

    public void cancelarEvento() {
        cancelado = true;
    }

    public void mostrarEntradasVIPVendidas() {
        for (Entrada e : entradas) {
            if ("VIP".equals(e.getTipo()) && e.isVendida()) {
                System.out.println(e);
            }
        }
    }

    public boolean estaEventoCompleto() {
        return entradas.size() >= aforoMaximo;
    }
}
```

#### **c. Clase EventoTester**
```java
public class EventoTester {
    public static void main(String[] args) {
        Evento ev = new Evento("Concierto", 10);

        // 6 entradas, mayoría vendidas
        for (int i = 1; i <= 6; i++) {
            Entrada e = new Entrada("E" + i, i % 3 == 0 ? "VIP" : "NORMAL");
            ev.agregarEntrada(e);
            if (i <= 4) ev.venderEntrada("E" + i);
        }

        System.out.println("Recaudación: " + ev.calcularRecaudacion());
        System.out.println("Ocupación: " + ev.calcularPorcentajeOcupacion() + "%");
        ev.mostrarEntradasVIPVendidas();
        System.out.println("Completo: " + ev.estaEventoCompleto());
    }
}
```

---

### **EXAM 2 & 4 – CONVERSIONS (EXPLICIT, NO AUTOBOXING)**

**Exam A – punto 2**
```java
String texto = "25";
// 1.
Integer enteroObj = Integer.valueOf(texto);
// 2.
int primitivo = enteroObj.intValue();
// 3.
Double dobleObj = Double.valueOf(primitivo);
// 4.
String resultado = dobleObj.toString();

System.out.println("Resultado final: " + resultado);
```

**Exam B – punto 4** (similar, con Float)
```java
String numeroTexto = "42";
// 1.
Integer enteroObj = Integer.valueOf(numeroTexto);
// 2.
int primitivo = enteroObj.intValue();
// 3.
Float floatObj = Float.valueOf(primitivo);
// 4.
String resultado = floatObj.toString();

System.out.println("Resultado final: " + resultado);
```

---

### **EXAM 3 – AUTOBOXING / UNBOXING**

**Exam A – punto 3**
```java
public static Double calcular(Integer a, Double b) {
    double res = a + b;           // Unboxing: a→int, b→double
    return res;                   // Autoboxing: double→Double
}

public static void main(String[] args) {
    Integer[] datos = {2, 4, 6};  // Autoboxing en array literal
    Double acumulado = 0.0;       // Autoboxing
    for (int i = 0; i < datos.length; i++) {
        acumulado += datos[i];    // Unboxing datos[i] + Autoboxing resultado
    }
    Double resultado = calcular(5, acumulado); // Autoboxing 5
    double finalRes = resultado + datos[2];    // Unboxing
    System.out.println("Resultado final: " + finalRes);
}
```

**Exam B – punto 3** (análogo, solo cambia nombres).

---

### **EXAM 4 – JUGADOR / SOCIO (ESTÁTICOS + CONTROL)**

**Jugador (Exam A)**
```java
public class Jugador {
    private String nombre;
    private boolean conectado;
    private static int jugadoresConectados = 0;

    public Jugador(String nombre) {
        this.nombre = nombre;
        this.conectado = true;
        jugadoresConectados++;
    }

    public void conectar() {
        if (!conectado) {
            conectado = true;
            jugadoresConectados++;
        }
    }

    public void desconectar() {
        if (conectado) {
            conectado = false;
            jugadoresConectados--;
        }
    }

    public static int getJugadoresConectados() {
        return jugadoresConectados;
    }

    @Override
    public String toString() {
        return nombre + (conectado ? " (conectado)" : " (desconectado)");
    }
}
```

**Tester Jugador**
```java
public class JugadorTester {
    public static void main(String[] args) {
        Jugador[] jugadores = new Jugador[5];
        for (int i = 0; i < 5; i++) {
            jugadores[i] = new Jugador("Jug" + i);
            System.out.println("Conectados: " + Jugador.getJugadoresConectados());
        }
        jugadores[1].desconectar();
        jugadores[3].desconectar();
        System.out.println("Conectados: " + Jugador.getJugadoresConectados());
        jugadores[1].conectar();
        System.out.println("Conectados: " + Jugador.getJugadoresConectados());
    }
}
```

**Socio (Exam B)** – idéntico, solo cambia nombres (`activo`, `totalCuotasSociosActivos`, `activar`/`desactivar`).

---

## **COMPREHENSIVE CONCEPTUAL GUIDE**

### **1. ARRAYS (Teoría → Certificación)**

**Teoría**
- Estructura **fija** de tamaño definido en creación.
- Almacena elementos del **mismo tipo**.
- Acceso O(1) por índice.
- Memoria contigua → buen rendimiento caché.

**Creación y uso básico**
```java
int[] arr = new int[5];           // Tamaño fijo
int[] inicial = {1, 2, 3, 4, 5};  // Inicializador
```

**Arrays multidimensionales**
```java
int[][] matriz = new int[3][4];
int[][] jagged = new int[3][];    // Filas de longitud variable
```

**Métodos útiles (java.util.Arrays) – Nivel OCP**
```java
Arrays.sort(arr);
Arrays.binarySearch(arr, 3);
Arrays.fill(arr, 0);
int[] copia = Arrays.copyOf(arr, arr.length);
boolean iguales = Arrays.equals(arr1, arr2);
String str = Arrays.toString(arr); // Muy útil para debug
```

**Trucos avanzados**
- `System.arraycopy` para copias rápidas.
- Uso con **varargs**: `public void metodo(int... nums)`
- Arrays como claves en `HashMap` → **NO recomendado** (usa `Arrays.hashCode`).

### **2. ARRAYLIST (Teoría → Certificación)**

**Ventajas sobre arrays**
- Tamaño **dinámico**.
- Métodos de colección (`add`, `remove`, `contains`, `indexOf`).

**Uso básico**
```java
ArrayList<String> lista = new ArrayList<>();
lista.add("Hola");
lista.remove(0);
lista.set(0, "Nuevo");
```

**Iteración eficiente (OCP)**
```java
// For-each (recomendado)
for (String s : lista) { ... }

// Iterator (para eliminar durante iteración)
Iterator<String> it = lista.iterator();
while (it.hasNext()) {
    if (it.next().length() > 5) it.remove();
}
```

**Capacidad inicial y crecimiento**
```java
new ArrayList<>(100); // Evita redimensionamientos frecuentes
```

**Métodos avanzados**
- `ensureCapacity(int)` – pre-reserva.
- `trimToSize()` – libera memoria.
- `subList(int, int)` – vista (cuidado con modificaciones).

**Rendimiento**
- `add` al final: amortizado O(1).
- `add` / `remove` en medio: O(n).
- `get` / `set`: O(1).

### **3. AUTOBOXING / UNBOXING**

**Concepto**
- Conversión automática entre **primitivos** y sus **wrappers** (`Integer`, `Double`, etc.).

**Ejemplos**
```java
Integer i = 5;        // Autoboxing
int prim = i;         // Unboxing

ArrayList<Integer> lista = new ArrayList<>();
lista.add(10);        // Autoboxing
int valor = lista.get(0); // Unboxing
```

**Peligros (OCP)**
- **NullPointerException** en unboxing: `Integer n = null; int x = n;`
- **Performance**: boxing/unboxing en bucles grandes es costoso.
- **Sobrecarga ambigua**: `metodo(int)` vs `metodo(Integer)`.

**Reglas de conversión**
```java
// Primitivo → Wrapper: valueOf()
Integer.valueOf(5);

// Wrapper → Primitivo: xxxValue()
int p = obj.intValue();
```

### **4. toString() – Construcción Profesional**

**Contrato**
- Debe ser **conciso**, **legible** y **útil** para debug.
- No lanzar excepciones.
- Consistente con `equals`/`hashCode` cuando sea relevante.

**Patrones recomendados**

**1. StringBuilder (mejor rendimiento)**
```java
@Override
public String toString() {
    return new StringBuilder("Alumno[")
        .append("dni=").append(dni)
        .append(", nombre=").append(nombre)
        .append("]").toString();
}
```

**2. Con colecciones (número de elementos)**
```java
@Override
public String toString() {
    return "Grupo{" +
           "nombre='" + nombre + '\'' +
           ", alumnos=" + alumnos.size() + // No imprimir todo si es grande
           '}';
}
```

**3. Formato JSON-like (útil en logs)**
```java
@Override
public String toString() {
    return String.format("Entrada{codigo=%s, tipo=%s, precio=%.2f, vendida=%b}",
                         codigo, tipo, precio, vendida);
}
```

**4. Con herencia (llamar super)**
```java
@Override
public String toString() {
    return super.toString() + "[extra=" + extra + "]";
}
```

**Mejores prácticas (OCP)**
- Usa `Objects.toString(obj, "null")` para evitar NullPointer.
- Evita referencias circulares.
- Para colecciones grandes → limita salida (`subList(0, Math.min(10, size))`).

---
