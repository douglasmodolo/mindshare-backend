import { prismaClient } from "../../prisma/prisma.js";
import { CreateCommentInput } from "../dtos/input/comment.input.js";

export class CommentService {
    async createComment(ideaId: string, authorId: string,  data: CreateCommentInput) {
        const idea = await prismaClient.idea.findUnique({
            where: { id: ideaId },
        });

        if (!idea) {
            throw new Error('Idea not found');
        }

        return prismaClient.comment.create({
            data: {
                ideaId,
                authorId,
                content: data.content
            },
        });

    }

    async listByIdeaId(ideaId: string) {
        return prismaClient.comment.findMany({
            where: { ideaId },
        });
    }
}