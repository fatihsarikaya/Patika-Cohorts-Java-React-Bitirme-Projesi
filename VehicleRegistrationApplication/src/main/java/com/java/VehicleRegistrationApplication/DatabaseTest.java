package com.java.VehicleRegistrationApplication;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/vehicle_registration";
        String user = "admin";
        String password = "1234";

        try {
            Connection connection = DriverManager.getConnection(url, user, password);
            System.out.println("Database connection established.");
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Failed to connect to the database.");
        }
    }
}
