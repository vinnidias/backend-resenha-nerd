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
import { FindReviewByIdController } from "./controllers/FindReviewByIdController";
import { UpdateAthorController } from "./controllers/UpdateAthorController";
import { DeleteReviewController } from "./controllers/DeleteReviewController";

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

  fastify.patch("/author", (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateAthorController().handle(request, reply);
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

  fastify.get(
    "/reviewbyid",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new FindReviewByIdController().handle(request, reply);
    }
  );

  fastify.delete(
    "/review",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteReviewController().handle(request, reply);
    }
  );
}
