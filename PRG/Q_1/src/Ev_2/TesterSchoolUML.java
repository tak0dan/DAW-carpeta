package Ev_2;
import java.util.ArrayList;
import Clases_y_UML.Person;
import Clases_y_UML.Staff;
import Clases_y_UML.Student;
public class TesterSchoolUML {
	public static void main(String[] args) {
	ArrayList <Person> p = new ArrayList<Person>();
	

	p.add(new Student("Lucía Martínez", "Calle Mayor 12, Madrid", "Ingeniería Informática", 2, 1250.50));
	p.add(new Student("Carlos Gómez", "Av. Andalucía 45, Sevilla", "Administración de Empresas", 1, 980.75));
	p.add(new Student("Ana Rodríguez", "Gran Vía 101, Valencia", "Diseño Gráfico", 3, 1430.00));
	p.add(new Student("Miguel Herrera", "Calle Sol 8, Zaragoza", "Psicología", 4, 1100.25));
	p.add(new Student("Sofía Navarro", "Av. Libertad 23, Bilbao", "Arquitectura", 2, 1575.80));
	p.add(new Student("Javier Torres", "Paseo Colón 56, Málaga", "Derecho", 1, 1025.40));
	p.add(new Staff("Laura Sánchez", "Calle Prado 15, Madrid", "IES Cervantes", 2100.00));
	p.add(new Staff("Daniel Ruiz", "Av. Europa 32, Barcelona", "Colegio San Pablo", 1950.50));
	p.add(new Staff("Marta López", "Calle Luna 7, Valencia", "IES Mediterráneo", 2300.75));
	p.add(new Staff("Pedro Jiménez", "Paseo Norte 88, Sevilla", "Colegio Andalucía", 2050.25));
		
	Student s = (Student) p.get(1);
	System.out.println(s.getName());
		
	}
	
	public static void showStaff(ArrayList<Person> l) {
		for (int i = 0; i < l.size(); i++) {
			Person p = l.get(i);
			if (p /**/instanceof/**/ Staff ) {/*solo donde encuentre Staff*/
				Staff s=(Staff)p;

				if (!s.getSchool().equals("Abastos"))
					System.out.println(s);
			}

		}
	}
}
