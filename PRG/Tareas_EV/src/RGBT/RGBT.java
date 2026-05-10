package RGBT;

import javax.swing.*;
import java.awt.*;
import java.io.File;

public class RGBT extends JFrame {
    private DefaultListModel<String> listModel;
    private JList<String> fileList;

    public RGBT() {
        setTitle("Simple Explorer");
        setSize(400, 300);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        listModel = new DefaultListModel<>();
        fileList = new JList<>(listModel);
        add(new JScrollPane(fileList), BorderLayout.CENTER);
        
        JButton btnBrowse = new JButton("Select Folder to Explore");
        add(btnBrowse, BorderLayout.SOUTH);

        btnBrowse.addActionListener(e -> {
            JFileChooser chooser = new JFileChooser();
            chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
            
            int result = chooser.showOpenDialog(this);
            if (result == JFileChooser.APPROVE_OPTION) {
                listDirectory(chooser.getSelectedFile());
            }
        });
    }

    private void listDirectory(File dir) {
        listModel.clear();
        File[] files = dir.listFiles();
        
        if (files != null) {
            for (File file : files) {
                String type = file.isDirectory() ? "[DIR] " : "[FILE] ";
                listModel.addElement(type + file.getName());
            }
        } else {
            listModel.addElement("Could not read directory.");
        }
    }
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new RGBT().setVisible(true));
    }
}