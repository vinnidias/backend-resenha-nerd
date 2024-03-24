import prismaClient from "../prisma";

interface CreateReviewProps {
  authorId: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
}

class CreateReviewService {
  async execute({
    authorId,
    category,
    title,
    subtitle,
    content,
  }: CreateReviewProps) {
    const isValidAuthor = await prismaClient.author.findUnique({
      where: {
        nickname: authorId,
      },
    });
    if (!authorId || !category || !title || !subtitle || !content) {
      throw new Error("Preencha todos os campos para enviar a resenha!");
    }
    if (!isValidAuthor) {
      throw new Error("Autor inexistente");
    }

    const review = await prismaClient.reviews.create({
      data: {
        authorId,
        category,
        title,
        subtitle,
        content,
      },
    });

    return review;
  }
}

export { CreateReviewService };
