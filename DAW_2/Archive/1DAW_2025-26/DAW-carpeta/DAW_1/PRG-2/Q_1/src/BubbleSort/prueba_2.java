package BubbleSort;

public class prueba_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 int []v=new int[555];

		 long tiempo=0;

		 

		 for(int i=1; i<10; i++) {

		 

		 MetodosA.llenarArrayRandom(v, 1, 99);

		 long t1 = System.currentTimeMillis();

		 MetodosA.Timsort.timsort(v,0);

		 long t2 = System.currentTimeMillis();

		 tiempo+=(t2-t1);

		 

		 }

		 System.out.println("Tiempo medio de ejecución de algoritmo con "+v.length+" elementos.");

		 System.out.println(tiempo/10 + "ms");
	}

}
