import prismaClient from "../prisma";

interface DiscussionByIdProps {
  id: string;
}

class FindDiscussionByIdService {
  async execute({ id }: DiscussionByIdProps) {
    if (!id) {
      throw new Error("Preencha o campo Id");
    }

    const findDiscussion = await prismaClient.discussion.findFirst({
      where: {
        id: id,
      },
      include: {
        author: {
          select: {
            id: true,
            nickname: true,
            image: true,
            github_link: true,
            intagram_link: true,
            reddit_link: true,
            twitch_link: true,
            twitter_link: true,
          },
        },
        comments: {
          orderBy: [
            {
              created_at: "desc",
            },
          ],

          select: {
            author: {
              select: {
                nickname: true,
                id: true,
              },
            },
            content: true,
            id: true,
            created_at: true,
          },
        },
      },
    });

    return findDiscussion;
  }
}

export { FindDiscussionByIdService };
