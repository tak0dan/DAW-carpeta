package tema6;
import java.util.Random;
public class Fraccion_tester {
	public static void main(String[] args) {
		Random r = new Random();
		Fraccion f = new tema6.Fraccion(0, 0);
		f.setDen(0);
		f.setNum(0);
		f.simplificarF();
		System.out.println(f.toString());
		f.setDen(r.nextInt(-50,700));
		f.setNum(r.nextInt(-50,700));
		System.out.println(f.toString());

		f.simplificarF();
		System.out.println(f.toString());
		Fraccion f1 = new tema6.Fraccion(r.nextInt(-10,100),r.nextInt(-10, 100));
		Fraccion f2 = f.sumarF(f1);
		System.out.println(f2.toString());
		
		
		Fraccion f21  = new Fraccion(r.nextInt(-10,100),r.nextInt(-10, 100));
		Fraccion f12 = new Fraccion(r.nextInt(-10,100),r.nextInt(-10, 100));

		Fraccion f22 = f.sumarF(f1);

		System.out.println(f21);   // 1/2
		System.out.println(f12);  // 1/3
		System.out.println(f22);  // 5/6

	}
}
