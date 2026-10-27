package ProbandoPilas;

import java.util.Stack;

public class Probar_Pilas {
	public static void main(String[] args) {
		/*
		Stack <Integer> s = new Stack <Integer>();
		
		s.push(5);
		s.push(10);
		s.push(15);
		s.push(20);
		
		// apilo con push (para guardar cosillas numeritos)

		
		System.out.println(s);
		
		while(!s.empty()) {
			System.out.println(s.pop());
			System.out.println("pila: " + s);
		}
		*/
	   // y desapilo con pop
	
		
		
		Stack <Character> a = new Stack <Character>();
		/*
		a.push('A');
		a.push('E');
		a.push('I');
		a.push('O');
		
		// apilo con push
		
		
		System.out.println(a);
		
		while(!a.empty()) {
			System.out.println(a.pop());
			//System.out.println("pila: " + a);
		}
		*/
		
		String exp1= "[((2+4+5}"; // correcta
		String exp2= "[((]"; // fallo num 1: emparejamiento fallido
		String exp3= "(()))"; // fallo num 2: se me ha acabado la pila cierro uno que no abri
		String exp4= "(()"; // fallo num 3: termino la exp y me quedan parentesis en la pila
		String exp5= ")";
		
		boolean valido = true;
		
		for (int i = 0; i < exp5.length(); i++) {
			char c=exp5.charAt(i);
			
			
			if (c=='(' || c=='[' || c=='{' ) 
				a.push(c);			
			else if (c==')' || c==']' || c=='}' ) {
				 
				 if (a.isEmpty()) {
					 	valido = false;
			            System.out.println("Fallo num 2: se me ha acabado la pila cierro uno que no abri" );
				 }
				 
				 else {
					 char c2 = a.pop(); // desapilo la última apertura
				 
			       
			        if ((c == ')' && c2 != '(') ||
			            (c == ']' && c2 != '[') ||
			            (c == '}' && c2 != '{')) {
			            valido = false;
			            System.out.println("Fallo 1: emparejamiento fallido abrí " + c2 + " pero cierro con " + c);
			        }
				 }
			}
		
		}
		
		if (!a.isEmpty()) {
			System.out.println("fallo num 3: termino la exp y me quedan parentesis en la pila");
			valido = false;
			}
		
		
		
	}
}
