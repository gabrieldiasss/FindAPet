import { Prisma } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { prisma } from "@/lib/prisma";

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findByUsername(username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  }

  async updateProfile(userId: string, data: Prisma.UserUncheckedUpdateInput) {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });

    return user;
  }

  async findById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}
