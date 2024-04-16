import { defineConfig } from "drizzle-kit"

export default defineConfig({
   schema: "./src/drizzle/schema.ts",
   out: "./src/drizzle/migrations",
   driver: "pg",
   dbCredentials: {
      connectionString: process.env.DATABASE_URL!,
   },
   verbose: true, // while migrating the database, it will log the SQL queries
   strict: true, // ensure that while migrating the database, it will ask for confirmation before running the queries
})
