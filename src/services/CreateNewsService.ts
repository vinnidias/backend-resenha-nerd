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
    if (!author || !title || !subtitle || !content || !category) {
      throw new Error("Preencha todos os campos para enviar a notícia!");
    }

    const news = prismaClient.news.create({data:{
      author,
      category,
      title,
      subtitle,
      content,
      end_text,
      image,
      image_credits,
      link
    }});

    return news;
  }
}

export { CreateNewsService };
