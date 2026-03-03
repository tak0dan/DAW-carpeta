package tema6;

public class CitySetTester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		CitySet cities = new CitySet();
		City c1 = new City("Valencia", 900000,48);
		City c2 = new City("Barcelona", 2300000,8);
		City c3 = new City("Castellon", 1300000,48);
		
		cities.addCity(c1);
		cities.addCity(c3);
		cities.addCity(c2);
		
		System.out.println(cities);
		cities.printPoblacionMayor();
		cities.displayCitiesinAProvince(12);
	}

}
