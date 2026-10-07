package Networking_Local;

import java.awt.*;
import javax.swing.*;
import javax.swing.border.EmptyBorder;

public class Chat_Frame extends JFrame {

    private static final long serialVersionUID = 1L;
    private JTextField textField;

    public Chat_Frame() {

        setTitle("Chat Frame");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 600);
        setLocationRelativeTo(null);

        JPanel root = new JPanel(new BorderLayout());
        setContentPane(root);


        JTextArea inputArea = new JTextArea();
        inputArea.setLineWrap(true);

        JScrollPane topScroll = new JScrollPane(inputArea);
        topScroll.setPreferredSize(new Dimension(0, 120)); 
        root.add(topScroll, BorderLayout.NORTH);


        JTextArea chatArea = new JTextArea();
        chatArea.setEditable(false);
        chatArea.setLineWrap(true);

        JScrollPane chatScroll = new JScrollPane(chatArea);

        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new GridLayout(3, 1, 5, 5));

        JButton b1 = new JButton("");
        JButton b2 = new JButton("Action 2");
        JButton b3 = new JButton("Action 3");

        buttonPanel.add(b1);
        buttonPanel.add(b2);
        buttonPanel.add(b3);

        JSplitPane centerSplit = new JSplitPane(
                JSplitPane.HORIZONTAL_SPLIT,
                chatScroll,
                buttonPanel
        );
        centerSplit.setResizeWeight(0.7);
        centerSplit.setDividerSize(5);

        root.add(centerSplit, BorderLayout.CENTER);


        JPanel bottomPanel = new JPanel();
        bottomPanel.setPreferredSize(new Dimension(0, 80));

        root.add(bottomPanel, BorderLayout.SOUTH);
        
        textField = new JTextField();
        bottomPanel.add(textField);
        textField.setColumns(10);
    }

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            Chat_Frame frame = new Chat_Frame();
            frame.setVisible(true);
        });
    }
}