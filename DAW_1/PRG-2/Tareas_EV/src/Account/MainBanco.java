package Account;

public class MainBanco {
    public static void main(String[] args) {
        Account cuenta1 = new Account("ESA1");
        Account cuenta2 = new Account("ESO2");
        cuenta1.depositMoney(100);

        try {
            cuenta1.doTransfer(cuenta2, 50);
            System.out.println(cuenta1.toString());
            System.out.println(cuenta2.toString());
            
            cuenta1.doTransfer(cuenta1, 10);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}