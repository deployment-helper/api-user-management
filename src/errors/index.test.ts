import { ErrorBadReq, ErrorUnAuthorizedAccess } from "./index";
describe("Error Tests", () => {
  test("ErrorBadReq should loaded", () => {
    expect(ErrorBadReq).toBeTruthy();
  });
  test("ErrorBadReq should be initailized", () => {
    const error = new ErrorBadReq("Invalid reqeust");
    expect(error).toBeTruthy();
  });
  it("ErrorUnAuthorizedAccess should loaded", () => {
    expect(ErrorUnAuthorizedAccess).toBeTruthy();
  });
  it("ErrorUnAuthorizedAccess should initialize", () => {
    const error = new ErrorUnAuthorizedAccess("UnAuthorized");
    expect(error).toBeTruthy();
  });
});
