import User from "./user.model";
describe("User model tests", () => {
  it("Model should loaded", () => {
    expect(User).toBeTruthy();
  });
  test("Should return jwtObject", () => {
    const u = new User();
    u.firstName = "vinay";
    u.lastName = "mavi";
    u.email = "vinaymavi@gmail.com";
    u.password = "password";
    expect(u.jwtObject).toBeTruthy();
    const jwtObj = u.jwtObject();
    expect(jwtObj.password).toBeFalsy();
    expect(jwtObj.email).toBeTruthy();
  });
});
