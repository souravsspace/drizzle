import { db } from "../drizzle/db"
import { UserTable } from "../drizzle/schema"

export async function insertData() {
   await db.insert(UserTable).values({
      name: "Sourav",
   })
}

export async function getData() {
   const data = await db.query.UserTable.findMany()
   console.log(data)
   return data
}
