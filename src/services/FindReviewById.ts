import prismaClient from "../prisma";

interface FindReviewProps {
  id: string;
}

class FindReviewByIdService {
  async execute({ id }: FindReviewProps) {
    const isValidId = await prismaClient.reviews.findUnique({
      where: {
        id: id,
      },
    });

    if (!id) {
      throw new Error("Id necessário para localização da resenha");
    }

    if (!isValidId) {
      throw new Error("Resenha inexistente!");
    }

    const findReview = await prismaClient.reviews.findFirst({
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

    return findReview;
  }
}

export { FindReviewByIdService };
