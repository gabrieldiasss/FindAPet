import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "crypto";

export class InMemomoryUsersRepository implements UsersRepository {
  private users: User[] = [];

  async findById(userId: string) {
    const user = this.users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  async findByEmail(email: string) {
    const users = await this.users.find((user) => user.email === email);

    if (!users) {
      return null;
    }

    return users;
  }
  async findByUsername(username: string) {
    const users = await this.users.find((user) => user.username === username);

    if (!users) {
      return null;
    }

    return users;
  }
  async create(data: Prisma.UserCreateInput) {
    const user: User = {
      id: data.id ?? randomUUID(),
      name: data.name ?? null,
      username: data.username ?? null,
      bio: data.bio ?? null,
      address: data.address ?? null,
      email: data.email,
      password_hash: data.password_hash,
      phone: data.phone ?? null,
      residence: data.residence ?? null,
      created_at: new Date(),
      updated_at: new Date() ?? null,
    };

    this.users.push(user);

    return user;
  }

  async updateProfile(userId: string, data: Prisma.UserUncheckedUpdateInput) {
    const userIndex = await this.users.findIndex((user) => user.id === userId);

    if (userIndex < 0) {
      return null;
    }

    const updateUser = {
      id: userId,
      name: data.name ?? null,
      username: data.username ?? null,
      bio: data.bio ?? null,
      address: data.address ?? null,
      phone: data.phone ?? null,
      residence: data.residence ?? null,
      updated_at: new Date(),
    };

    this.users[userIndex] = updateUser as User;

    return updateUser;
  }
}
