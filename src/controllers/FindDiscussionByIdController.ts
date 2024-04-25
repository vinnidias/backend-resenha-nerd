import { FastifyRequest, FastifyReply } from "fastify";
import { FindDiscussionByIdService } from "../services/FindDiscussionByIdService";

class FindDiscussionByIdController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const findDiscussionService = new FindDiscussionByIdService();

    const discussionById = await findDiscussionService.execute({ id });

    reply.send(discussionById);
  }
}

export { FindDiscussionByIdController };
