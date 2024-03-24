import { FastifyRequest, FastifyReply } from "fastify";

import { ListReviewService } from "../services/ListReviewService";

class ListReviewController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listReviewsService = new ListReviewService();

    const reviews = await listReviewsService.execute();

    reply.send(reviews);
  }
}

export { ListReviewController };
