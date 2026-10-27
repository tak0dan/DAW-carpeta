package Java_DB_Connection;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;

public class CRUD extends JFrame {

    private static final long serialVersionUID = 1L;
    private JPanel contentPane;
    private JTextField textId;
    private JTextField texNombre;
    private JTextField textEmail;
    private JButton btnCreate;
    private JButton btnRead;
    private JButton btnUpdate;
    private JButton btnDelete;
    private JButton btnSave;
    private JButton btnCancel;
    private JButton btnShowUsers;

    private final int NONE = 0;
    private final int INSERT = 1;
    private final int DELETE = 2;
    private final int UPDATE = 3;
    private final int SELECT = 4;
    private int modo = NONE;

    private Connection con;

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            try {
                CRUD frame = new CRUD();
                frame.setVisible(true);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    public void habilitarEdicion() {
        switch (modo) {
            case NONE:
                btnCreate.setEnabled(true);
                btnRead.setEnabled(true);
                btnUpdate.setEnabled(true);
                btnDelete.setEnabled(true);
                btnSave.setEnabled(false);
                btnCancel.setEnabled(false);
                textId.setEnabled(false);
                texNombre.setEnabled(false);
                textEmail.setEnabled(false);
                break;

            case UPDATE:
            case INSERT:
                btnCreate.setEnabled(false);
                btnRead.setEnabled(false);
                btnUpdate.setEnabled(false);
                btnDelete.setEnabled(false);
                btnSave.setEnabled(true);
                btnCancel.setEnabled(true);
                textId.setEnabled(true);
                texNombre.setEnabled(true);
                textEmail.setEnabled(true);
                break;

            case SELECT:
                btnCreate.setEnabled(false);
                btnRead.setEnabled(true);
                btnUpdate.setEnabled(false);
                btnDelete.setEnabled(false);
                btnSave.setEnabled(false);
                btnCancel.setEnabled(true);   
                textId.setEnabled(true);
                texNombre.setEnabled(false);
                textEmail.setEnabled(false);
                break;

            case DELETE:
                btnCreate.setEnabled(false);
                btnRead.setEnabled(false);
                btnUpdate.setEnabled(false);
                btnDelete.setEnabled(true);
                btnSave.setEnabled(false);
                btnCancel.setEnabled(true);   
                textId.setEnabled(true);
                texNombre.setEnabled(false);
                textEmail.setEnabled(false);
                break;
        }
    }

    public CRUD() {

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(100, 100, 480, 330);
        contentPane = new JPanel();
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

        setContentPane(contentPane);
        contentPane.setLayout(null);

        JPanel panel = new JPanel();
        panel.setBounds(28, 203, 420, 52);
        contentPane.add(panel);

        btnCreate = new JButton("Create");
        btnCreate.addActionListener(e -> {
            modo = INSERT;
            habilitarEdicion();
        });
        panel.add(btnCreate);

        btnRead = new JButton("Read");
        btnRead.addActionListener(e -> {
            if (modo == SELECT) {
                readUser();
            } else {
                modo = SELECT;
                habilitarEdicion();
            }
        });
        panel.add(btnRead);

        btnUpdate = new JButton("Update");
        btnUpdate.addActionListener(e -> {
            modo = UPDATE;
            habilitarEdicion();
        });
        panel.add(btnUpdate);

        btnDelete = new JButton("Delete");
        btnDelete.addActionListener(e -> {
            if (modo == DELETE) {
                deleteUser();
            } else {
                modo = DELETE;
                habilitarEdicion();
            }
        });
        panel.add(btnDelete);

        btnSave = new JButton("Save");
        btnSave.addActionListener(e -> {
            if (modo == INSERT) {
                createUser();
            } else if (modo == UPDATE) {
                updateUser();
            }
        });
        panel.add(btnSave);

        btnCancel = new JButton("Cancel");
        btnCancel.addActionListener(e -> {
            modo = NONE;
            habilitarEdicion();
        });
        panel.add(btnCancel);

        btnShowUsers = new JButton("Show Users");
        btnShowUsers.addActionListener(e -> openUsersTable());
        panel.add(btnShowUsers);

        JPanel panel_1 = new JPanel();
        panel_1.setBounds(28, 0, 420, 198);
        contentPane.add(panel_1);
        panel_1.setLayout(null);

        JLabel lblId = new JLabel("Id:");
        lblId.setBounds(31, 51, 60, 17);
        panel_1.add(lblId);

        JLabel lblNombre = new JLabel("Nombre:");
        lblNombre.setBounds(31, 80, 60, 17);
        panel_1.add(lblNombre);

        JLabel lblEmail = new JLabel("Email");
        lblEmail.setBounds(31, 115, 60, 17);
        panel_1.add(lblEmail);

        textId = new JTextField();
        textId.setBounds(116, 47, 80, 21);
        panel_1.add(textId);

        texNombre = new JTextField();
        texNombre.setBounds(116, 76, 248, 21);
        panel_1.add(texNombre);

        textEmail = new JTextField();
        textEmail.setBounds(116, 111, 248, 21);
        panel_1.add(textEmail);

        modo = NONE;
        habilitarEdicion();
        String database = "PRG";
        String url = "jdbc:mysql://localhost:3306/"+database;
        String user = "test";
        String password = "test";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to DB "+database);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void clearFields() {
        textId.setText("");
        texNombre.setText("");
        textEmail.setText("");
    }

    private void createUser() {
        try {
            int id = Integer.parseInt(textId.getText().trim());
            String nombre = texNombre.getText().trim();
            String email = textEmail.getText().trim();

            if (nombre.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Name cannot be empty!", "Validation Error", JOptionPane.WARNING_MESSAGE);
                return;
            }

            String sql = "INSERT INTO users (id, nombre, email) VALUES (?, ?, ?)";
            try (PreparedStatement stmt = con.prepareStatement(sql)) {
                stmt.setInt(1, id);
                stmt.setString(2, nombre);
                stmt.setString(3, email);
                boolean success = stmt.executeUpdate() > 0;

                if (success) {
                    JOptionPane.showMessageDialog(this, "User created successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                    clearFields();
                }
            }

            modo = NONE;
            habilitarEdicion();

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Database error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void readUser() {
        try {
            int id = Integer.parseInt(textId.getText().trim());

            String sql = "SELECT id, nombre, email FROM users WHERE id = ?";
            try (PreparedStatement stmt = con.prepareStatement(sql)) {
                stmt.setInt(1, id);
                ResultSet rs = stmt.executeQuery();

                if (rs.next()) {
                    textId.setText(String.valueOf(rs.getInt("id")));
                    texNombre.setText(rs.getString("nombre"));
                    textEmail.setText(rs.getString("email"));
                } else {
                    JOptionPane.showMessageDialog(this, "User not found!", "Not Found", JOptionPane.WARNING_MESSAGE);
                }
            }

            modo = NONE;
            habilitarEdicion();

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Database error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void updateUser() {
        try {
            int id = Integer.parseInt(textId.getText().trim());
            String nombre = texNombre.getText().trim();
            String email = textEmail.getText().trim();

            if (nombre.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Name cannot be empty!", "Validation Error", JOptionPane.WARNING_MESSAGE);
                return;
            }

            String sql = "UPDATE users SET nombre = ?, email = ? WHERE id = ?";
            try (PreparedStatement stmt = con.prepareStatement(sql)) {
                stmt.setString(1, nombre);
                stmt.setString(2, email);
                stmt.setInt(3, id);
                boolean success = stmt.executeUpdate() > 0;

                if (success) {
                    JOptionPane.showMessageDialog(this, "User updated successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(this, "User not found!", "Error", JOptionPane.WARNING_MESSAGE);
                }
            }

            modo = NONE;
            habilitarEdicion();

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Database error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void deleteUser() {
        try {
            int id = Integer.parseInt(textId.getText().trim());

            int confirm = JOptionPane.showConfirmDialog(this,
                    "Delete user with ID " + id + "?",
                    "Confirm Delete",
                    JOptionPane.YES_NO_OPTION);

            if (confirm == JOptionPane.YES_OPTION) {
                String sql = "DELETE FROM users WHERE id = ?";
                try (PreparedStatement stmt = con.prepareStatement(sql)) {
                    stmt.setInt(1, id);
                    boolean success = stmt.executeUpdate() > 0;

                    if (success) {
                        JOptionPane.showMessageDialog(this, "User deleted successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
                        clearFields();
                    } else {
                        JOptionPane.showMessageDialog(this, "User not found!", "Error", JOptionPane.WARNING_MESSAGE);
                    }
                }
            }

            modo = NONE;
            habilitarEdicion();

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID must be a valid number!", "Validation Error", JOptionPane.WARNING_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "DB error: " + e.getMessage(), "DB Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void openUsersTable() {
        JFrame tableFrame = new JFrame("Users Table");
        tableFrame.setSize(500, 300);

        String[] columns = {"ID", "Nombre", "Email"};
        DefaultTableModel model = new DefaultTableModel(columns, 0);
        JTable table = new JTable(model);

        try (Statement st = con.createStatement();
             ResultSet rs = st.executeQuery("SELECT id, nombre, email FROM users")) {

            while (rs.next()) {
                model.addRow(new Object[]{
                    rs.getInt("id"),
                    rs.getString("nombre"),
                    rs.getString("email")
                });
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        tableFrame.add(new JScrollPane(table));
        tableFrame.setVisible(true);
    }
}