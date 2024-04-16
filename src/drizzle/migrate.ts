import "dotenv/config"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 })
const db = drizzle(migrationClient)

async function main() {
   await migrate(db, {
      migrationsFolder: "./src/drizzle/migrations",
   })

   await migrationClient.end()
}

main()
