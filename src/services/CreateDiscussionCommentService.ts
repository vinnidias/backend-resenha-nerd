import prismaClient from "../prisma";

interface CommentProps {
  discussionId: string;
  content: string;
  readerId: string;
}

class CreateDiscussionCommentService {
  async execute({ discussionId, content, readerId }: CommentProps) {
    const isValidDiscussion = await prismaClient.discussion.findUnique({
      where: {
        id: discussionId,
      },
    });

    const isValidReader = await prismaClient.reader.findUnique({
      where: {
        nickname: readerId,
      },
    });

    if (!discussionId || !content || !readerId) {
      throw new Error("Preencha todos os campos!");
    }

    if (!isValidDiscussion) {
      throw new Error("Discussão inexistente!");
    }

    if (!isValidReader) {
      throw new Error("Leitor inexistente");
    }

    const comment = await prismaClient.comments.create({
      data: {
        readerId,
        content,
        discussionId,
      },
    });

    return comment;
  }
}

export { CreateDiscussionCommentService };
