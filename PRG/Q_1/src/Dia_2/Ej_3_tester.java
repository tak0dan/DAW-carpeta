package Dia_2;

import Dia_2.Ej_3.StudentSchool;

class Ej_3_tester{
    public static void main(String args[]){

        Ej_3 outer = new Ej_3();

        Ej_3.StudentSchool student1 = outer.new StudentSchool("Nikita");
        Ej_3.StudentSchool student2 = outer.new StudentSchool("Anna"); 

        Ej_3.StudentSchool.setSchool("Juan de Garay");

        student1.printStudentInfo();
        System.out.println("****************");
        student2.printStudentInfo();
    }
}
