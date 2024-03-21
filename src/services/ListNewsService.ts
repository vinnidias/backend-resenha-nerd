import prismaClient from "../prisma";

class ListNewsService {
  async execute() {
    const news = await prismaClient.news.findMany({orderBy: [
      {
        created_at: "desc"
      }
    ]});

    return news;
  }
}

export { ListNewsService };
