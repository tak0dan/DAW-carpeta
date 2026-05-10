package Ejercicio10;

public  class Invoice implements Payable{
    private int number;
    private double totalAmountVAT;
    private int VATPercent;

    public Invoice(int number, double totalAmountVAT, int VATPercent) {
        this.number = number;
        this.totalAmountVAT = totalAmountVAT;
        this.VATPercent = VATPercent;
    }

    @Override
    public double getAmountToPay() {
        return totalAmountVAT * (1 + VATPercent / 100.0);
    }

    public int getNumber() { return number; }
    public double getTotalAmountVAT() { return totalAmountVAT; }
    public int getVATPercent() { return VATPercent; }

    public void setNumber(int number) { this.number = number; }
    public void setTotalAmountVAT(double totalAmountVAT) { this.totalAmountVAT = totalAmountVAT; }
    public void setVATPercent(int VATPercent) { this.VATPercent = VATPercent; }

    @Override
    public String toString() {
        return "Invoice [number=" + number + ", totalAmountVAT=" + totalAmountVAT +
               ", VATPercent=" + VATPercent + ", amountToPay=" + getAmountToPay() + "]";
    }
}

	

