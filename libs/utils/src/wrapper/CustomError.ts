import { Console } from "./Console";

class CustomError extends Error {
  constructor(
    name: "TokenError" | "ServerError" | "UserError" | "PopupError",
    message: string
  ) {
    super();

    this.name = name;
    this.message = message;

    Console.error(message);
  }
}

// 일단 간단하게 만들었는데, 나머지도 채워야함.
class TokenError extends CustomError {
  constructor(message: string) {
    super("TokenError", message);
  }
}

class ServerError extends CustomError {
  constructor(message: string) {
    super("ServerError", message);
  }
}

class UserError extends CustomError {
  name!: "UserError";
}

class PopupError extends CustomError {
  name!: "PopupError";
}

export { CustomError, TokenError, ServerError, UserError, PopupError };
