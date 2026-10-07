package Ev_2;

 
import java.util.ArrayList;

import Clases_y_UML.Person;
import Clases_y_UML.Staff;
import Clases_y_UML.Student;


public class PersonTester {
	
	public static int countStudentsInAProgram(ArrayList<Person>l, String program) {
		int counter=0;
		for (int i = 0; i<l.size(); i++) {
			
			if(l.get(i) instanceof Student) {
				Student student = (Student) l.get(i);
				if (student.getProgram()==program) {
					counter ++;
				}
			}
		}
		
		return counter;
		
	}
	
	public static void showStaff(ArrayList<Person> l) {
		for (int i = 0; i < l.size(); i++) {
			Person p = l.get(i);
			if (p instanceof Staff ) {
				Staff s=(Staff)p;

				if (!s.getSchool().equals("Abastos"))
					System.out.println(s);
			}

		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ArrayList<Person> p = new ArrayList<Person>();
		p.add(new Student("Mario", "Calle", "DAW", 1, 200));
		p.add(new Student("Anne", "Avenida", "DAM", 2, 200));
		p.add(new Staff("Iván", "Calle", "Abastos", 2500));
		p.add(new Student("Pepe", "Calle", "DAW", 2, 230));
		p.add(new Student("Peter", "Avenida", "ASIR", 1, 200));
		p.add(new Staff("Elena", "fhasdjklh", "IES Juan de Garay", 2900));
		p.add(new Staff("Pascual", "fhasdjklh", "IES Juan de Garay", 2900));

		showStaff(p);
		//    System.out.println(countStudentsInAProgram(p, "DAW"));

		System.out.println(countStudentsInAProgram(p, "DAW"));
		
	}
}
