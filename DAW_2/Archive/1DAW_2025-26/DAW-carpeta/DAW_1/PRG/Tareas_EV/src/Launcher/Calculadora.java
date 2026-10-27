package Launcher;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class Calculadora extends JFrame {
    private final JTextField display;
    private double firstNum = 0;
    private String operator = "";

    public Calculadora() {
        setTitle("Calculadora");
        setSize(220, 300);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setLocationRelativeTo(null);
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
            JButton button = new JButton(text);
            button.setMargin(new Insets(2, 2, 2, 2));
            button.addActionListener(e -> handleInput(text));
            panel.add(button);
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
    }

    private void handleInput(String input) {
        if (display.getText().equals("Error")) {
            display.setText("");
        }

        if (input.equals("C")) {
            display.setText("");
            firstNum = 0;
            operator = "";
            return;
        }

        if (input.equals("=")) {
            if (!operator.isEmpty() && !display.getText().isEmpty()) {
                calculate();
                operator = "";
            }
            return;
        }

        if ("+-*/".contains(input)) {
            if (!display.getText().isEmpty()) {
                try {
                    firstNum = Double.parseDouble(display.getText());
                    operator = input;
                    display.setText("");
                } catch (NumberFormatException e) {
                    display.setText("Error");
                }
            }
            return;
        }

        display.setText(display.getText() + input);
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
                default -> error = true;
            }

            if (error) {
                display.setText("Error");
                return;
            }

            display.setText(result % 1 == 0 ? String.valueOf((int) result) : String.valueOf(result));
        } catch (NumberFormatException e) {
            display.setText("Error");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            Calculadora calculadora = new Calculadora();
            calculadora.setResizable(false);
            calculadora.setVisible(true);
        });
    }
}
