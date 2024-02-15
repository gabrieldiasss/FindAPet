export class IdUserNotFoundError extends Error {
  constructor() {
    super("User not found by id");
  }
}
