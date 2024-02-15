import { EmailAlreadyExistsError } from "@/use-cases/errors/EmailAlreadyExistsError";
import { UsernameAlreadyExistsError } from "@/use-cases/errors/UsernameAlreadyExistsError";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string().trim(),
    name: z.string().optional(),
    email: z.string().email(),
    bio: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    residence: z.string().optional(),
    password: z.string().min(8),
  });

  const { username, name, email, bio, phone, address, residence, password } =
    registerBodySchema.parse(request.body);

  try {
    const registerUseCase = makeRegisterUseCase();

    const registerUser = await registerUseCase.execute({
      username,
      name,
      email,
      bio,
      phone,
      address,
      residence,
      password,
    });
    return reply.status(201).send({ registerUser });
  } catch (err) {
    return reply.status(409).send({ message: err.message });
  }
}
