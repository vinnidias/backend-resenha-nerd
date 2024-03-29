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
      include: { author: { select: { nickname: true, image: true } } },
    });

    return findNews;
  }
}

export { FindNewsByIdService };
