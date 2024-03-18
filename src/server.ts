import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({logger: true});

const port = 3333

const start = async () => {
  await app.register(cors)
  await app.register(routes)

  try {
    await app.listen({ port: port})
  } catch (error) {
    process.exit(1)
  }
}

start();