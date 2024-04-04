import prismaClient from "../prisma";

interface CreateAuthorProps {
  name: string;
  nickname: string;
  email: string;
  image?: string;
}

class CreateAuthorService {
  async execute({ name, nickname, email, image }: CreateAuthorProps) {
    if (!name || !nickname || !email) {
      throw new Error("Preencha todos os campos para criar o autor!");
    }
    const author = await prismaClient.author.create({
      data: {
        name,
        nickname,
        email,
        image,
      },
    });

    return author;
  }
}

export { CreateAuthorService };
