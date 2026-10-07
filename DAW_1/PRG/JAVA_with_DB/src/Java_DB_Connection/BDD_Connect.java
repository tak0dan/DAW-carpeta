package Java_DB_Connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class BDD_Connect {

    public static void main(String[] args) {
        Connection connection = null;
        Statement sentence = null;
        String url = "jdbc:mysql://localhost:3306/PRG";
        String user = "test";
        String password = "test";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, user, password);
            sentence = connection.createStatement();

            String query = "insert into students (code, name) values ( 7 , 'Loquillo')";
            sentence.execute(query);
            System.out.println("Registro insertado correctamente");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (sentence != null) sentence.close();
                if (connection != null) connection.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}