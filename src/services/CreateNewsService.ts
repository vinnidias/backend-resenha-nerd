import prismaClient from "../prisma";

interface CreateNewsProps {
  author: string;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  image?: string;
}

class CreateNewsService {
  async execute({ author, title, subtitle, category, content, image }: CreateNewsProps) {
    if (!author || !title || !subtitle || !content || !category) {
      throw new Error("Preencha todos os campos para enviar a notícia!");
    }

    const news = prismaClient.news.create({
      data: {
        author,
        title,
        subtitle,
        category,
        content,
        image
      },
    });

    return news;
  }
}

export { CreateNewsService };
