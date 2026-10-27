package Ejercicio10;

import java.util.LinkedList;
import java.util.Iterator;

public class PayableTester {

    public static double totalToPay(LinkedList<Payable> l) {
        double total = 0;
        Iterator<Payable> it = l.iterator();
        while (it.hasNext()) {
            Payable p = it.next();
            total += p.getAmountToPay();
        }
        return total;
    }

    public static void incrementBaseSalaryOfCommissionEmployee(LinkedList<Payable> l, double percent) {
    	Iterator<Payable> it = l.iterator();
    	while (it.hasNext()) {
    	    Payable p = it.next();
    	    if (p instanceof CommissionEmploye ce) { 
    	        ce.setBaseSalary(ce.getBaseSalary() * (1 + percent / 100.0));
    	    }
    	}
    }

    public static void main(String[] args) {

        LinkedList<Payable> lista = new LinkedList<>();

        lista.add(new Invoice(1001, 1000.0, 21));
        lista.add(new Invoice(1002, 500.0,  10));

        lista.add(new CommissionEmploye("111", "Ana García",  1500.0, 3000.0, 0.05));
        lista.add(new CommissionEmploye("222", "Luis Pérez",  1200.0, 5000.0, 0.08));

        lista.add(new HourlyEmployee("333", "María López", 15.0, 160));
        lista.add(new HourlyEmployee("444", "Carlos Ruiz", 20.0,  80));

        System.out.println("Total a pagar");
        double total = totalToPay(lista);
        System.out.println(total);
        System.out.println();

        System.out.println("Incremento Salario");
        System.out.println("Antes");
        for (int i = 0; i < lista.size(); i++) {
            if (lista.get(i) instanceof CommissionEmploye) {
                CommissionEmploye ce = (CommissionEmploye)lista.get(i);
                System.out.println(ce.getBaseSalary());
            }
        }

        incrementBaseSalaryOfCommissionEmployee(lista, 10.0);
        System.out.println();

        System.out.println("Después");
        for (int i = 0; i < lista.size(); i++) {
            if (lista.get(i) instanceof CommissionEmploye) {
                CommissionEmploye ce = (CommissionEmploye) lista.get(i);
                System.out.println(ce.getName());
                System.out.println(ce.getBaseSalary());
            }
        }
        // Ana:  1500 * 1.10 = 1650
        // Luis: 1200 * 1.10 = 1320

        System.out.println();
        System.out.println(totalToPay(lista));
    }
}