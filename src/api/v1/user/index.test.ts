import { userRouter } from "./index";
describe("User", () => {
  it("Module should loaded", () => {
    expect(userRouter).toBeTruthy();
  });
});
