import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { BaseController } from "../../base.controller";
import {
  regLoginSchema,
  reqForgotPassword,
  reqResetPassword,
} from "../../../validation";
import {
  ILoginReq,
  IForgotPassword,
  IResetPassword,
  JwtRequest,
} from "../../../models/model.interfaces";
import UserModel from "../../../models/user.model";
import { ErrorUnAuthorizedAccess } from "../../../errors";
import { JWT } from "../../../jwt";
import { Config } from "../../../config";
import { BCRYPT } from "../../../constants";
import { Email } from "../../../util";
export class AuthController extends BaseController {
  constructor() {
    super();
  }
  login(req: Request, resp: Response, next: NextFunction) {
    const body: ILoginReq = req.body;
    this.validateReqSchema(regLoginSchema, body);
    /**
     * TODO: should use user helper for login validation.
     */
    UserModel.findOne({ email: body.email })
      .exec()
      .then((user) => {
        if (user !== null) {
          bcrypt
            .compare(body.password, user.password)
            .then((isValid: boolean) => {
              if (isValid) {
                try {
                  const jwt_token = JWT.createToken(
                    user.jwtObject(),
                    Config.JWT_SECRET,
                    Config.JWT_EXPIRE_TIME
                  );
                  resp.status(200).send({ jwt_token });
                } catch (error) {
                  next(error);
                }
              } else {
                next(new ErrorUnAuthorizedAccess("In-Valid Email or Password"));
              }
            });
        } else {
          next(new ErrorUnAuthorizedAccess("User does not exist."));
        }
      })
      .catch((err: Error) => {
        next(err);
      });
  }
  async forgotPassword(req: Request, resp: Response, next: NextFunction) {
    try {
      const body: IForgotPassword = req.body;
      this.validateReqSchema(reqForgotPassword, body);
      const user = await UserModel.findOne({ email: body.email });
      if (user === null) {
        next(new ErrorUnAuthorizedAccess("User does not exist."));
      } else {
        try {
          const jwt_token = JWT.createToken(
            user.jwtObject(),
            Config.JWT_SECRET,
            Config.FORGOT_PASSWORD_JWT_EXPIRE_TIME
          );
          // TODO: email need to send.
          const resetPasswordLink = `${Config.RESET_PASSWORD_ENDPOINT}?token=${jwt_token}`;
          Email.sendForgotPasswordEmail(user.email, resetPasswordLink);
          resp
            .status(200)
            .send({ message: "An Email sent to the registerd email address." });
        } catch (error) {
          next(error);
        }
      }
    } catch (err) {
      next(err);
    }
  }
  async resetPassword(req: JwtRequest, resp: Response, next: NextFunction) {
    try {
      const body: IResetPassword = req.body;
      this.validateReqSchema(reqResetPassword, body);
      const user = await UserModel.findOne({
        email: req.user ? req.user.email : "",
      });
      if (user === null) {
        next(new ErrorUnAuthorizedAccess("User does not exist."));
      } else {
        try {
          user.password = bcrypt.hashSync(body.password, BCRYPT.SALT_ROUNDS);
          await user.save();
          resp.status(200).send({ message: "Password reset successfully." });
        } catch (error) {
          next(error);
        }
      }
    } catch (err) {
      next(err);
    }
  }
}
