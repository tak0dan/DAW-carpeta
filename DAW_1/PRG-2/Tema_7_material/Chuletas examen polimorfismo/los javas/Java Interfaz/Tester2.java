package Ejercicio10;

public class Tester2 {
    public static void main(String[] args) {


        Invoice invoice1 = new Invoice(1001, 1000.0, 21);  
        Invoice invoice2 = new Invoice(1002, 500.0, 10);   

        CommissionEmploye ce1 = new CommissionEmploye("123-45-6789", "Ana García", 1500.0, 3000.0, 0.05);
        CommissionEmploye ce2 = new CommissionEmploye("987-65-4321", "Luis Pérez", 1200.0, 5000.0, 0.08);

        HourlyEmployee he1 = new HourlyEmployee("111-22-3333", "María López", 15.0, 160);
        HourlyEmployee he2 = new HourlyEmployee("444-55-6666", "Carlos Ruiz", 20.0, 80);

       
      
        System.out.println(invoice1);
        System.out.println(invoice2);
        System.out.println(ce1);
        System.out.println(ce2);
        System.out.println(he1);
        System.out.println(he2);
        System.out.println();
        
        
       
        System.out.println( invoice1.getAmountToPay());
        System.out.println( invoice2.getAmountToPay());
        System.out.println( ce1.getAmountToPay());
        System.out.println( ce2.getAmountToPay());
        System.out.println( he1.getAmountToPay());
        System.out.println( he2.getAmountToPay());
        System.out.println();

     
        System.out.println( invoice1.getNumber());
        System.out.println( invoice1.getVATPercent());
        System.out.println (ce1.getSSN());
        System.out.println(ce1.getName());
        System.out.println( ce1.getBaseSalary());
        System.out.println( ce1.getCommission());
        System.out.println( he1.getWage());
        System.out.println( he1.getHours());
        System.out.println();

     
        ce1.setBaseSalary(2000.0);
        ce1.setSales(4000.0);
        System.out.println(ce1.getAmountToPay());

        he1.setWage(18.0);
        he1.setHours(200);
        System.out.println(he1.getAmountToPay());
        System.out.println();

        
    }
}
