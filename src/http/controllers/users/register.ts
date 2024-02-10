import { makeRegisterUseCase } from "@/use-cases/factories/make-register-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    name: z.string().optional(),
    email: z.string().email(),
    bio: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    residence: z.string().optional(),
    password_hash: z.string().min(8),
  });

  const {
    username,
    name,
    email,
    bio,
    phone,
    address,
    residence,
    password_hash,
  } = registerBodySchema.parse(request.body);

  try {
    const registerUseCase = makeRegisterUseCase();

    await registerUseCase.execute({
      username,
      name,
      email,
      bio,
      phone,
      address,
      residence,
      password_hash,
    });
  } catch (err) {
    throw new Error("Error");
  }

  return reply.status(201).send();
}
