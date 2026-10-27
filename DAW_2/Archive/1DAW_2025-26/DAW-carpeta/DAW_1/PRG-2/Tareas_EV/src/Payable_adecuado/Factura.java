package Payable_adecuado;

public class Factura implements Payable {
    private int numeroFactura;
    private double importeSinIva;
    private int porcentajeIva;

    public Factura(int numeroFactura, double importeSinIva, int porcentajeIva) {
        this.numeroFactura = numeroFactura;
        this.importeSinIva = importeSinIva;
        this.porcentajeIva = porcentajeIva;
    }

    @Override
    public double obtenerImporteAPagar() {
        
        double impuesto = importeSinIva * (porcentajeIva / 100.0);
        return importeSinIva + impuesto;
    }

    public int getNumeroFactura() { return numeroFactura; }
    public void setNumeroFactura(int numeroFactura) { this.numeroFactura = numeroFactura; }

    public double getImporteSinIva() { return importeSinIva; }
    public void setImporteSinIva(double importeSinIva) { this.importeSinIva = importeSinIva; }

    public int getPorcentajeIva() { return porcentajeIva; }
    public void setPorcentajeIva(int porcentajeIva) { this.porcentajeIva = porcentajeIva; }

    @Override
    public String toString() {
        return "Factura numero " + numeroFactura + " / Total con IVA: " + obtenerImporteAPagar();
    }
}