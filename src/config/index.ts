export class Config {
  public static DB_CONNECTION_STRING: string = process.env.DATABASE_NAME
    ? `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASWORD}@${process.env.DB_DOMAIN}`
    : "mongodb://root:password@127.0.0.1:27017/admin";
  public static JWT_SECRET: string = process.env.JWT_SECRET
    ? process.env.JWT_SECRET
    : "jwt_secret";
  public static JWT_EXPIRE_TIME: string = process.env.JWT_EXPIRE_TIME
    ? process.env.JWT_EXPIRE_TIME
    : "1h";
  public static FORGOT_PASSWORD_JWT_EXPIRE_TIME: string = process.env
    .FORGOT_PASSWORD_JWT_EXPIRE_TIME
    ? process.env.FORGOT_PASSWORD_JWT_EXPIRE_TIME
    : "1h";
  public static SEND_GRID_API_KEY: string = process.env.SEND_GRID_API_KEY
    ? process.env.SEND_GRID_API_KEY
    : "";
  public static SEND_GRID_FROM_EMAIL: string = process.env.SEND_GRID_FROM_EMAIL
    ? process.env.SEND_GRID_FROM_EMAIL
    : "vinaymavi@gmail.com";
  public static RESET_PASSWORD_ENDPOINT: string = process.env
    .RESET_PASSWORD_ENDPOINT
    ? process.env.RESET_PASSWORD_ENDPOINT
    : "http://moack.io/api/reset_password";
  public static CORS_WHITE_LIST: Array<string> = process.env.CORS_WHITE_LIST
    ? process.env.CORS_WHITE_LIST.split(",")
    : ["http://localhost:8000"];
}
