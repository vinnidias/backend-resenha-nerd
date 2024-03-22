import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNewsController } from "./controllers/CreateNewsController";
import { ListNewsController } from "./controllers/ListNewsController";
import { FindNewsByIdController } from "./controllers/FindNewsByIdController";
import { CreateAuthorController } from "./controllers/CreateAuthorController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyInstance
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return {
      ok: true,
    };
  });

  fastify.post(
    "/news",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNewsController().handle(request, reply);
    }
  );

  fastify.post("/author", (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateAuthorController().handle(request, reply);
  });

  fastify.get("/news", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListNewsController().handle(request, reply);
  });

  fastify.get(
    "/newsbyid",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new FindNewsByIdController().handle(request, reply);
    }
  );
}
