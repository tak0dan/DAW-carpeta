package Payable_adecuado;

import java.util.LinkedList;
import java.util.Iterator;
import java.util.ListIterator;

public class Payable_tester {

  
    public static double sumaTotal(LinkedList<Payable> lista) {
        double totalPelas = 0;
        Iterator<Payable> it = lista.iterator();
        while (it.hasNext()) {
            totalPelas = totalPelas + it.next().obtenerImporteAPagar();
        }
        return totalPelas;
    }

    
    public static void subirSueldoComisionistas(LinkedList<Payable> lista, double porcentaje) {
        for (Payable p : lista) {
            if (p instanceof Empleado_comision) {
                Empleado_comision ec = (Empleado_comision) p; 
                double sueldoDeAhora = ec.getSueldoBase();
                double extra = sueldoDeAhora * (porcentaje / 100.0);
                ec.setSueldoBase(sueldoDeAhora + extra);
            }
        }
    }

    public static void main(String[] args) {
        LinkedList<Payable> miLista = new LinkedList<>();

        miLista.add(new Empleado_por_horas("67676767Y", "ISmael", 15, 40));
        miLista.add(new Empleado_por_horas("80888703J", "Luis", 20, 35));
        miLista.add(new Empleado_por_horas("54983474P", "Marc", 18, 45));
        
        
        
        miLista.add(new Empleado_comision("42789084T", "Juan el Rapido", 1000, 500, 0.1));
        miLista.add(new Empleado_comision("12789014E", "Maria siempre Si", 1200, 400, 0.2));
        miLista.add(new Empleado_comision("67766776T", "Pedro el Ventas", 1100, 600, 0.15));

       
        
        miLista.add(new Factura(5001, 200, 21));
        miLista.add(new Factura(5002, 150, 10));
        miLista.add(new Factura(5003, 300, 21));
        miLista.add(new Factura(5004, 100, 4));

        System.out.println("Lista al reves:");
        ListIterator<Payable> li = miLista.listIterator(miLista.size());
        while (li.hasPrevious()) {
            System.out.println(li.previous().toString());
        }

        System.out.println("Total a pagar antes: " + sumaTotal(miLista));

       
        subirSueldoComisionistas(miLista, 10.0);
        System.out.println("Aumento del 10% aplicado a los comerciales.");

        System.out.println("Total a pagar ahora: " + sumaTotal(miLista));
    }
}