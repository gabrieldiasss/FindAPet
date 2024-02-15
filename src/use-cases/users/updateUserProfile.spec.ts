import { InMemomoryUsersRepository } from "@/repositories/in-memory/users-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { UpdateUserProfileUseCase } from "./updateUserProfile";
import { RegisterUseCase } from "./register";
import { IdUserNotFoundError } from "../errors/IdUserNotFoundError";
import { UsernameAlreadyExistsError } from "../errors/UsernameAlreadyExistsError";

let usersRepository: InMemomoryUsersRepository;
let registerUseCase: RegisterUseCase;
let updateUserProfileUseCase: UpdateUserProfileUseCase;

describe("Update user profile", () => {
  beforeEach(async () => {
    usersRepository = new InMemomoryUsersRepository();
    registerUseCase = new RegisterUseCase(usersRepository);
    updateUserProfileUseCase = new UpdateUserProfileUseCase(usersRepository);
  });

  it("Should be able to Update user", async () => {
    const userCreate = await registerUseCase.execute({
      name: "Gabriel Dias",
      address: "Rua Santo André",
      bio: "Olá, gosto de gatos",
      phone: "119595",
      residence: "Apartamento",
      username: "gabrieldiasss",
      email: "gabrieldiascorrea@gmail.com",
      password: "12345678",
    });

    const data = {
      name: "Gabriel Dias Correa",
      address: "Rua Santo Amaro, 290",
      bio: "Olá, gosto de cachorros",
      phone: "11959232325",
      residence: "Apartamento",
      username: "gabrieldias",
    };

    const { user } = await updateUserProfileUseCase.execute(
      userCreate.user.id,
      data
    );

    expect(new Date(user.updated_at as Date)).toStrictEqual(expect.any(Date));
  });

  it("Should be not found id for update user", async () => {
    const data = {
      name: "12345",
      address: "Rua Santo Amaro, 290",
      bio: "Olá, gosto de cachorros",
      phone: "11959232325",
      residence: "Apartamento",
      username: "gabrieldias7",
    };

    await expect(() =>
      updateUserProfileUseCase.execute("non-existing-id", data)
    ).rejects.toBeInstanceOf(IdUserNotFoundError);
  });

  it("Should not be update user twice username", async () => {
    await registerUseCase.execute({
      name: "Gabriel Dias",
      address: "Rua Santo André",
      bio: "Olá, gosto de gatos",
      phone: "119595",
      residence: "Apartamento",
      username: "gabriel",
      email: "gabrielcorrea@gmail.com",
      password: "12345678",
    });

    const user2 = await registerUseCase.execute({
      name: "Gabriel Dias",
      address: "Rua Santo André",
      bio: "Olá, gosto de gatos",
      phone: "119595",
      residence: "Apartamento",
      username: "gabrieldiascorrea",
      email: "gabrieldiascorrea@gmail.com",
      password: "12345678",
    });

    const data = {
      name: "Gabriel Dias Correa",
      address: "Rua Santo Amaro, 290",
      bio: "Olá, gosto de cachorros",
      phone: "11959232325",
      residence: "Apartamento",
      username: "gabriel",
    };

    await expect(() =>
      updateUserProfileUseCase.execute(user2.user.id, data)
    ).rejects.toBeInstanceOf(UsernameAlreadyExistsError);
  });
});
