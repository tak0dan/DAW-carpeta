/*
package Some_Array_Shit;

	import java.awt.Dimension;
	import java.awt.Graphics;
	import java.awt.image.BufferedImage;
	import java.io.File;
	import java.io.IOException;
	import javax.imageio.ImageIO;
	import javax.swing.JFrame;
	import javax.swing.JPanel;
    
	public class Imagenes {

	    public static int[][][] cargarImagenEnMatriz(String ruta) throws IOException {
	        // Leer la imagen del fichero
	        BufferedImage img = ImageIO.read(new File(ruta));

	        int ancho = img.getWidth();
	        int alto = img.getHeight();

	        // Matriz [alto][ancho][3]: R,G,B
	        int[][][] matriz = new int[alto][ancho][3];

	        // Rellenar la matriz
	        for (int y = 0; y < alto; y++) {
	            for (int x = 0; x < ancho; x++) {

	                int pixel = img.getRGB(x, y); // ARGB empaquetado

	                int r = (pixel >> 16) & 0xFF;
	                int g = (pixel >> 8) & 0xFF;
	                int b = pixel & 0xFF;

		                matriz[y][x][0] = r;
		                matriz[y][x][1] = g;
		                matriz[y][x][2] = b;
	            }
	        }

	        return matriz;
	    }


	    public static BufferedImage matrizToBufferedImage(int[][][] matriz) {
	        int alto = matriz.length;
	        int ancho = matriz[0].length;

	        BufferedImage img = new BufferedImage(ancho, alto, BufferedImage.TYPE_INT_RGB);

	        for (int y = 0; y < alto; y++) {
	            for (int x = 0; x < ancho; x++) {
	                int r = matriz[y][x][0];
	                int g = matriz[y][x][1];
	                int b = matriz[y][x][2];

	                int pixel = (r << 16) | (g << 8) | b;
	                img.setRGB(x, y, pixel);
	            }
	        }

	        return img;
	    }
	    public static void mostrarImagen(int[][][] matriz) {

	        BufferedImage img = matrizToBufferedImage(matriz);

	        JFrame frame = new JFrame("Imagen desde matriz");
	        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

	        JPanel panel = new JPanel() {
	            @Override
	            protected void paintComponent(Graphics g) {
	                super.paintComponent(g);
	                g.drawImage(img, 0, 0, null);
	            }

	            @Override
	            public Dimension getPreferredSize() {
	                return new Dimension(img.getWidth(), img.getHeight());
	            }
	        };

	        frame.add(panel);
	        frame.pack();
	        frame.setLocationRelativeTo(null);
	        frame.setVisible(true);
	    }

	}

*/