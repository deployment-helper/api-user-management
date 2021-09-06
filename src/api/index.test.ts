import { apiRouter } from "./index";
describe("API", () => {
  it("Module should loaded", () => {
    expect(apiRouter).toBeTruthy();
  });
});
