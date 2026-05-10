package Launcher;

import javax.swing.*;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import java.awt.*;

public class RGB extends JFrame {

    public RGB() {
        setTitle("RGB Mixer");
        setSize(400, 300);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JPanel colorPanel = new JPanel();
        colorPanel.setBackground(Color.BLACK);
        add(colorPanel, BorderLayout.CENTER);

        JPanel sliders = new JPanel(new GridLayout(3, 1));

        JSlider r = new JSlider(0, 255, 0);
        JSlider g = new JSlider(0, 255, 0);
        JSlider b = new JSlider(0, 255, 0);

        r.setBorder(BorderFactory.createTitledBorder("Red"));
        g.setBorder(BorderFactory.createTitledBorder("Green"));
        b.setBorder(BorderFactory.createTitledBorder("Blue"));

        sliders.add(r);
        sliders.add(g);
        sliders.add(b);

        add(sliders, BorderLayout.SOUTH);

        ChangeListener listener = new ChangeListener() {
            @Override
            public void stateChanged(ChangeEvent e) {
                colorPanel.setBackground(
                        new Color(r.getValue(), g.getValue(), b.getValue())
                );
            }
        };

        r.addChangeListener(listener);
        g.addChangeListener(listener);
        b.addChangeListener(listener);
    }
}