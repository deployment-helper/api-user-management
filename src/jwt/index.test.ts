import { JWT } from "./index";
describe("JWT Tests", () => {
  it("Module should loaded", () => {
    expect(JWT).toBeTruthy();
  });

  test("Should create token", () => {
    const token = JWT.createToken(
      { name: "vinay", email: "vinaymavi@gmail.com" },
      "secret",
      "3m"
    );
    expect(token).toBeTruthy();
  });

  test("Should be valid token", () => {
    const token = JWT.createToken(
      { name: "vinay", email: "vinaymavi@gmail.com" },
      "secret",
      "3m"
    );
    const decodedToken = JWT.verify(token, "secret");
    expect(token).toBeTruthy();
  });

  test("Should not valid token", () => {
    const token = JWT.createToken(
      { name: "vinay", email: "vinaymavi@gmail.com" },
      "secret",
      "3m"
    );
    try {
      const decodedToken = JWT.verify(token, "false-secret");
      expect(decodedToken).toBeFalsy();
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
