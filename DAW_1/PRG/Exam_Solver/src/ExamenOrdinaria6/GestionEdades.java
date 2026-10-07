public class GestionEdades {

    public static void main(String[] args) {
        Integer edad = 25;
        Integer edadConAutoboxing = Integer.valueOf(25);
        Integer edadString = Integer.valueOf("30");
        int suma = edad + edadString;
        Integer sumaAutoboxing = Integer.valueOf(edad.intValue() + edadString.intValue());
        System.out.println("edad = " + edad);
        System.out.println("edadConAutoboxing = " + edadConAutoboxing);
        System.out.println("edadString = " + edadString);
        System.out.println("Suma (con autoboxing): " + sumaAutoboxing);
        System.out.println("Suma (sin autoboxing): " + suma);
    }
}
