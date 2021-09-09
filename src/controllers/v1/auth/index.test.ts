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
});
