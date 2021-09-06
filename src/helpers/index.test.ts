import helpers, { EntityHelper, JwtHelper, UserHelper } from "./index";
describe("Helper Tests", () => {
  it("Module should loaded", () => {
    expect(helpers).toBeTruthy();
  });

  test("Entity helper should loaded", () => {
    expect(EntityHelper).toBeTruthy();
  });
  test("JWT helper should loaded", () => {
    expect(JwtHelper).toBeTruthy();
  });
  test("User helper should loaded", () => {
    expect(UserHelper).toBeTruthy();
  });
});
