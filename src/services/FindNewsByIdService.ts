import prismaClient from "../prisma";

interface FindNewsProps {
  id: string;
}

class FindNewsByIdService {
  async execute({ id }: FindNewsProps) {
    if (!id) {
      throw new Error("Id inválido ou inexistente");
    }

    const findNews = await prismaClient.news.findFirst({
      where: {
        id: id,
      },
      include: {
        author: {
          select: {
            nickname: true,
            image: true,
            github_link: true,
            intagram_link: true,
            reddit_link: true,
            twitch_link: true,
            twitter_link: true,
          },
        },
      },
    });

    return findNews;
  }
}

export { FindNewsByIdService };
