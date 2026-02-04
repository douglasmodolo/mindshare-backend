import { prismaClient } from "../../prisma/prisma.js";
import { CreateUserInput } from "../dtos/input/user.input.js";

export class UserService {
    async createUser(data: CreateUserInput) {
        const findUser = await prismaClient.user.findUnique({
            where: {
                email: data.email
            },
        });

        if (findUser) {
            throw new Error("User already registered!")
        }

        return prismaClient.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: null
            },
        });
    }

    async findUser(id: string) {
        const user = await prismaClient.user.findUnique({
            where: { id },
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }
}