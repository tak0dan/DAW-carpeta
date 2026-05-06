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

import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.awt.event.ActionEvent;

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
                btnCancel.setEnabled(true);   // FIX: allow returning from SELECT
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
                btnCancel.setEnabled(true);   // FIX: allow returning from DELETE
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
            modo = SELECT;
            habilitarEdicion();
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
            modo = DELETE;
            habilitarEdicion();
        });
        panel.add(btnDelete);

        btnSave = new JButton("Save");
        btnSave.addActionListener(e -> {
            modo = NONE;
            habilitarEdicion();
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

        String url = "jdbc:mysql://localhost:33306/mila";
        String user = "root";
        String password = "alumnoalumno";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to DB mila");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /** OPEN USER TABLE WINDOW **/
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