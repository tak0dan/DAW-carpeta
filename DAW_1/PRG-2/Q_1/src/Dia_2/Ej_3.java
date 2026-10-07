package Dia_2;

public class Ej_3 {

	class StudentSchool {
		private String name;
		private int rollNo;
		private static String schoolName;
		// static counter to set unique roll no
		private static int counter = 0;

		public StudentSchool(String name){
			this.name = name;
			this.rollNo = ++counter; 
		}
	
		public static void setSchool(String name) { 
			schoolName = name; }

		public void printStudentInfo() {
			System.out.println("name : " + this.name);
			System.out.println("rollNo : " + this.rollNo);
			System.out.println("schoolName : " + schoolName);
		}
	}
class StudentSchoolTester{
		public static void main(String args[]){

		}
}

	
}
