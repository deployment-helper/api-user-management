import { LoginProvider } from "../constants";
import {
  ILoginReq,
  IChangePassword,
  IUpdateUser,
  ICreateEntity,
  IAssignRoles,
} from "./model.interfaces";

describe("Interfaces Test", () => {
  it("IUser Should loaded", () => {
    const loginReq: ILoginReq = {
      code: "fjdslfjdklfjdkl",
      providerName: LoginProvider.GITHUB,
    };
    expect(loginReq).toBeTruthy();
  });
  it("IChangePassword Should loaded", () => {
    const req: IChangePassword = {
      newPassword: "password",
      oldPassword: "password",
    };
    expect(req).toBeTruthy();
  });
  it("IUpdateUser Should loaded", () => {
    const req: IUpdateUser = {
      email: "email@email.com",
    };
    expect(req).toBeTruthy();
  });

  it("ICreateEntity Should loaded", () => {
    const req: ICreateEntity = {
      entityId: "email@email.com",
      extraPermission: new Array<string>(),
    };
    expect(req).toBeTruthy();
  });

  it("IAssignRoles Should loaded", () => {
    const req: IAssignRoles = {
      role: "reader",
    };
    expect(req).toBeTruthy();
  });
});
