import { healthRouter } from "./index";
describe("Helath Tests", () => {
  test("Module should loaded", () => {
    expect(healthRouter).toBeTruthy();
  });
});
