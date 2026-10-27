package examen.generado;


public class Cuenta {

    private String numCuenta;
    private double saldo;

    public Cuenta() {
        this.numCuenta = null;
        this.saldo = 0.0;
    }

    public void sacarDinero(double cantidad) {
        // TODO
    }

    public void hacerTransferencia(Cuenta destino, double cantidad) {
        // TODO
    }

    public void cancelarCuenta(Cuenta destino) {
        // TODO
    }

    public static void main(String[] args) {
        String numCuenta = "valor";
        double saldo = 0.0;
        void result = sacarDinero(3.14);
        void result = hacerTransferencia(null, 3.14);
        void result = cancelarCuenta(null);
    }

}
