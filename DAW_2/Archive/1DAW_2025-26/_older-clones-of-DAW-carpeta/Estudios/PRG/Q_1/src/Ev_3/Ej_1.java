package Ev_3;

import java.awt.image.PixelInterleavedSampleModel;

import tema6.clases_general;

public class Ej_1 {
	public class Item {
		private String name;
		private String unit;
		private int amount;
		private double unitPrice;
		
		public Item(String name) {
			this.name = name;
		}
		
		public Item(String name, String unit, int amount, double unitPrice) {
			this.amount = amount;
			this.name = name;
			this.unit = unit;
			this.unitPrice = unitPrice;
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

		@Override
		public String toString() {
			return "Item [name=" + name + ", unit=" + unit + ", amount=" + amount + ", unitPrice=" + unitPrice
					+ ", getName()=" + getName() + ", getUnit()=" + getUnit() + ", getAmount()=" + getAmount()
					+ ", getUnitPrice()=" + getUnitPrice() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
					+ ", toString()=" + super.toString() + "]";
		}

		
		
		
	}
	
}
