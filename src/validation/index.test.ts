import { regLoginSchema, reqAddUserSchema } from "./index";
describe("Validation Tests", () => {
  test("regLoginSchema should loaded", () => {
    expect(regLoginSchema).toBeTruthy();
  });
  test("reqAddUserSchema should loaded", () => {
    expect(reqAddUserSchema).toBeTruthy();
  });
});
