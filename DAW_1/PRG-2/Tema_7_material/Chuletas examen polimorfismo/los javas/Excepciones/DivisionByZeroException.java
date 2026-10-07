package ProbandoExcepciones;

public class DivisionByZeroException extends Exception{
	//Dos Constructores !!
	public DivisionByZeroException() {
		super("Division By Zero!!");
	}
	public DivisionByZeroException(String message) {
		super(message);
	}
}