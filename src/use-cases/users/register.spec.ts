import { InMemomryUsersRepository } from "@/repositories/in-memory/users-repository";
import { describe, it, expect, beforeEach } from "vitest";
import { RegisterUseCase } from "./register";
import { EmailAlreadyExistsError } from "../errors/EmailAlreadyExistsError";
import { UsernameAlreadyExistsError } from "../errors/UsernameAlreadyExistsError";
import { compare } from "bcryptjs";

let usersRepository: InMemomryUsersRepository;
let registerUserUseCase: RegisterUseCase;

describe("Register user", () => {
  beforeEach(() => {
    usersRepository = new InMemomryUsersRepository();
    registerUserUseCase = new RegisterUseCase(usersRepository);
  });

  it("Shold be able register user", async () => {
    const { user } = await registerUserUseCase.execute({
      username: "gabrieldias",
      email: "gabriel@gmail.com",
      password: "12345678",
      address: undefined,
      bio: undefined,
      name: undefined,
      phone: undefined,
      residence: undefined,
    });

    expect(user.username).toBe("gabrieldias");
    expect(user.email).toBe("gabriel@gmail.com");
  });

  it("Shold not be able register two users with same email", async () => {
    await registerUserUseCase.execute({
      username: "gabrieldias",
      email: "gabriel@gmail.com",
      password: "12345678",
      address: undefined,
      bio: undefined,
      name: undefined,
      phone: undefined,
      residence: undefined,
    });

    await expect(() =>
      registerUserUseCase.execute({
        username: "gabrieldiascorrea",
        email: "gabriel@gmail.com",
        password: "12345678",
        address: undefined,
        bio: undefined,
        name: undefined,
        phone: undefined,
        residence: undefined,
      })
    ).rejects.toBeInstanceOf(EmailAlreadyExistsError);
  });

  it("Should not be able register two user with same username", async () => {
    await registerUserUseCase.execute({
      username: "gabrieldias",
      email: "gabriel@gmail.com",
      password: "12345678",
      address: undefined,
      bio: undefined,
      name: undefined,
      phone: undefined,
      residence: undefined,
    });

    await expect(() =>
      registerUserUseCase.execute({
        username: "gabrieldias",
        email: "gabrieldias@gmail.com",
        password: "12345678",
        address: undefined,
        bio: undefined,
        name: undefined,
        phone: undefined,
        residence: undefined,
      })
    ).rejects.toBeInstanceOf(UsernameAlreadyExistsError);
  });

  it("Should be able hash password", async () => {
    const { user } = await registerUserUseCase.execute({
      username: "gabrieldias",
      email: "gabrieldias@gmail.com",
      password: "12345678",
      address: undefined,
      bio: undefined,
      name: undefined,
      phone: undefined,
      residence: undefined,
    });

    const comparePassword = await compare("12345678", user.password_hash);

    expect(comparePassword).toBe(true);
  });
});
