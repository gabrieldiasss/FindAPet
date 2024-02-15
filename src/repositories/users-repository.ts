import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  updateProfile(
    userId: string,
    data: Prisma.UserUncheckedUpdateInput
  ): Promise<any | null>;
  findById(userId: string): Promise<User | null>;
}
