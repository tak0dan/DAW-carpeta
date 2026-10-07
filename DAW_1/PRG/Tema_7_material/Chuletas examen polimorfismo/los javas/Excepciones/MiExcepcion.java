package ProbandoExcepciones;

public class MiExcepcion extends Exception {


		public MiExcepcion() {
			super("Me cachis");
		}
	
		
		public MiExcepcion(String message) {
			super(message);
		}

}
