import { ErrorMessages } from "../constants";
class BaseError extends Error {
  public statusCode: number;
  public name: string;
  public message: string;
  public help: string;
  public error: string;
  // TODO: header need to be generic
  // public headers:{key:string,value:string}
  constructor(
    error: string,
    statusCode: number,
    name: string,
    message: string,
    help: string
  ) {
    super();
    this.error = error;
    this.statusCode = statusCode;
    this.name = name;
    this.message = message;
    this.help = help;
  }
}

class ErrorBadReq extends BaseError {
  constructor(error: string) {
    super(
      error,
      400,
      "BadRequest",
      ErrorMessages[400].badRequest,
      "https://stackoverflow.com/search?q=bad+request"
    );
  }
}

class ErrorUnAuthorizedAccess extends BaseError {
  constructor(error: string) {
    super(
      error,
      401,
      "UnAutorizedAccess",
      ErrorMessages[401].userDoesNotExist,
      ""
    );
  }
}

export { ErrorBadReq, ErrorUnAuthorizedAccess };
