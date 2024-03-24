import prismaClient from "../prisma";

class ListNewsService {
  async execute() {
    const news = await prismaClient.news.findMany({
      orderBy: [
        {
          created_at: "desc",
        },
      ],
      include: {
        author: { select: { nickname: true, image: true } },
      },
    });

    return news;
  }
}

export { ListNewsService };
