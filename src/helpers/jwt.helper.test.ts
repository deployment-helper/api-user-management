import { JwtHelper } from "./jwt.helper";
describe("JWT Helpers Tests", () => {
  it("Module Should loaded", () => {
    expect(JwtHelper).toBeTruthy();
  });
  test("Should not have permissions", () => {
    const permissionsSet: Array<string> = new Array<string>();
    permissionsSet.push("entity.prj_123.write");
    const isValid = JwtHelper.hasPermission(
      permissionsSet,
      "entity.prj_123.read"
    );
    expect(isValid).toBeFalsy();
  });
  test("Should  have permissions", () => {
    const permissionsSet: Array<string> = new Array<string>();
    permissionsSet.push("entity.prj_123.write");
    const isValid = JwtHelper.hasPermission(
      permissionsSet,
      "entity.prj_123.write"
    );
    expect(isValid).toBeTruthy();
  });
});
