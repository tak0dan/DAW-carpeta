package Networking_Local;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

/** * ClientExample class, to create a simple example to connect two computers via a
 * TCP/IP connection.
 */
public class ClientExample {

    private final static int PORT = 5010;
    private final static String SERVER = "10.2.1.187";
    private final static String CLOSE = "***"; 

    public static void main(String[] args) {
        System.out.println("Client -> Starting...");

        try (Scanner tec = new Scanner(System.in);
             Socket socket = new Socket(SERVER, PORT);
             BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintStream output = new PrintStream(socket.getOutputStream())) {

            System.out.println("Client -> Connected to server.");
            String if_to_close = "";
            int counter = 0;

            while (!CLOSE.equalsIgnoreCase(if_to_close) && counter < 10) {
                
                System.out.print("Client -> Write a sentence to send: ");
                String line = tec.nextLine();
                
                output.println(line);
                if(!line.equalsIgnoreCase(CLOSE)) {System.out.println("Mensaje enviado");}else {System.out.println("Closing connection"); break;}
                String st = input.readLine();
                
                if (st != null) {
                    System.out.println("Client -> Received message: " + st);
                    
                    if (CLOSE.equalsIgnoreCase(st)) {
                        if_to_close = CLOSE;
                        System.out.println("Client -> End of the program");
                    }
                } else {
                    System.out.println("Client -> Server dropped the connection.");
                    break; 
                }
                
                counter++;
            }

        } catch (IOException ex) {
            System.err.println("Client -> Connection error: " + ex.getMessage());
        }
    }
}