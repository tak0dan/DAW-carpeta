package Java_DB_Connection;

import java.awt.EventQueue;
import java.sql.*;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JButton;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JTextField;
import javax.swing.JOptionPane;

public class CRUD_Frame extends JFrame {

    private static final long serialVersionUID = 1L;
    private JPanel contentPane;
    private JTextField txtEmail;
    private JTextField txtId;
    private JTextField txtUsername;
    private DB_Manager dbManager;

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            try {
                CRUD_Frame frame = new CRUD_Frame();
                frame.setVisible(true);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    public CRUD_Frame() {
        try {
            dbManager = new DB_Manager();
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this,
                "Error connecting to database: " + e.getMessage(),
                "Database Error",
                JOptionPane.ERROR_MESSAGE
            );
            e.printStackTrace();
        }

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(100, 100, 480, 300);
        contentPane = new JPanel();
        FlowLayout flowLayout = (FlowLayout) contentPane.getLayout();
        flowLayout.setVgap(25);
        flowLayout.setHgap(25);
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
        setContentPane(contentPane);

        JPanel panel_1 = new JPanel();
        contentPane.add(panel_1);

        txtId = new JTextField();
        txtId.setColumns(10);
        txtId.setToolTipText("ID");
        panel_1.add(txtId);

        txtUsername = new JTextField();
        txtUsername.setColumns(10);
        txtUsername.setToolTipText("Username");
        panel_1.add(txtUsername);

        txtEmail = new JTextField();
        txtEmail.setColumns(10);
        txtEmail.setToolTipText("Email");
        panel_1.add(txtEmail);

        JPanel panel = new JPanel();
        contentPane.add(panel);

        JButton btnCreate = new JButton("C");
        btnCreate.setToolTipText("Create - Insert new user");
        btnCreate.addActionListener(e -> createUser());
        panel.add(btnCreate);

        JButton btnRead = new JButton("R");
        btnRead.setToolTipText("Read - Get user by ID");
        btnRead.addActionListener(e -> readUser());
        panel.add(btnRead);

        JButton btnUpdate = new JButton("U");
        btnUpdate.setToolTipText("Update - Modify existing user");
        btnUpdate.addActionListener(e -> updateUser());
        panel.add(btnUpdate);

        JButton btnDelete = new JButton("D");
        btnDelete.setToolTipText("Delete - Remove user");
        btnDelete.addActionListener(e -> deleteUser());
        panel.add(btnDelete);

        JButton btnGetAll = new JButton("G");
        btnGetAll.setToolTipText("Get All - Display all users");
        btnGetAll.addActionListener(e -> getAllUsers());
        panel.add(btnGetAll);

        JButton btnClear = new JButton("CL");
        btnClear.setToolTipText("Clear all fields");
        btnClear.addActionListener(e -> clearFields());
        panel.add(btnClear);

        addWindowListener(new java.awt.event.WindowAdapter() {
            @Override
            public void windowClosing(java.awt.event.WindowEvent windowEvent) {
                try {
                    if (dbManager != null) {
                        dbManager.close();
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    private void createUser() {
        try {
            int id = Integer.parseInt(txtId.getText().trim());
            String username = txtUsername.getText().trim();
            String email = txtEmail.getText().trim();

            if (username.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Username cannot be empty!", "Validation Error", JOptionPane.WARNING_MESSAGE);
                return;
            }

            boolean success = dbManager.createUser(id, username, email);

            if (success) {
                JOptionPane.showMessageDialog(this, "User created successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                clearFields();
            } else {
                JOptionPane.showMessageDialog(this, "Failed to create user!", "Error", JOptionPane.ERROR_MESSAGE);
            }

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Database error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void readUser() {
        try {
            int id = Integer.parseInt(txtId.getText().trim());
            String[] userData = dbManager.readUser(id);

            if (userData != null) {
                txtId.setText(userData[0]);
                txtUsername.setText(userData[1]);
                txtEmail.setText(userData[2]);
                
                String userInfo = "User Data:\n\n" +
                                "ID: " + userData[0] + "\n" +
                                "Name: " + userData[1] + "\n" +
                                "Email: " + userData[2];
                
                JOptionPane.showMessageDialog(this, userInfo, "User Found", JOptionPane.INFORMATION_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(this, "User not found!", "Not Found", JOptionPane.WARNING_MESSAGE);
            }

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Database error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void updateUser() {
        try {
            int id = Integer.parseInt(txtId.getText().trim());
            String username = txtUsername.getText().trim();
            String email = txtEmail.getText().trim();

            if (username.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Username cannot be empty!", "Validation Error", JOptionPane.WARNING_MESSAGE);
                return;
            }

            boolean success = dbManager.updateUser(id, username, email);

            if (success) {
                JOptionPane.showMessageDialog(this, "User updated successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(this, "User not found or update failed!", "Error", JOptionPane.WARNING_MESSAGE);
            }

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Database error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void deleteUser() {
        try {
            int id = Integer.parseInt(txtId.getText().trim());

            int confirm = JOptionPane.showConfirmDialog(this,
                    "Delete user with ID " + id + "?",
                    "Confirm Delete",
                    JOptionPane.YES_NO_OPTION);

            if (confirm == JOptionPane.YES_OPTION) {
                boolean success = dbManager.deleteUser(id);

                if (success) {
                    JOptionPane.showMessageDialog(this, "User deleted successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                    clearFields();
                } else {
                    JOptionPane.showMessageDialog(this, "User not found or delete failed!", "Error", JOptionPane.WARNING_MESSAGE);
                }
            }

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "DB error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void getAllUsers() {
        try {
            ResultSet rs = dbManager.getAllUsers();
            StringBuilder userList = new StringBuilder("All Users:\n\n");

            boolean found = false;
            while (rs.next()) {
                found = true;
                userList.append("ID: ")
                    .append(rs.getInt("id"))
                    .append(", Name: ")
                    .append(rs.getString("nombre"))
                    .append(", Email: ")
                    .append(rs.getString("email"))
                    .append("\n");
            }
            rs.close();

            if (found) {
                JOptionPane.showMessageDialog(this, userList.toString(), "All Users", JOptionPane.INFORMATION_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(this, "No users found!", "Empty", JOptionPane.INFORMATION_MESSAGE);
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "DB error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void clearFields() {
        txtId.setText("");
        txtUsername.setText("");
        txtEmail.setText("");
    }
}