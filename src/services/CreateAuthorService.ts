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

    const isUniqueNickName = await prismaClient.author.findFirst({
      where: {
        nickname: nickname,
      },
    });

    const isUniqueEmail = await prismaClient.author.findFirst({
      where: {
        email: email,
      },
    });

    if (isUniqueNickName) {
      console.log("apelido existente: ", isUniqueNickName);
      throw new Error("Apelido já cadastrado, escolha outro e tente novamente");
    }

    if (isUniqueEmail) {
      throw new Error("Email já cadastrado, escolha outro e tente novamente");
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
