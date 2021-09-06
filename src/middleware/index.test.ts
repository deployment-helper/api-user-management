import { customErrorHandler } from "./index";
describe("Middleware Tests", () => {
  it("Module should loaded", () => {
    expect(customErrorHandler).toBeTruthy();
  });
});
