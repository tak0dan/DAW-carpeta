/*
package Some_Array_Shit;

import java.io.File;
import java.io.IOException;

public class Retoques {

		// TODO Auto-generated method stub
	    public static int[][][] cambioBrillo(int[][][] orig, int brillo){
	    	
	    	System.out.println(new File("./img/mario.jpg").getAbsolutePath());

	    	
	    	int [][][] res= new int[orig.length][orig[0].length][3];
	    	for (int i = 0; i < orig.length; i++) {
				for (int j = 0; j < orig[i].length; j++) {
					for (int k = 0; k < 3; k++) {
						res[i][j][k]= orig[i][j][k] + brillo;
						if (res[i][j][k]>255) res[i][j][k]=255;
						if (res[i][j][k]<0) res[i][j][k]=0;
					}
					
				}
			}
	    	return res;
	    }
	    // y un main que lo llame
	    public static void main(String[] args) {
	        try {
	            int[][][] rgb = Imagenes.cargarImagenEnMatriz("./img/mario.jpg");
	            Imagenes.mostrarImagen(rgb);
	            int[][][] cambio = cambioBrillo(rgb, -50);
	            Imagenes.mostrarImagen(cambio);
	    	    
	        } catch (IOException e) {
	            System.err.println("Error al leer la imagen: " + e.getMessage());
	        }
	    }
	}

*/
