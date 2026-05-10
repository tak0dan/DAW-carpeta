package Java_DB_Connection;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Calculadora_GUI extends JFrame {
    private JTextField display;
    private double firstNum = 0;
    private String operator = "";

    public Calculadora_GUI() {
        setTitle("Calc");
        setSize(220, 300); 
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        display = new JTextField();
        display.setEditable(false);
        display.setFont(new Font("SansSerif", Font.BOLD, 20));
        display.setHorizontalAlignment(JTextField.RIGHT);
        display.setFocusable(true); 
        add(display, BorderLayout.NORTH);

        JPanel panel = new JPanel(new GridLayout(4, 4, 2, 2));
        String[] buttons = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "C", "0", "=", "+"
        };

        for (String text : buttons) {
            JButton btn = new JButton(text);
            btn.setMargin(new Insets(2, 2, 2, 2));
            btn.addActionListener(e -> handleInput(text));
            panel.add(btn);
        }
        add(panel, BorderLayout.CENTER);

        display.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                char keyChar = e.getKeyChar();
                int keyCode = e.getKeyCode();

                if (Character.isDigit(keyChar)) {
                    handleInput(String.valueOf(keyChar));
                } else if ("+-*/".indexOf(keyChar) != -1) {
                    handleInput(String.valueOf(keyChar));
                } else if (keyCode == KeyEvent.VK_ENTER || keyChar == '=') {
                    handleInput("=");
                } else if (keyCode == KeyEvent.VK_BACK_SPACE || keyCode == KeyEvent.VK_ESCAPE) {
                    handleInput("C");
                }
            }
        });

        display.requestFocusInWindow();
    }

    private void handleInput(String input) {
        // Clear "Error" state automatically if a new number is typed
        if (display.getText().equals("Error")) {
            display.setText("");
        }

        if (input.equals("C")) {
            display.setText("");
            firstNum = 0;
            operator = "";
        } else if (input.equals("=")) {
            if (!operator.isEmpty() && !display.getText().isEmpty()) {
                calculate();
                operator = "";
            }
        } else if ("+-*/".contains(input)) {
            if (!display.getText().isEmpty()) {
                try {
                    firstNum = Double.parseDouble(display.getText());
                    operator = input;
                    display.setText(""); 
                } catch (NumberFormatException e) {
                    display.setText("Error");
                }
            }
        } else {
            display.setText(display.getText() + input);
        }
    }

    private void calculate() {
        try {
            double secondNum = Double.parseDouble(display.getText());
            double result = 0;
            boolean error = false;

            switch (operator) {
                case "+" -> result = firstNum + secondNum;
                case "-" -> result = firstNum - secondNum;
                case "*" -> result = firstNum * secondNum;
                case "/" -> {
                    if (secondNum == 0) {
                        error = true;
                    } else {
                        result = firstNum / secondNum;
                    }
                }
            }

            if (error) {
                display.setText("Error");
            } else {
                // Show as integer if there's no decimal part, otherwise show double
                display.setText(result % 1 == 0 ? String.valueOf((int)result) : String.valueOf(result));
            }
        } catch (NumberFormatException e) {
            display.setText("Error");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            Calculadora_GUI cc = new Calculadora_GUI();
            cc.setResizable(false);
            cc.setVisible(true);
        });
    }
}