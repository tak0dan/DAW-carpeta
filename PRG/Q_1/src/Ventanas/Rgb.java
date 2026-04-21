package Ventanas;
import java.awt.Color;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JTextField;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JSlider;
import javax.swing.event.ChangeListener;

import testJframe.TestJframe;

import javax.swing.event.ChangeEvent;

public class Rgb extends JFrame {

    private static final long serialVersionUID = 1L;
    private JPanel contentPane;
    private JLabel labelGreet;
    private JTextField textField;
    private JTextField textField_1;  // fix 1: removed stray __
    private JSlider redSlider = new JSlider();
    private JSlider greenSlider = new JSlider();;
    private JSlider blueSlider = new JSlider();;
    /**
     * Launch the application.
     */
    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    TestJframe frame = new TestJframe();
                    frame.setVisible(true);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });  // fix 2: was });__
    } 

  
    public Rgb() {
        setResizable(false);
        setTitle("mi segunda chamba");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(100, 100, 450, 300);
        contentPane = new JPanel();
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
        setContentPane(contentPane); 
        contentPane.setLayout(null);
        
        JPanel panColor = new JPanel();
        panColor.setBounds(113, 165, 220, 98);
        contentPane.add(panColor);
        
       
        redSlider.addChangeListener(new ChangeListener() {
        	public void stateChanged(ChangeEvent e) {
        		panColor.setBackground(new Color(redSlider.getValue(), blueSlider.getValue(), greenSlider.getValue()));
        		contentPane.add(panColor);
        	}
        });
        redSlider.setMaximum(255);
        redSlider.setBounds(122, 54, 200, 16);
        contentPane.add(redSlider);
        
       
        blueSlider.addChangeListener(new ChangeListener() {
        	public void stateChanged(ChangeEvent e) {
        		panColor.setBackground(new Color(redSlider.getValue(), blueSlider.getValue(), greenSlider.getValue()));
        		contentPane.add(panColor);
        	}
        });
        blueSlider.setMaximum(255);
        blueSlider.setBounds(122, 88, 200, 16);
        contentPane.add(blueSlider);
        
       
        greenSlider.addChangeListener(new ChangeListener() {
        	public void stateChanged(ChangeEvent e) {
        		
        	panColor.setBounds(113, 165, 220, 98);
        		panColor.setBackground(new Color(redSlider.getValue(), blueSlider.getValue(), greenSlider.getValue()));
        		contentPane.add(panColor);
        	}
        });
        greenSlider.setMaximum(255);
        greenSlider.setBounds(122, 129, 200, 16);
        contentPane.add(greenSlider);
        
       
        
        
    }
}