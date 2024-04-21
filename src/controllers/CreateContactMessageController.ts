import { FastifyRequest, FastifyReply } from "fastify";
import { CreateContactMessageService } from "../services/CreateContactMessageService";

interface ContactMessageProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class CreateContactMessageController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, subject, message } =
      request.body as ContactMessageProps;

    const contactService = new CreateContactMessageService();

    const createContact = await contactService.execute({
      name,
      email,
      subject,
      message,
    });

    reply.send(createContact);
  }
}

export { CreateContactMessageController };
