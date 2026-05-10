package Launcher;

import javax.swing.*;
import java.awt.*;
import java.io.IOException;

public final class KittyTerminal {
    private KittyTerminal() {
    }

    public static void launch(Component parent) {
        try {
            new ProcessBuilder("/usr/bin/env", "kitty").start();
        } catch (IOException e) {
            JOptionPane.showMessageDialog(parent, "Error launching Kitty: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        launch(null);
    }
}
