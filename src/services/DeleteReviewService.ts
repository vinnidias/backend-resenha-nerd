import prismaClient from "../prisma";

interface IDeleteReviewService {
  id: string;
}

class DeleteReviewService {
  async execute({ id }: IDeleteReviewService) {
    const isValidId = await prismaClient.reviews.findUnique({
      where: { id },
    });

    if (!id) {
      throw new Error("ID necessário para localização da resenha!");
    }

    if (!isValidId) {
      throw new Error("Resenha inexistente");
    }

    const deletedReview = await prismaClient.reviews.delete({
      where: {
        id,
      },
    });

    return deletedReview;
  }
}

export { DeleteReviewService };
