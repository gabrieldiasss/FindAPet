import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";

interface RegisterUseCaseRequest {
  username: string;
  name: string | undefined;
  email: string;
  bio: string | undefined;
  phone: string | undefined;
  address: string | undefined;
  residence: string | undefined;
  password_hash: string;
}

interface RegisterUseCaseResponse {
  user: User;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    username,
    name,
    email,
    bio,
    phone,
    address,
    residence,
    password_hash,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const user = await this.usersRepository.create({
      username,
      name,
      email,
      bio,
      phone,
      address,
      residence,
      password_hash,
    });

    return {
      user,
    };
  }
}
