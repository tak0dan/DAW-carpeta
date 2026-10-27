package Subject;

import java.util.*;

public class Subject_tester {
    public static void main(String[] args) {

        List<Subject> subjects = new ArrayList<>();

        subjects.add(new Subject("Programming", 8));
        subjects.add(new Subject("Databases", 6));
        subjects.add(new Subject("Web Development", 7));
        subjects.add(new Subject("Operating Systems", 5));
        subjects.add(new Subject("Networking", 4));
        subjects.add(new Subject("Alguna asignatura", 3));
        subjects.add(new Subject("Project Management", 4));
        subjects.add(new Subject("Security", 6));

        System.out.println("=== BASIC LIST ===");
        printList(subjects);

        // Old-school removal (no lambda)
        Iterator<Subject> it = subjects.iterator();
        while (it.hasNext()) {
            Subject s = it.next();
            if (s.getWeek_hours() <= 4) {
                it.remove();
            }
        }

        System.out.println("\n=== AFTER REMOVING ===");
        printList(subjects);

        Collections.sort(subjects);

        System.out.println("\n=== SORTED LIST ===");
        printList(subjects);

        System.out.println("\n=== REVERSE ===");
        for (int i = subjects.size() - 1; i >= 0; i--) {
            System.out.println(subjects.get(i));
        }
    }

    private static void printList(List<Subject> list) {
        for (Subject s : list) {
            System.out.println(s);
        }
    }
}