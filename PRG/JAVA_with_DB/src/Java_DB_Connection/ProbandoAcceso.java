package Java_DB_Connection;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.DatabaseMetaData;
public class ProbandoAcceso {
    public static void main(String[] args) {
        Connection connection = null;
        String url = "jdbc:mysql://localhost:3306/PRG";
        String user = "test";
        String password = "test";
        try {
            // Establish connection
            connection = DriverManager.getConnection(url, user, password);
            
            // Check if table exists, if not create it
            if (!tableExists(connection, "usuarios")) {
                createTable(connection);
                System.out.println("Table 'usuarios' created successfully.");
            }
            
            // Query data
            PreparedStatement stmtQ = connection.prepareStatement("SELECT * FROM usuarios");
            ResultSet rs = stmtQ.executeQuery();
            System.out.println("Current users:");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " " + rs.getString("nombre") + " " + rs.getString("email"));
            }
            
            // Insert data
            PreparedStatement stmt = connection.prepareStatement(
                "INSERT INTO usuarios (id, nombre, email) VALUES (?, ?, ?)"
            );
            
            stmt.setInt(1, 6);
            stmt.setString(2, "Federico");
            stmt.setString(3, "fede@gmail.com");
            
            int rowsAffected = stmt.executeUpdate();
            System.out.println("Rows inserted: " + rowsAffected);
            
            // Close resources
            rs.close();
            stmtQ.close();
            stmt.close();
            
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Close connection
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    private static boolean tableExists(Connection connection, String tableName) throws SQLException {
        DatabaseMetaData meta = connection.getMetaData();
        ResultSet rs = meta.getTables(null, null, tableName, new String[] {"TABLE"});
        boolean exists = rs.next();
        rs.close();
        return exists;
    }
    
    private static void createTable(Connection connection) throws SQLException {
        String createTableSQL = "CREATE TABLE usuarios (" +
                "id INT PRIMARY KEY, " +
                "nombre VARCHAR(100) NOT NULL, " +
                "email VARCHAR(100)" +
                ")";
        
        Statement stmt = connection.createStatement();
        stmt.execute(createTableSQL);
        stmt.close();
    }
}