import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDiscussionService } from "../services/CreateDiscussionService";

interface DiscussionProps {
  authorId: string;
  category: string;
  title: string;
  content: string;
}

class CreateDiscussionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { authorId, category, title, content } =
      request.body as DiscussionProps;
    const discussionService = new CreateDiscussionService();
    const createDiscussion = await discussionService.execute({
      authorId,
      category,
      title,
      content,
    });

    reply.send(createDiscussion);
  }
}

export { CreateDiscussionController };
