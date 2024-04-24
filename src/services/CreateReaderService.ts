import prismaClient from "../prisma";

interface ReaderProps {
  nickname: string;
  email: string;
}

class CreateReaderService {
  async execute({ nickname, email }: ReaderProps) {
    const isUniqueNickname = await prismaClient.reader.findUnique({
      where: { nickname: nickname },
    });

    if (!nickname || !email) {
      throw new Error("Preencha todos os dados para cadastrar o Leitor");
    }

    if (isUniqueNickname) {
      throw new Error(
        "Apelido " + nickname + " já existente, escolha outro e tente novamente"
      );
    }

    const reader = await prismaClient.reader.create({
      data: {
        email,
        nickname,
      },
    });

    return reader;
  }
}

export { CreateReaderService };
