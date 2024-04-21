import prismaClient from "../prisma";

interface ContactMessageProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class CreateContactMessageService {
  async execute({ name, email, subject, message }: ContactMessageProps) {
    if (!name) {
      throw new Error("Preencha o campo NOME");
    }

    if (!email) {
      throw new Error("Preencha o campo EMAIL");
    }

    if (!subject) {
      throw new Error("Preencha o campo ASSUNTO");
    }

    if (!message) {
      throw new Error("Preencha o campo MENSAGEM");
    }

    const createMessage = await prismaClient.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return createMessage;
  }
}

export { CreateContactMessageService };
