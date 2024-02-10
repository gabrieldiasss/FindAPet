export class EmailAlreadyExistsError extends Error {
  constructor() {
    super("Already Exists user with same email.");
  }
}
