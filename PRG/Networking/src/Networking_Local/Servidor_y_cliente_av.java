package Networking_Local;

import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.net.*;
import javax.swing.*;

public class Servidor_y_cliente_av extends JFrame {

    JTextArea espacioParaLeerMensajes;
    JTextField cajaParaEscribir;
    JButton botonDeEnviar;

    Socket conexion;
    PrintWriter lineaDeEnvio;
    BufferedReader lineaDeRecepcion;

    String rol;
    String miNombre;
    String nombreDelOtro;

    public Servidor_y_cliente_av(String rol, String miNombre, String nombreDelOtro, String ip, int puerto) {
        this.rol           = rol;
        this.miNombre      = miNombre;
        this.nombreDelOtro = nombreDelOtro;

        setTitle("Chat - " + rol + " (" + miNombre + ")");
        setSize(500, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        espacioParaLeerMensajes = new JTextArea();
        espacioParaLeerMensajes.setEditable(false);
        JScrollPane scrollDelChat = new JScrollPane(espacioParaLeerMensajes);

        cajaParaEscribir = new JTextField();
        botonDeEnviar    = new JButton("Enviar");
        botonDeEnviar.setEnabled(false);

        botonDeEnviar.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                enviarMensaje();
            }
        });

        cajaParaEscribir.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                enviarMensaje();
            }
        });

        JPanel panelDeAbajo = new JPanel(new BorderLayout());
        panelDeAbajo.add(cajaParaEscribir, BorderLayout.CENTER);
        panelDeAbajo.add(botonDeEnviar,    BorderLayout.EAST);

        add(scrollDelChat, BorderLayout.CENTER);
        add(panelDeAbajo,  BorderLayout.SOUTH);

        setVisible(true);

        if (rol.equals("Servidor")) {
            arrancarComoServidor(puerto);
        } else {
            arrancarComoCliente(ip, puerto);
        }
    }

    void arrancarComoServidor(int puerto) {
        Thread hiloDeEspera = new Thread(new Runnable() {
            public void run() {
                try {
                    ServerSocket enchufe = new ServerSocket(puerto);
                    espacioParaLeerMensajes.append("Esperando conexion en el puerto " + puerto + "...\n");

                    conexion = enchufe.accept();
                    espacioParaLeerMensajes.append(nombreDelOtro + " se ha conectado.\n");

                    lineaDeEnvio     = new PrintWriter(conexion.getOutputStream(), true);
                    lineaDeRecepcion = new BufferedReader(new InputStreamReader(conexion.getInputStream()));

                    botonDeEnviar.setEnabled(true);
                    escucharMensajes();

                } catch (IOException e) {
                    espacioParaLeerMensajes.append("Error: " + e.getMessage() + "\n");
                }
            }
        });
        hiloDeEspera.start();
    }

    void arrancarComoCliente(String ip, int puerto) {
        Thread hiloDeConexion = new Thread(new Runnable() {
            public void run() {
                try {
                    espacioParaLeerMensajes.append("Conectando a " + ip + ":" + puerto + "...\n");
                    conexion = new Socket(ip, puerto);
                    espacioParaLeerMensajes.append("Conectado correctamente.\n");

                    lineaDeEnvio     = new PrintWriter(conexion.getOutputStream(), true);
                    lineaDeRecepcion = new BufferedReader(new InputStreamReader(conexion.getInputStream()));

                    botonDeEnviar.setEnabled(true);
                    escucharMensajes();

                } catch (IOException e) {
                    espacioParaLeerMensajes.append("No se pudo conectar: " + e.getMessage() + "\n");
                }
            }
        });
        hiloDeConexion.start();
    }

    void escucharMensajes() {
        Thread hiloDeEscucha = new Thread(new Runnable() {
            public void run() {
                try {
                    String mensajeRecibido;
                    while ((mensajeRecibido = lineaDeRecepcion.readLine()) != null) {
                        espacioParaLeerMensajes.append(nombreDelOtro + ": " + mensajeRecibido + "\n");
                    }
                } catch (IOException e) {
                    espacioParaLeerMensajes.append("Se ha cerrado la conexion.\n");
                }
            }
        });
        hiloDeEscucha.start();
    }

    void enviarMensaje() {
        String textoAEnviar = cajaParaEscribir.getText().trim();
        if (textoAEnviar.isEmpty() || lineaDeEnvio == null) return;

        lineaDeEnvio.println(textoAEnviar);
        espacioParaLeerMensajes.append(miNombre + ": " + textoAEnviar + "\n");
        cajaParaEscribir.setText("");
    }

    public static void main(String[] args) {

        JDialog ventanaDeInicio = new JDialog();
        ventanaDeInicio.setTitle("Configuracion");
        ventanaDeInicio.setSize(320, 300);
        ventanaDeInicio.setLocationRelativeTo(null);
        ventanaDeInicio.setModal(true);
        ventanaDeInicio.setResizable(false);

        JPanel panelDeOpciones = new JPanel(new GridLayout(7, 2, 8, 8));
        panelDeOpciones.setBorder(BorderFactory.createEmptyBorder(16, 16, 16, 16));

        JLabel etiquetaDeRol     = new JLabel("Rol:");
        JComboBox<String> selectorDeRol = new JComboBox<>(new String[]{"Servidor", "Cliente"});

        JLabel etiquetaDePuerto  = new JLabel("Puerto:");
        JTextField cajaDelPuerto = new JTextField("5000");

        JLabel etiquetaDeIP      = new JLabel("IP del servidor:");
        JTextField cajaDeIP      = new JTextField("127.0.0.1");

        JLabel etiquetaDeMiNombre    = new JLabel("Mi nombre:");
        JTextField cajaDeMiNombre    = new JTextField("Anes");

        JLabel etiquetaDelOtro       = new JLabel("Nombre del otro:");
        JTextField cajaDelNombreOtro = new JTextField("Nacho");

        etiquetaDeIP.setVisible(false);
        cajaDeIP.setVisible(false);

        selectorDeRol.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                boolean esCliente = selectorDeRol.getSelectedItem().equals("Cliente");
                etiquetaDeIP.setVisible(esCliente);
                cajaDeIP.setVisible(esCliente);
            }
        });

        JButton botonDeEntrar = new JButton("Entrar");
        botonDeEntrar.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                int puerto;
                try {
                    puerto = Integer.parseInt(cajaDelPuerto.getText().trim());
                    if (puerto < 1 || puerto > 65535) throw new NumberFormatException();
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(ventanaDeInicio, "El puerto no es valido (1-65535).");
                    return;
                }

                String rolElegido        = (String) selectorDeRol.getSelectedItem();
                String miNombre          = cajaDeMiNombre.getText().trim();
                String nombreDelOtro     = cajaDelNombreOtro.getText().trim();
                String ip                = cajaDeIP.getText().trim();

                if (miNombre.isEmpty())      miNombre      = "Yo";
                if (nombreDelOtro.isEmpty()) nombreDelOtro = "Otro";

                ventanaDeInicio.dispose();
                new Servidor_y_cliente_av(rolElegido, miNombre, nombreDelOtro, ip, puerto);
            }
        });

        panelDeOpciones.add(etiquetaDeRol);          panelDeOpciones.add(selectorDeRol);
        panelDeOpciones.add(etiquetaDePuerto);       panelDeOpciones.add(cajaDelPuerto);
        panelDeOpciones.add(etiquetaDeIP);           panelDeOpciones.add(cajaDeIP);
        panelDeOpciones.add(etiquetaDeMiNombre);     panelDeOpciones.add(cajaDeMiNombre);
        panelDeOpciones.add(etiquetaDelOtro);        panelDeOpciones.add(cajaDelNombreOtro);
        panelDeOpciones.add(new JLabel());           panelDeOpciones.add(botonDeEntrar);

        ventanaDeInicio.add(panelDeOpciones);
        ventanaDeInicio.setVisible(true);
    }
}
