package Payable_adecuado;

public class Empleado_por_horas extends Empleado {
    private double precioHora;
    private int horasCurradas;

    public Empleado_por_horas(String dni, String nombre, double precioHora, int horasCurradas) {
        super(dni, nombre);
        this.precioHora = precioHora;
        this.horasCurradas = horasCurradas;
    }

    @Override
    public double obtenerImporteAPagar() {
        return precioHora * horasCurradas;
    }

    public double getPrecioHora() { return precioHora; }
    public void setPrecioHora(double precioHora) { this.precioHora = precioHora; }

    public int getHorasCurradas() { return horasCurradas; }
    public void setHorasCurradas(int horasCurradas) { this.horasCurradas = horasCurradas; }

    @Override
    public String toString() {
        return super.toString() + " / Tipo: Por Horas / Total a soltar: " + obtenerImporteAPagar();
    }
}