package Examen;

public class Aparcamiento_Tester {

	public static void main(String[] args) {
		
		Aparcamiento apkm = new Aparcamiento();
		
			/*
			 MAIN 1 
			 */
		System.out.println("MAIN 1");
	        apkm.anyadirPlaza(new PlazaAparcamiento(0));
	        apkm.anyadirPlaza(new PlazaAparcamiento(3, false, "abc123" ));
	        
	        
			/*
			 MAIN 2 
			 */  
	        apkm.anyadirPlaza(new PlazaAparcamiento(3, true, "abd124"));
	        apkm.anyadirPlaza(new PlazaAparcamiento(3, true, "aba124"));
	        apkm.anyadirPlaza(new PlazaAparcamiento(4, true, "aba124"));


	        System.out.println(apkm.plazasOcupadas());
	        System.out.println(apkm.plazasLibres());

	        System.out.println(apkm);
	    
	        System.out.println("MAIN 2");
	        Aparcamiento aparcamiento = new Aparcamiento();
	        aparcamiento.anyadirPlaza(new PlazaAparcamiento(1, false, "abd124"));
	        aparcamiento.anyadirPlaza(new PlazaAparcamiento(2, false, "abd124"));
	        aparcamiento.anyadirPlaza(new PlazaAparcamiento(3, false, "abd124"));
	        aparcamiento.anyadirPlaza(new PlazaAparcamiento(4, false, "abd124"));
	        aparcamiento.anyadirPlaza(new PlazaAparcamiento(5, false, "abd124"));
	        System.out.println(aparcamiento.plazasOcupadas());
	        System.out.println(aparcamiento.plazasLibres());

	        System.out.println(aparcamiento);

	        aparcamiento.aparcarVehiculo("aaa");
	        aparcamiento.aparcarVehiculo("bbb");
	        aparcamiento.aparcarVehiculo("aaa");
	        aparcamiento.aparcarVehiculo("c12");
	        aparcamiento.aparcarVehiculo("b23");
	        System.out.println(aparcamiento.plazasOcupadas());
	        System.out.println(aparcamiento.plazasLibres());

	        System.out.println(aparcamiento);

	        aparcamiento.liberarVehiculo("aaa");
	        System.out.println(aparcamiento.plazasOcupadas());
	        System.out.println(aparcamiento.plazasLibres());

	        System.out.println(aparcamiento);

	}
}
