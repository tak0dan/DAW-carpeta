package Tema_3.Tareas3_4;

public class NullSafeComparator {
    public static <T extends Comparable<? super T>> int compare(T a, T b) {
        if (a == b) return 0;      // covers both null and identical reference
        if (a == null) return -1;  // null is smaller
        if (b == null) return 1;   // non-null is greater
        return a.compareTo(b);     // normal comparison
    }

    public static void main(String[] args) {
        Integer n = null;
        Integer m = 5;
        Integer x = null;

        System.out.println(compare(n, m)); // -1 → null < 5
        System.out.println(compare(m, n)); //  1 → 5 > null
        System.out.println(compare(x, n)); //  0 → null == null
        System.out.println(compare(7, 3)); //  1 → 7 > 3
        System.out.println(compare(2, 9)); // -1 → 2 < 9
    }



	}

