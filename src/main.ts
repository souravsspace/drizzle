import "dotenv/config"
import { Hono } from "hono"
import { serve } from "@hono/node-server"
import { getData } from "./test/data"

const app = new Hono()

app.get("/", (c) => {
   return c.text("Hello Hono!")
})

console.log(`Server is running on port ${process.env.PORT}`)
getData()

serve({
   fetch: app.fetch,
   port: Number(process.env.PORT),
})
