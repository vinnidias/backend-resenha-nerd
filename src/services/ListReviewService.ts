import prismaClient from "../prisma";

class ListReviewService {
  async execute() {
    const reviews = await prismaClient.reviews.findMany({
      orderBy: [{ created_at: "desc" }],
      include: { author: { select: { nickname: true, image: true } } },
    });

    return reviews;
  }
}

export { ListReviewService };
