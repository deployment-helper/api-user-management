import jsonwebtoken from "jsonwebtoken";
export class JwtHelper {
  public static hasPermission(
    permissions: Array<string>,
    checkPermission: string
  ): boolean {
    return permissions.includes(checkPermission);
  }
}
