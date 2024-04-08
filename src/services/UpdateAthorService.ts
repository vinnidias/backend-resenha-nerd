import prismaClient from "../prisma";

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

class UpdateAuthorService {
  async execute({
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
  }: UpdateAuthorProps) {
    if (!id) {
      throw new Error("ID do autor necessário para atualizar dados!");
    }

    const findAuthor = await prismaClient.author.findUnique({
      where: {
        id: id,
      },
    });

    if (!findAuthor) {
      throw new Error("Autor não encontrado.");
    }

    if (nickname || email) {
      const isUniqueNickName = await prismaClient.author.findFirst({
        where: {
          nickname: nickname,
        },
      });

      const isUniqueEmail = await prismaClient.author.findFirst({
        where: {
          email: email,
        },
      });

      if (isUniqueNickName) {
        throw new Error(
          "Apelido já cadastrado, escolha outro e tente novamente"
        );
      }

      if (isUniqueEmail) {
        throw new Error("Email já cadastrado, escolha outro e tente novamente");
      }
    }

    const authorUpdated = await prismaClient.author.update({
      where: {
        id: findAuthor.id,
      },
      data: {
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
      },
    });

    return authorUpdated;
  }
}

export { UpdateAuthorService };
