export class Config {
  public static DB_CONNECTION_STRING: string = process.env.DATABASE_NAME
    ? `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASWORD}@${process.env.DB_DOMAIN}`
    : "mongodb://root:password@192.168.29.20:27017/admin";

  public static JWT_SECRET: string = process.env.JWT_SECRET || "jwt_secret";

  public static JWT_EXPIRE_TIME: string = process.env.JWT_EXPIRE_TIME || "1h";

  public static CORS_WHITE_LIST: Array<string> = process.env.CORS_WHITE_LIST
    ? process.env.CORS_WHITE_LIST.split(",")
    : ["http://localhost:8000"];

  public static GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "";
  public static GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || "";
}
