import { FastifyRequest, FastifyReply } from "fastify";
import { FindNewsByIdService } from "../services/FindNewsByIdService";

class FindNewsByIdController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const findNewsByIdService = new FindNewsByIdService();

    const newsById = await findNewsByIdService.execute({ id });

    reply.send(newsById);
  }
}

export { FindNewsByIdController };
