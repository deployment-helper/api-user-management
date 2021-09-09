import { regLoginSchema } from "./index";
describe("Validation Tests", () => {
  test("regLoginSchema should loaded", () => {
    expect(regLoginSchema).toBeTruthy();
  });
});
