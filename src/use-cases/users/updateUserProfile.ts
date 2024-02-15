import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { IdUserNotFoundError } from "../errors/IdUserNotFoundError";
import { UsernameAlreadyExistsError } from "../errors/UsernameAlreadyExistsError";

interface UpdateUserProfileUseCaseRequest {
  userId: string;
  username?: string;
  name?: string;
  bio?: string;
  phone?: string;
  address?: string;
  residence?: string;
}

interface UpdateUserProfileUseCaseResponse {
  user: User;
}

export class UpdateUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    username,
    residence,
    address,
    bio,
    name,
    phone,
  }: UpdateUserProfileUseCaseRequest): Promise<UpdateUserProfileUseCaseResponse> {
    const findId = await this.usersRepository.findById(userId);

    if (!findId) {
      throw new IdUserNotFoundError();
    }

    const data = {
      username,
      name,
      bio,
      phone,
      address,
      residence,
    };

    const alreadyExistsUserWithUsername =
      await this.usersRepository.findByUsername(username as string);

    if (alreadyExistsUserWithUsername) {
      throw new UsernameAlreadyExistsError();
    }

    const user = await this.usersRepository.updateProfile(userId, data);

    return {
      user,
    };
  }
}
