import { AuthController } from "./index";

describe("Auth Controller", () => {
  let ctrl: AuthController;
  beforeAll(() => {
    ctrl = new AuthController();
  });
  it("Module should loaded", () => {
    expect(AuthController).toBeTruthy();
  });
});
