import mockingoose from "mockingoose";
import httpMock from "node-mocks-http";
import { UserModel } from "../../../models/";
import { AuthController } from "./index";
const _doc = {
  _id: "507f191e810c19729de860ea",
  name: "name",
  email: "name@email.com",
  password: "$2b$10$WYM5ghm/iZO0c5PQJDDQVO2XsUPCU91CzHHAdDFPSngCf1MdJvhAe",
  permissions: ["app.user.admin"],
};

describe("Auth Controller", () => {
  let ctrl: AuthController;
  beforeAll(() => {
    ctrl = new AuthController();
  });
  it("Module should loaded", () => {
    expect(AuthController).toBeTruthy();
  });
  it("Should not create forgot password token", async () => {
    mockingoose(UserModel).reset();
    const req = httpMock.createRequest({
      body: { email: "email@email.com" },
    });
    const resp = httpMock.createResponse();
    const next = jest.fn();
    await ctrl.forgotPassword(req, resp, next);
    expect(next).toHaveBeenCalled();
  });

  it("Should create forgot password token", async () => {
    // mock findOne function
    mockingoose(UserModel).toReturn(_doc, "findOne");
    const req = httpMock.createRequest({
      body: {
        email: "email@email.com",
      },
    });
    const resp = httpMock.createResponse();
    const next = jest.fn();
    await ctrl.forgotPassword(req, resp, next);
    expect(next.mock.calls.length).toBe(0);
    expect(resp._getStatusCode()).toBe(200);
  });

  it("Should not reset password", async () => {
    // mock findOne function
    mockingoose(UserModel).reset();
    const req = httpMock.createRequest({
      body: { password: "newPassword" },
    });
    const resp = httpMock.createResponse();
    const next = jest.fn();
    await ctrl.resetPassword(req, resp, next);
    expect(next).toHaveBeenCalled();
  });

  it("Should reset password", async () => {
    // mock findOne function
    mockingoose(UserModel).toReturn(_doc, "findOne");
    mockingoose(UserModel).toReturn(_doc, "save");
    const req = httpMock.createRequest({
      body: { password: "newPassword" },
      user: {
        email: "email@email",
      },
    });
    const resp = httpMock.createResponse();
    const next = jest.fn();
    await ctrl.resetPassword(req, resp, next);
    expect(next.mock.calls.length).toBe(0);
    expect(resp._getStatusCode()).toBe(200);
  });
});
