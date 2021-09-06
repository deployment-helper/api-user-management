import bcrypt from "bcrypt";
import { IUser } from "../models/model.interfaces";
import UserModel from "../models/user.model";
export class UserHelper {
  public static login(email: string, password: string): Promise<IUser | null> {
    return new Promise((resolve: Function, reject: Function) => {
      UserModel.findOne({ email })
        .exec()
        .then((user: IUser | null) => {
          if (user !== null) {
            const isValid = bcrypt.compareSync(password, user.password);
            if (isValid) {
              return user;
            } else {
              return null;
            }
          } else {
            return null;
          }
        })
        .then((user: IUser | null | undefined) => {
          if (user === null || user === undefined) {
            reject(null);
          } else {
            resolve(user);
          }
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  }
}
