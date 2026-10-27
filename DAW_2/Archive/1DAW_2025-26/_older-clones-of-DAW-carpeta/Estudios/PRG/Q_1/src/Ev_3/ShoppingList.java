package Ev_3;

import java.awt.event.ItemEvent;
import java.util.ArrayList;

import Ev_3.Ej_1.Item;

public class ShoppingList {

	private ArrayList<Item> l = new ArrayList<Item>();
	
	public ArrayList<Item> getShoppingListByAName(String name){
		ArrayList<Item>nw = new ArrayList<Item>();
		for(int i = 0; i<l.size(); i++) {
			if(l.get(i).getName() == name) {
				nw.add(l.get(i));
			}
		}
		
		return nw;
	}
	
	public double getTotalMoney() {
		Double moneyTotal = 0.0;
		for (int i = 0; i < l.size(); i++) {
			moneyTotal = moneyTotal + (l.get(i).getUnitPrice()*l.get(i).getAmount());
		}
		
		return (double)moneyTotal;
	}
	
	public void addItem(Item item) {
		l.add(item);
	}
	
	public void removeItems(String name) {
		for (int i = 0; i < l.size(); i++) {
			if(l.get(i).getName() == name) {
				l.remove(l.get(i));
				i--;
			}
		}
	}
	
}
