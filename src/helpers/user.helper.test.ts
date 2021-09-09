import mockingoose from "mockingoose";

import User from "../models/user.model";
import { UserHelper } from "./user.helper";

const _doc = {
  _id: "507f191e810c19729de860ea",
  name: "name",
  email: "name@email.com",
  password: "$2b$10$WYM5ghm/iZO0c5PQJDDQVO2XsUPCU91CzHHAdDFPSngCf1MdJvhAe",
  permissions: ["app.user.admin"],
};

mockingoose(User).toReturn(_doc, "findOne");

describe("User Helper Tests", () => {
  it("Module should loaded", () => {
    expect(UserHelper).toBeTruthy();
  });
});
