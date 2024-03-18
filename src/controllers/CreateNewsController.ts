import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNewsService } from "../services/CreateNewsService";

class CreateNewsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { author, title, subtitle, category, content, image } =
      request.body as {
        author: string;
        title: string;
        subtitle: string;
        category: string;
        content: string;
        image: string;
      };

    const newsService = new CreateNewsService();

    const news = await newsService.execute({
      author,
      title,
      subtitle,
      category,
      content,
      image,
    });

    reply.send(news);
  }
}

export { CreateNewsController };
