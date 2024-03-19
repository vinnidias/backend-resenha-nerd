import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNewsService } from "../services/CreateNewsService";

class CreateNewsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      author,
      title,
      subtitle,
      category,
      content,
      end_text,
      image,
      image_credits,
      link,
    } = request.body as {
      author: string;
      title: string;
      subtitle: string;
      category: string;
      content: string;
      end_text?: string;
      image?: string;
      image_credits?: string;
      link?: string;
    };

    const newsService = new CreateNewsService();

    const news = await newsService.execute({
      author,
      title,
      subtitle,
      category,
      content,
      end_text,
      image,
      image_credits,
      link,
    });

    reply.send(news);
  }
}

export { CreateNewsController };
