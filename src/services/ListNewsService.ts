import prismaClient from "../prisma";

class ListNewsService {
  async execute() {
    const news = await prismaClient.news.findMany();

    return news;
  }
}

export { ListNewsService };
