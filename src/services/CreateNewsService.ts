import prismaClient from "../prisma";

interface CreateNewsProps {
  author: string;
  title: string;
  subtitle: string;
  content: string;
}

class CreateNewsService {
  async execute({ author, title, subtitle, content }: CreateNewsProps) {
    if (!author || !title || !subtitle || !content) {
      throw new Error("Preencha todos os campos para enviar a notícia!");
    }

    const news = prismaClient.news.create({
      data: {
        author,
        title,
        subtitle,
        content,
      },
    });

    return news;
  }
}

export { CreateNewsService };
