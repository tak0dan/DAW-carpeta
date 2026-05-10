package Launcher;

import javax.swing.*;
import java.awt.*;
import java.io.File;

public class Dora_de_file_explora extends JFrame {
    private final DefaultListModel<String> listModel;

    public Dora_de_file_explora() {
        setTitle("Dora de file explora");
        setSize(400, 300);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        listModel = new DefaultListModel<>();
        JList<String> fileList = new JList<>(listModel);
        add(new JScrollPane(fileList), BorderLayout.CENTER);

        JButton browseButton = new JButton("Select Folder to Explore");
        browseButton.addActionListener(e -> openDirectoryChooser());
        add(browseButton, BorderLayout.SOUTH);
    }

    private void openDirectoryChooser() {
        JFileChooser chooser = new JFileChooser();
        chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);

        int result = chooser.showOpenDialog(this);
        if (result == JFileChooser.APPROVE_OPTION) {
            listDirectory(chooser.getSelectedFile());
        }
    }

    private void listDirectory(File dir) {
        listModel.clear();
        File[] files = dir.listFiles();

        if (files == null) {
            listModel.addElement("Could not read directory.");
            return;
        }

        for (File file : files) {
            String type = file.isDirectory() ? "[DIR] " : "[FILE] ";
            listModel.addElement(type + file.getName());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Dora_de_file_explora().setVisible(true));
    }
}
