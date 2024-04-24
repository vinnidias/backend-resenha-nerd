import { FastifyRequest, FastifyReply } from "fastify";
import { ListDiscussionService } from "../services/ListDiscussionService";

class ListDiscussionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listDiscussionsService = new ListDiscussionService();
    const discussions = await listDiscussionsService.execute();

    reply.send(discussions);
  }
}

export { ListDiscussionController };
