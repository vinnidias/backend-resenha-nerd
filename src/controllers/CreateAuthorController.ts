import { FastifyRequest, FastifyReply } from "fastify";
import { CreateAuthorService } from "../services/CreateAuthorService";

interface CreateAuthorProps {
  name: string;
  nickname: string;
  email: string;
  image?: string;
}

class CreateAuthorController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, nickname, email, image } = request.body as CreateAuthorProps;

    const authorService = new CreateAuthorService();

    const author = await authorService.execute({ name, nickname, email, image });

    reply.send(author);
  }
}

export { CreateAuthorController };
