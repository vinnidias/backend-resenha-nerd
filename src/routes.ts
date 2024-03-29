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
import { CreateReviewController } from "./controllers/CreateReviewController";
import { ListReviewController } from "./controllers/ListReviewController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyInstance
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return {
      ok: true,
    };
  });

  fastify.post("/author", (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateAuthorController().handle(request, reply);
  });

  fastify.post(
    "/news",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNewsController().handle(request, reply);
    }
  );

  fastify.get("/news", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListNewsController().handle(request, reply);
  });

  fastify.get(
    "/newsbyid",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new FindNewsByIdController().handle(request, reply);
    }
  );

  fastify.post(
    "/review",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateReviewController().handle(request, reply);
    }
  );

  fastify.get(
    "/reviews",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListReviewController().handle(request, reply);
    }
  );
}
