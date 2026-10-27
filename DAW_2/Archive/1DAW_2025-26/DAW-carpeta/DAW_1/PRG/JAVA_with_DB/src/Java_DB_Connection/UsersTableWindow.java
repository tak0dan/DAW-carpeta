package Java_DB_Connection;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.sql.*;

public class UsersTableWindow extends JFrame {

    public UsersTableWindow(Connection con) {
        setTitle("Users Table");
        setSize(500, 400);
        setLocationRelativeTo(null);

        JTable table = new JTable();
        DefaultTableModel model = new DefaultTableModel();
        table.setModel(model);

        model.addColumn("Id");
        model.addColumn("Nombre");
        model.addColumn("Email");

        try {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM users");
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                model.addRow(new Object[]{
                    rs.getInt("id"),
                    rs.getString("nombre"),
                    rs.getString("email")
                });
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        add(new JScrollPane(table), BorderLayout.CENTER);
    }
}