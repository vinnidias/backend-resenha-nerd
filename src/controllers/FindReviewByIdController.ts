import { FastifyReply, FastifyRequest } from "fastify";
import { FindReviewByIdService } from "../services/FindReviewById";

class FindReviewByIdController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const findReviewService = new FindReviewByIdService();

    const reviewById = await findReviewService.execute({ id });

    reply.send(reviewById);
  }
}

export { FindReviewByIdController };
