import prismaClient from "../prisma";

interface CreateNewsProps {
  author: string;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  end_text?: string;
  image?: string;
  image_credits?: string;
  link?: string;
}

class CreateNewsService {
  async execute({
    author,
    title,
    subtitle,
    category,
    content,
    end_text,
    image,
    image_credits,
    link,
  }: CreateNewsProps) {
    const isValidAuthor = await prismaClient.author.findUnique({
      where: {
        nickname: author,
      },
    });

    console.log("AUTOR: ", isValidAuthor); 

    if (!author || !title || !subtitle || !content || !category) {
      throw new Error("Preencha todos os campos para enviar a notícia!");
    }

    if (!isValidAuthor) {
      throw new Error("Autor inexistente");
    }

    const news = await prismaClient.news.create({
      data: {
        authorId: author,
        category,
        title,
        subtitle,
        content,
        end_text,
        image,
        image_credits,
        link,
      },
    });

    return news;
  }
}

export { CreateNewsService };
