package Payable_adecuado;

public class Empleado_comision extends Empleado {
    private double sueldoBase;
    private double ventas;
    private double comision;

    public Empleado_comision(String dni, String nombre, double sueldoBase, double ventas, double comision) {
        super(dni, nombre);
        this.sueldoBase = sueldoBase;
        this.ventas = ventas;
        this.comision = comision;
    }

    @Override
    public double obtenerImporteAPagar() {
        return sueldoBase + (ventas * comision);
    }

    public double getSueldoBase() { return sueldoBase; }
    public void setSueldoBase(double sueldoBase) { this.sueldoBase = sueldoBase; }

    public double getVentas() { return ventas; }
    public void setVentas(double ventas) { this.ventas = ventas; }

    public double getComision() { return comision; }
    public void setComision(double comision) { this.comision = comision; }

    @Override
    public String toString() {
        return super.toString() + " / Tipo: Comision / Total a soltar: " + obtenerImporteAPagar();
    }
}