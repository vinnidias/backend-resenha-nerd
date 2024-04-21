import prismaClient from "../prisma";

class ListContactsService {
  async execute() {
    const contacts = await prismaClient.contactMessage.findMany({
      orderBy: [
        {
          created_at: "desc",
        },
      ],
    });

    return contacts;
  }
}

export { ListContactsService };
