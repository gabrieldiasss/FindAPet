import { FastifyInstance } from "fastify";
import { register } from "./register";
import { update } from "./update";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.patch("/users/:userId", update);
}
