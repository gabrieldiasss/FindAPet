import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { UpdateUserProfileUseCase } from "../users/updateUserProfile";

export function makeUpdateUProfileUserUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const updateUserProfile = new UpdateUserProfileUseCase(usersRepository);

  return updateUserProfile;
}
