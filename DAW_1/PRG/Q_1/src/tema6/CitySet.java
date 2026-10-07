package tema6;

import java.util.ArrayList;

public class CitySet {
	private ArrayList<City> l = new ArrayList<City>();
	
	public CitySet() {
		
	}
	public void addCity(City c) {
		if(!l.contains(c))
		l.add(c);
	}
	public City removeCity(int pos) {
		City c=null;
		if(pos < l.size()||pos>=0) {
			c = l.remove(pos);
		}
		
		return null;
		
	}
	
	public void displayNumberCities() {
		System.out.println("Number of cities in the list is "+l.size());
	}
	
	public long totalPopulation() {
		long res = 0;
		/*for(int i = 0; i<l.size(); i++) {
			
			res = res + l.get(i).getPoblacion();
		}*/
		for(City city : l) {
			city.getPoblacion();
		}
		
		
		return res;
	}
	
	public void printPoblacionMayor() {
		long maxpopulation = 0;
		City c = null;
		for(City city : l) {
			if (maxpopulation < city.getPoblacion()) {
				maxpopulation = city.getPoblacion();
				c = city;
			}
		}
		System.out.println("Max population has " + c.getNombre() + ". It has a population of " + c.getPoblacion()+"." );
	}
	
	public void displayCitiesinAProvince(int b) {
		System.out.println("Selected province is "+b);
		int counter = 0;
		for(City city : l) {
			if(city.getProvincia() == b) {
				counter = counter + 1;
				System.out.println("NAME = "+city.getNombre());
				System.out.println("POPULATION = "+city.getPoblacion());
				System.out.println("----------------------------------------");
			}
		}
		if(counter == 0) {
			System.out.println("Cities in this province are not found.");
		}
	}
	
	
	@Override
	public String toString() {
		return "CitySet [l=" + l + ", totalPopulation()=" + totalPopulation() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	

	
}
