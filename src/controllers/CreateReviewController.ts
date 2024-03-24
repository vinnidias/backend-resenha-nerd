import { FastifyRequest, FastifyReply } from "fastify";
import { CreateReviewService } from "../services/CreateReviewService";

interface CreateReviewProps {
  authorId: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
}

class CreateReviewController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { authorId, category, title, subtitle, content } =
      request.body as CreateReviewProps;

    const reviewService = new CreateReviewService();

    const review = await reviewService.execute({
      authorId,
      category,
      title,
      subtitle,
      content,
    });

    reply.send(review);
  }
}

export { CreateReviewController };
