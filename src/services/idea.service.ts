import { Service } from 'typedi';
import { prismaClient } from '../../prisma/prisma.js';
import { CreateIdeaInput, UpdateIdeaInput } from '../dtos/input/idea.input.js';

@Service()
export class IdeaService {
    
    async createIdea(data: CreateIdeaInput, authorId: string){
        return prismaClient.idea.create({
            data: {
                title: data.title,
                description: data.description,
                authorId: authorId
            },
        });        
    }

    async listIdeas() {
        return prismaClient.idea.findMany();
    }

    async findIdeaById(id: string) {
        const idea = await prismaClient.idea.findUnique({
            where: { id },
        });
        
        if (!idea) {
            throw new Error('Idea not found.');
        }
        
        return idea;
    }

    async updateIdea(id: string, data: UpdateIdeaInput) {
        const idea = await prismaClient.idea.findUnique({
            where: { id },
        });

        if (!idea) {
            throw new Error('Idea not found.');
        }

        return prismaClient.idea.update({
            where: { id },
            data: {
                title: data.title ?? idea.title,
                description: data.description ?? idea.description,
            },
        });
    }

    async deleteIdea(id: string) {
        const idea = await prismaClient.idea.findUnique({
            where: { id },
        });
        
        if (!idea) {
            throw new Error('Idea not found.');
        }
        
        await prismaClient.idea.delete({
            where: { id },
        });
    }
}