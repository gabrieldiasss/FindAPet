import { makeRegisterUseCase } from "@/use-cases/factories/make-register-use-case";
import { makeUpdateUProfileUserUseCase } from "@/use-cases/factories/make-update-profile-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateParamsSchema = z.object({
    userId: z.string().uuid(),
  });

  const updateBodySchema = z.object({
    name: z.string().optional(),
    username: z.string().optional(),
    bio: z.string().optional(),
    address: z.string().optional(),
    residence: z.string().optional(),
    phone: z.string().optional(),
  });

  const { name, bio, residence, username, phone, address } =
    updateBodySchema.parse(request.body);

  const { userId } = updateParamsSchema.parse(request.params);

  try {
    const updateUserProfileUseCase = makeUpdateUProfileUserUseCase();

    const { user } = await updateUserProfileUseCase.execute({
      userId,
      username,
      address,
      bio,
      name,
      phone,
      residence,
    });

    return reply.status(204).send(user);
  } catch (err) {
    return reply.status(409).send({ message: err.message });
  }
}
