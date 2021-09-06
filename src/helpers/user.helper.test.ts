import mockingoose from "mockingoose";

import User from "../models/user.model";
import { UserHelper } from "./user.helper";
import { IUser } from "../models/model.interfaces";

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
  it("Should not login", () => {
    return UserHelper.login("vinaymavi@gmail.com", "password1")
      .then((user: IUser | null) => {
        expect(user).toBeFalsy();
      })
      .catch((err) => {
        expect(err).toBeFalsy();
      });
  });
  it("Should login", () => {
    return UserHelper.login("vinaymavi@gmail.com", "password")
      .then((user: IUser | null) => {
        expect(user).toBeTruthy();
        if (user !== null) {
          expect(user.permissions).toEqual(
            expect.arrayContaining(["app.user.admin"])
          );
        } else {
          throw new Error("User is `null`");
        }
      })
      .catch((err) => {
        expect(err).toBeFalsy();
      });
  });
});
