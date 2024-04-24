import { FastifyRequest, FastifyReply } from "fastify";
import { CreateReaderService } from "../services/CreateReaderService";

interface ReaderProps {
  nickname: string;
  email: string;
}

class CreateReaderController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { nickname, email } = request.body as ReaderProps;

    const readerService = new CreateReaderService();

    const reader = await readerService.execute({ nickname, email });

    reply.send(reader);
  }
}

export { CreateReaderController };
