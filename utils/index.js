import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "127.0.0.1",       // Localhost IP address
  user: "root",            // MySQL username
  database: "student_attendance",  // The name of your database
  password: "123",         // Your MySQL password
  port: 3306,              // MySQL default port
});

// Initialize Drizzle ORM
export const db = drizzle(connection);

// Now you can use `db` for database operations.
