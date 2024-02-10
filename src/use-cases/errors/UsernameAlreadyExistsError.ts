export class UsernameAlreadyExistsError extends Error {
  constructor() {
    super("Already exists user with same username.");
  }
}
