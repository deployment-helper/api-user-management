import { Github } from "./github.helper";

jest.mock("https");

describe("Github Helper", () => {
  it("getAccessToken", async () => {
    const respJson = await Github.getAccessToken("tempCode1");
    expect(respJson).toEqual({
      access_token: "gho_ZukD25NOL6J30GEYXT",
      scope: "user%3Aemail",
      token_type: "bearer",
    });
  });
});
