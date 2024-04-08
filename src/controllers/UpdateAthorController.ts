import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateAuthorService } from "../services/UpdateAthorService";

interface UpdateAuthorProps {
  id: string;
  name?: string;
  nickname?: string;
  email?: string;
  image?: string;
  intagram_link?: string;
  twitter_link?: string;
  youtube_link?: string;
  github_link?: string;
  reddit_link?: string;
  twitch_link?: string;
}

class UpdateAthorController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      id,
      name,
      nickname,
      email,
      image,
      intagram_link,
      twitter_link,
      youtube_link,
      github_link,
      reddit_link,
      twitch_link,
    } = request.body as UpdateAuthorProps;

    const authorService = new UpdateAuthorService();

    const updatedAuthor = await authorService.execute({
      id,
      name,
      nickname,
      email,
      image,
      intagram_link,
      twitter_link,
      youtube_link,
      github_link,
      reddit_link,
      twitch_link,
    });

    reply.send(updatedAuthor);
  }
}

export { UpdateAthorController };
