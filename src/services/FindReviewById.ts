import prismaClient from "../prisma";

interface FindReviewProps {
  id: string;
}

class FindReviewByIdService {
  async execute({ id }: FindReviewProps) {
    const isValidId = await prismaClient.reviews.findUnique({
      where: {
        id: id,
      }
    })

    if (!id) {
      throw new Error("Id inválido ou inexistente");
    }

    if(!isValidId) {
      throw new Error("Resenha inexistente ou id inválido!")
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
          },
        },
      },
    });

    return findReview;
  }
}

export { FindReviewByIdService };
