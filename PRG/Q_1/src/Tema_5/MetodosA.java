package Tema_5;

import java.util.Scanner;
import java.util.Random;
import java.util.concurrent.*;
import java.util.*;

public class MetodosA {
	private static Scanner tec= new Scanner(System.in);
	private static Random r = new Random();
//Llenar arrays 
	//LLenar arrays desde teclado
	public static void LLenarArray(int []v) {
		System.out.println("Introduce los"+v.length+"enteros del array: ");
		for(int i=0; i<v.length; i++) {
			v[i]=tec.nextInt(); tec.nextLine();
		}
		
	}
	//LLenar arrays aleatoriamente

	
	
//Método mostrar arrays
public static void MostrarArray(int []v) {
	System.out.println("Los elementos del array son: ");
	for(int i=0; i<v.length; i++) {
		System.out.print(v[i]+"\t");
		}
	}
public static void MostrarArray(double []v) {
	System.out.println("Los elementos del array son: ");
	for(int i=0; i<v.length; i++) {
		System.out.print(v[i]+"\t");
		}
	}
public static void MostrarArray(String []v) {
	System.out.println("Los elementos del array son: ");
	for(int i=0; i<v.length; i++) {
		System.out.print(v[i]+"\t");
		}
	}
public static void MostrarArray(char []v) {
	System.out.println("Los elementos del array son: ");
	for(int i=0; i<v.length; i++) {
		System.out.print(v[i]+"\t");
		}
	}
public static void MostrarArray(boolean []v) {
	System.out.println("Los elementos del array son: ");
	for(int i=0; i<v.length; i++) {
		System.out.print(v[i]+"\t");
		}
	}
public static void llenarArrayRandom(int[] v, int min, int max) {
    Random r = new Random();
    for (int i = 0; i < v.length; i++) {
        v[i] = r.nextInt(max - min + 1) + min;
    }
}

public static void bubbleSort(int arr[])
{
    int n = arr.length;
    for (int i = 0; i < n-1; i++)  {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1])
            {
                // intercambio arr[j+1] y arr[j]
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
    for (int n1: arr) {
		System.out.print(n1 + "  ");
	
	}
	System.out.println();
}
System.out.println();}

 }


public class Timsort {

    private static final int RUN = 32;

    private static void insertionSort(int[] arr, int left, int right, int debug) {
        if (debug == 1) {
            System.out.println("InsertionSort on run [" + left + ", " + right + "]");
        }
        for (int i = left + 1; i <= right; i++) {
            int temp = arr[i];
            int j = i - 1;
            while (j >= left && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
        if (debug == 1) {
            printArray(" After insertion sort: ", arr);
        }
    }

    private static void merge(int[] arr, int l, int m, int r, int debug) {
        if (debug == 1) {
            System.out.println("Merging [" + l + ", " + m + "] with [" + (m + 1) + ", " + r + "]");
        }

        int len1 = m - l + 1;
        int len2 = r - m;

        int[] left = new int[len1];
        int[] right = new int[len2];

        for (int i = 0; i < len1; i++)
            left[i] = arr[l + i];

        for (int i = 0; i < len2; i++)
            right[i] = arr[m + 1 + i];

        int i = 0, j = 0, k = l;

        while (i < len1 && j < len2) {
            if (left[i] <= right[j]) arr[k++] = left[i++];
            else arr[k++] = right[j++];
        }

        while (i < len1) arr[k++] = left[i++];
        while (j < len2) arr[k++] = right[j++];

        if (debug == 1) {
            printArray(" After merging: ", arr);
        }
    }

    public static void timsort(int[] arr, int debug) {
        int n = arr.length;

        for (int i = 0; i < n; i += RUN) {
            insertionSort(arr, i, Math.min(i + RUN - 1, n - 1), debug);
        }

        for (int size = RUN; size < n; size = 2 * size) {
            for (int left = 0; left < n; left += 2 * size) {
                int mid = left + size - 1;
                int right = Math.min(left + 2 * size - 1, n - 1);

                if (mid < right) {
                    merge(arr, left, mid, right, debug);
                }
            }
        }

        if (debug == 1) {
            printArray("Final sorted array: ", arr);
        }
    }

    private static void printArray(String prefix, int[] arr) {
        System.out.print(prefix);
        for (int x : arr) System.out.print(x + " ");
        System.out.println();
    }
}

public class Timsort2 {

    private static final int RUN = 32;

    private static void insertionSort(int[] arr, int left, int right, int debug) {
        if (debug == 1) {
            synchronized(System.out) {
                System.out.println("InsertionSort on run [" + left + ", " + right + "]");
            }
        }

        for (int i = left + 1; i <= right; i++) {
            int temp = arr[i];
            int j = i - 1;
            while (j >= left && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }

        if (debug == 1) {
            synchronized(System.out) {
                printArray(" After insertion sort: ", arr);
            }
        }
    }

    private static void merge(int[] arr, int l, int m, int r, int debug) {
        if (debug == 1) {
            synchronized(System.out) {
                System.out.println("Merging [" + l + ", " + m + "] with [" + (m + 1) + ", " + r + "]");
            }
        }

        int len1 = m - l + 1;
        int len2 = r - m;

        int[] left = new int[len1];
        int[] right = new int[len2];

        System.arraycopy(arr, l, left, 0, len1);
        System.arraycopy(arr, m + 1, right, 0, len2);

        int i = 0, j = 0, k = l;
        while (i < len1 && j < len2) {
            arr[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];
        }
        while (i < len1) arr[k++] = left[i++];
        while (j < len2) arr[k++] = right[j++];

        if (debug == 1) {
            synchronized(System.out) {
                printArray(" After merging: ", arr);
            }
        }
    }

    public static void timsort(int[] arr, int debug) {
        int n = arr.length;
        int cores = Runtime.getRuntime().availableProcessors();
        ExecutorService pool = Executors.newFixedThreadPool(cores);
        List<Callable<Void>> tasks = new ArrayList<>();

        // Phase 1: parallel insertion sort on RUN blocks
        for (int i = 0; i < n; i += RUN) {
            final int left = i;
            final int right = Math.min(i + RUN - 1, n - 1);
            final int finalDebug = debug;  // For lambda capture
            tasks.add(() -> {
                insertionSort(arr, left, right, finalDebug);
                return null;
            });
        }

        try {
            pool.invokeAll(tasks);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Phase 2: sequential merge (printing included)
        for (int size = RUN; size < n; size *= 2) {
            for (int left = 0; left < n; left += 2 * size) {
                int mid = left + size - 1;
                int right = Math.min(left + 2 * size - 1, n - 1);
                if (mid < right) merge(arr, left, mid, right, debug);
            }
        }

        if (debug == 1) {
            synchronized(System.out) {
                printArray("Final sorted array: ", arr);
            }
        }

        pool.shutdown();
    }

    private static void printArray(String prefix, int[] arr) {
        System.out.print(prefix);
        for (int x : arr) System.out.print(x + " ");
        System.out.println();
    }
}

}