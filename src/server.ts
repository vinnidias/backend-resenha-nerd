import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;
const HOST = "0.0.0.0";

const start = async () => {
  await app.register(cors, {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  });
  await app.register(routes);

  try {
    await app.listen({ port: PORT, host: HOST });
  } catch (error) {
    process.exit(1);
  }
};

start();
