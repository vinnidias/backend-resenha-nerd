import { FastifyRequest, FastifyReply } from "fastify";
import { ListNewsService } from "../services/ListNewsService";

class ListNewsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listNewsService = new ListNewsService();

    const news = await listNewsService.execute();

    reply.send(news);
  }
}

export { ListNewsController };
