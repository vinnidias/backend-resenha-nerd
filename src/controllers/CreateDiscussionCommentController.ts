import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDiscussionCommentService } from "../services/CreateDiscussionCommentService";

interface CommentProps {
  discussionId: string;
  content: string;
  readerId: string;
}

class CreateDiscussionCommentController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { discussionId, readerId, content } = request.body as CommentProps;

    const commentService = new CreateDiscussionCommentService();

    const comment = await commentService.execute({
      discussionId,
      content,
      readerId,
    });

    reply.send(comment);
  }
}

export { CreateDiscussionCommentController };
