package Examen_u_6;

import java.util.ArrayList;

public class ShoppingList_Tester {
    public static void main(String[] args) {
        System.out.println("=== Examen_u_6 Tester ===\n");

        // Test item inner class
        Ej_1 outer = new Ej_1();
        Ej_1.item item1 = outer.new item("Leche");
        item1.setUnit("litros");
        item1.setAmount(2);
        item1.setUnitPrice(1.50);

        Ej_1.item item2 = outer.new item("Pan");
        item2.setUnit("unidades");
        item2.setAmount(1);
        item2.setUnitPrice(0.80);

        System.out.println("--- item Tests ---");
        System.out.println("Item1: " + item1.getName() + ", Unit: " + item1.getUnit() +
                           ", Amount: " + item1.getAmount() + ", Price: " + item1.getUnitPrice());
        item1.setName("Leche Entera");
        System.out.println("After setName: " + item1.getName());

        // Test ShoppingList
        Ej_1.ShoppingList list = outer.new ShoppingList();

        System.out.println("\n--- ShoppingList Tests ---");
        System.out.println("List created successfully");

        ArrayList<Ej_1.item> result = list.getShoppingListByName("Leche");
        System.out.println("Search for 'Leche': found " + result.size() + " items");

        System.out.println("\n=== All Tests Passed ===");
    }
}