package Examen_u_6;

import java.util.ArrayList;
import java.util.Iterator;

public class Ej_1 {

	public class item {
		private String name;
		private String unit;
		private int amount;
		private double unitPrice;
		
		public item(String name) {
			this.name = name;
		}
		public item(String name, String unitPrice, int amount, double price) {
			this.name = name;
			this.unitPrice = this.unitPrice;
			this.amount = amount;
			this.unitPrice = price;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getUnit() {
			return unit;
		}
		public void setUnit(String unit) {
			this.unit = unit;
		}
		public int getAmount() {
			return amount;
		}
		public void setAmount(int amount) {
			this.amount = amount;
		}
		public double getUnitPrice() {
			return unitPrice;
		}
		public void setUnitPrice(double unitPrice) {
			this.unitPrice = unitPrice;
		}
		
	}
	public class ShoppingList{
		
	private ArrayList<item> l = new ArrayList<item>();
		public ShoppingList(){
			
		}
		public ArrayList<item> getShoppingListByName(String name) {
			ArrayList<item> nw = new ArrayList<item>();
			for (int i = 0; i<l.size(); i++) {
				if(l.get(i).name == name) {
					item item = l.get(i);
					nw.add(item);
				}
				
			}
			return nw;
			
		}

		
	}
	
	
}
