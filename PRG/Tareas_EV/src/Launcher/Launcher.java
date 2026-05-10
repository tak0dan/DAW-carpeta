package Launcher;

import javax.swing.*;
import java.awt.*;

public class Launcher extends JFrame {
    private final JPanel rightPanel;
    private final JTextArea outputArea;

    public Launcher() {
        setTitle("Launcher");
        setSize(900, 500);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JMenuBar menuBar = new JMenuBar();

        JMenu menuApps = new JMenu("Apps");
        JMenu menuAyuda = new JMenu("Ayuda");
        JMenu menuSalir = new JMenu("Salir");

        JMenuItem calcItem = new JMenuItem("Calculadora");
        calcItem.addActionListener(e -> new Calculadora().setVisible(true));

        JMenuItem explorerItem = new JMenuItem("File Explorer");
        explorerItem.addActionListener(e -> new Dora_de_file_explora().setVisible(true));

        JMenuItem rgbItem = new JMenuItem("RGB");
        rgbItem.addActionListener(e -> new RGB().setVisible(true));

        menuApps.add(calcItem);
        menuApps.add(explorerItem);
        menuApps.add(rgbItem);

        JMenuItem ayudaDropdown = new JMenuItem("Mensaje desplegable");
        ayudaDropdown.addActionListener(e -> showDropdownMessage(
                "Dime tu sabor favorito:",
                new String[]{"Opción A", "Opción B", "Opción C"}
        ));

        JMenuItem ayudaText = new JMenuItem("Mensaje con texto");
        ayudaText.addActionListener(e -> showTextInputMessage("Escribe un mensaje:"));

        JMenuItem ayudaSimple = new JMenuItem("Mensaje simple");
        ayudaSimple.addActionListener(e -> showDisplayMessage("Este es un mensaje simple."));

        menuAyuda.add(ayudaDropdown);
        menuAyuda.add(ayudaText);
        menuAyuda.add(ayudaSimple);

        JMenuItem salirItem = new JMenuItem("Salir");
        salirItem.addActionListener(e -> dispose());
        menuSalir.add(salirItem);

        menuBar.add(menuApps);
        menuBar.add(menuAyuda);
        menuBar.add(menuSalir);

        setJMenuBar(menuBar);

        rightPanel = new JPanel(new BorderLayout());

        outputArea = new JTextArea();
        outputArea.setEditable(false);
        outputArea.setLineWrap(true);
        outputArea.setWrapStyleWord(true);

        JScrollPane scroll = new JScrollPane(outputArea);
        scroll.setPreferredSize(new Dimension(0, 120));

        rightPanel.add(scroll, BorderLayout.SOUTH);

        showDisplayMessage("Selecciona una opción del menú.");

        add(rightPanel, BorderLayout.CENTER);
    }

    private void showDisplayMessage(String text) {
        rightPanel.removeAll();

        JPanel container = new JPanel();
        container.setLayout(new BoxLayout(container, BoxLayout.Y_AXIS));

        JLabel label = new JLabel(text);
        label.setFont(new Font("Arial", Font.PLAIN, 18));
        label.setAlignmentX(Component.CENTER_ALIGNMENT);

        container.add(Box.createVerticalGlue());
        container.add(label);
        container.add(Box.createVerticalGlue());

        rightPanel.add(container, BorderLayout.CENTER);
        rightPanel.add(new JScrollPane(outputArea), BorderLayout.SOUTH);

        rightPanel.revalidate();
        rightPanel.repaint();

        outputArea.append("[Mensaje simple] " + text + "\n");
    }

    private void showDropdownMessage(String text, String[] options) {
        rightPanel.removeAll();

        JPanel container = new JPanel();
        container.setLayout(new BoxLayout(container, BoxLayout.Y_AXIS));

        JLabel label = new JLabel(text);
        label.setFont(new Font("Arial", Font.PLAIN, 18));
        label.setAlignmentX(Component.CENTER_ALIGNMENT);

        JComboBox<String> dropdown = new JComboBox<>(options);
        dropdown.setMaximumSize(new Dimension(200, 30));
        dropdown.setAlignmentX(Component.CENTER_ALIGNMENT);

        JButton ok = new JButton("Seleccionar");
        ok.setAlignmentX(Component.CENTER_ALIGNMENT);

        ok.addActionListener(e -> {
            String val = (String) dropdown.getSelectedItem();
            outputArea.append("[Dropdown] Seleccionado: " + val + "\n");
        });

        container.add(label);
        container.add(Box.createRigidArea(new Dimension(0, 10)));
        container.add(dropdown);
        container.add(Box.createRigidArea(new Dimension(0, 10)));
        container.add(ok);

        rightPanel.add(container, BorderLayout.CENTER);
        rightPanel.add(new JScrollPane(outputArea), BorderLayout.SOUTH);

        rightPanel.revalidate();
        rightPanel.repaint();
    }

    private void showTextInputMessage(String text) {
        rightPanel.removeAll();

        JPanel container = new JPanel();
        container.setLayout(new BoxLayout(container, BoxLayout.Y_AXIS));

        JLabel label = new JLabel(text);
        label.setFont(new Font("Arial", Font.PLAIN, 18));
        label.setAlignmentX(Component.CENTER_ALIGNMENT);

        JTextField inputField = new JTextField();
        inputField.setMaximumSize(new Dimension(250, 30));
        inputField.setAlignmentX(Component.CENTER_ALIGNMENT);

        JButton ok = new JButton("Enviar");
        ok.setAlignmentX(Component.CENTER_ALIGNMENT);

        ok.addActionListener(e -> {
            String msg = inputField.getText();
            outputArea.append("[Texto] " + msg + "\n");
        });

        container.add(label);
        container.add(Box.createRigidArea(new Dimension(0, 10)));
        container.add(inputField);
        container.add(Box.createRigidArea(new Dimension(0, 10)));
        container.add(ok);

        rightPanel.add(container, BorderLayout.CENTER);
        rightPanel.add(new JScrollPane(outputArea), BorderLayout.SOUTH);

        rightPanel.revalidate();
        rightPanel.repaint();
    }
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Launcher().setVisible(true));
    }
}