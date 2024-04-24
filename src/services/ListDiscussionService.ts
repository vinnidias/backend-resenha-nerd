import prismaClient from "../prisma";

class ListDiscussionService {
  async execute() {
    const discussions = await prismaClient.discussion.findMany({
      orderBy: [
        {
          created_at: "desc",
        },
      ],
      include: {
        author: { select: { nickname: true, image: true } },
        comments: {
          select: {
            author: {
              select: {
                nickname: true,
                id: true,
                email: true,
              },
            },
            content: true,
          },
        },
      },
    });

    return discussions;
  }
}

export { ListDiscussionService };
