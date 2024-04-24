import prismaClient from "../prisma";

interface DiscussionProps {
  authorId: string;
  category: string;
  title: string;
  content: string;
}

class CreateDiscussionService {
  async execute({ authorId, category, title, content,  }: DiscussionProps) {
    const isValidAuthor = await prismaClient.author.findUnique({
      where: {
        nickname: authorId,
      },
    });
    if (!authorId || !title || !content || !category) {
      throw new Error("Preencha todos os campos para enviar a notícia!");
    }

    if (!isValidAuthor) {
      throw new Error("Autor inexistente");
    }

    const discussion = await prismaClient.discussion.create({
      data: {
        authorId,
        category,
        content,
        title,
      },
    });

    return discussion;
  }
}

export { CreateDiscussionService };
