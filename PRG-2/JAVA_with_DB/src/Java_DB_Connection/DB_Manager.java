package Java_DB_Connection;

import java.sql.*;

public class DB_Manager {

    private Connection conn;

    public DB_Manager() throws SQLException {
        conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/PRG?useSSL=false&serverTimezone=UTC",
            "test",
            "test"
        );
    }

    public boolean createUser(int id, String username, String email) throws SQLException {
        String sql = "INSERT INTO users (id, nombre, email) VALUES (?, ?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.setString(2, username);
            stmt.setString(3, email);
            return stmt.executeUpdate() > 0;
        }
    }

    public String[] readUser(int id) throws SQLException {
        String sql = "SELECT * FROM users WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                return new String[] {
                    String.valueOf(rs.getInt("id")),
                    rs.getString("nombre"),
                    rs.getString("email")
                };
            }
            return null;
        }
    }

    public boolean updateUser(int id, String username, String email) throws SQLException {
        String sql = "UPDATE users SET nombre = ?, email = ? WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, username);
            stmt.setString(2, email);
            stmt.setInt(3, id);
            return stmt.executeUpdate() > 0;
        }
    }

    public boolean deleteUser(int id) throws SQLException {
        String sql = "DELETE FROM users WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            return stmt.executeUpdate() > 0;
        }
    }

    public ResultSet getAllUsers() throws SQLException {
        Statement stmt = conn.createStatement();
        return stmt.executeQuery("SELECT * FROM users");
    }

    public void close() throws SQLException {
        if (conn != null && !conn.isClosed()) {
            conn.close();
        }
    }
}