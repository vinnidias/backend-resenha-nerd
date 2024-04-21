import { FastifyRequest, FastifyReply } from "fastify";
import { ListContactsService } from "../services/ListContactsService";

class ListContactsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listContactsService = new ListContactsService();

    const contacts = await listContactsService.execute();

    reply.send(contacts);
  }
}

export { ListContactsController };
