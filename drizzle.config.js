export default {
  schema: "./utils/schema.js",  // Path to your schema
  out: "./drizzle",             // Directory for the generated drizzle files
  dialect: "mysql",             // Specify the database dialect
  dbCredentials: {
    host: "127.0.0.1",          // Hostname (localhost)
    user: "root",               // Username (root)
    password: "123",  // Replace with the actual password
    database: "student_attendance",  // Database name
    port: 3306,                 // MySQL port
  },
};
