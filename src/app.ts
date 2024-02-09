import { FastifyReply, FastifyRequest, fastify } from "fastify";

export const app = fastify();

app.get("/hello", (request: FastifyRequest, reply: FastifyReply) => {
  return reply.status(200).send({ message: "Olá, mundo" });
});
