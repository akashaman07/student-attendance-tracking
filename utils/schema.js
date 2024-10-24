import { int, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const STUDENTS = mysqlTable('students', {
  id: int('id').autoincrement().primaryKey(), 
  name: varchar('name', { length: 20 }).notNull(), 
  grade: varchar('grade', { length: 10 }).notNull(),
  address: varchar('address', { length: 50 }), 
  contact: varchar('contact', { length: 11 }), 
});


