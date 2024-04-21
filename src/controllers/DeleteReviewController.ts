import { FastifyRequest, FastifyReply } from "fastify";

import { DeleteReviewService } from "../services/DeleteReviewService";

class DeleteReviewController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.body as { id: string };

    const deleteReviewService = new DeleteReviewService();
    const deleteReviewById = await deleteReviewService.execute({ id });

    reply.send(deleteReviewById);
  }
}

export { DeleteReviewController };
