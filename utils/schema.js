import { int, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const GRADES = mysqlTable('grades', {
    id: int('id').primaryKey(),
    grade: varchar('grade', { length: 10 }).notNull()  // Ensure varchar is defined and properly imported
});
