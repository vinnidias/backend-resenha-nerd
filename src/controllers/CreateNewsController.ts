import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNewsService } from "../services/CreateNewsService";

class CreateNewsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { author, title, subtitle, content } = request.body as {
      author: string;
      title: string;
      subtitle: string;
      content: string;
    };

    const newsService = new CreateNewsService();

    const news = await newsService.execute({
      author,
      title,
      subtitle,
      content,
    });

    reply.send(news);
  }
}

export { CreateNewsController };
