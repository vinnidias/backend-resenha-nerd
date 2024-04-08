import prismaClient from "../prisma";

interface CreateAuthorProps {
  name: string;
  nickname: string;
  email: string;
  image?: string;
  intagram_link?: string;
  twitter_link?: string;
  youtube_link?: string;
  github_link?: string;
  reddit_link?: string;
  twitch_link?: string;
}

class CreateAuthorService {
  async execute({
    name,
    nickname,
    email,
    image,
    intagram_link,
    twitter_link,
    youtube_link,
    github_link,
    reddit_link,
    twitch_link,
  }: CreateAuthorProps) {
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
        intagram_link,
        twitter_link,
        youtube_link,
        github_link,
        reddit_link,
        twitch_link,
      },
    });

    return author;
  }
}

export { CreateAuthorService };
