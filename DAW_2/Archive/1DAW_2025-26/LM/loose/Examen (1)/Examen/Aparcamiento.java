package Examen;
import Examen.PlazaAparcamiento;
import java.util.ArrayList;
public class Aparcamiento {

	private ArrayList<PlazaAparcamiento> plazas;

	public Aparcamiento() { plazas = new ArrayList<>(); }


	public void anyadirPlaza(PlazaAparcamiento p) {
		boolean matches = false;
		for (PlazaAparcamiento plazaAparcamiento : plazas) {
			if(plazaAparcamiento.getNumero() == p.getNumero()) {
				matches = true;
			}
		}
		if(matches==false) {
			plazas.add(p);
		}
	}

	public PlazaAparcamiento buscarPlaza(int numero) {
		int numero_p;
		numero_p = numero;
		PlazaAparcamiento plz = null;
		for (PlazaAparcamiento plazaAparcamiento : plazas) {
			if(plazaAparcamiento.getNumero() == numero_p) {
				plz = plazaAparcamiento;
			}
		}
		return plz;
	}

	public int plazasLibres() {
		int cantidad_libres = 0;
		for (PlazaAparcamiento plazaAparcamiento : plazas) {
			if(plazaAparcamiento.estaOcupada(plazaAparcamiento.getNumero())==false) {
				cantidad_libres = cantidad_libres + 1;
			}
		}
		return cantidad_libres;
	}

	public int plazasOcupadas() {
		int cantidad = 0;
		for (PlazaAparcamiento plazaAparcamiento : plazas) {
			if(plazaAparcamiento.estaOcupada(plazaAparcamiento.getNumero())==true) {
				cantidad = cantidad + 1;
			}
		}
		return cantidad;
	}

	public boolean aparcarVehiculo(String matricula) {
		boolean aparcado = false;
		for (PlazaAparcamiento plazaAparcamiento : plazas) {
			if(plazaAparcamiento.estaOcupada(plazaAparcamiento.getNumero())==false) {
				plazaAparcamiento.aparcarVehiculo(matricula);
				aparcado = true;
				break;
			}
		}
		return aparcado;
	}

	public void liberarVehiculo(String matricula) {
		for (PlazaAparcamiento plazaAparcamiento : plazas) {
			if(plazaAparcamiento.getMatriculaVehiculo().equals(matricula)) {
				plazaAparcamiento.liberarPlaza(matricula);
			}
		}

	}

	@Override
	public String toString() {
		return "Aparcamiento [plazas=" + plazas + ", plazasLibres()=" + plazasLibres() + ", plazasOcupadas()="
				+ plazasOcupadas() + "]";
	}




}
