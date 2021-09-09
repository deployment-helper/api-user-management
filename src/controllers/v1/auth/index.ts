import { Request, Response, NextFunction } from "express";

import { BaseController } from "../../base.controller";
import { regLoginSchema } from "../../../validation";
import { ILoginReq } from "../../../models/model.interfaces";
import UserModel from "../../../models/user.model";
import { ErrorUnAuthorizedAccess } from "../../../errors";
import { JWT } from "../../../jwt";
import { Config } from "../../../config";
import { UserHelper } from "../../../helpers";

export class AuthController extends BaseController {
  constructor() {
    super();
  }
  async login(req: Request, resp: Response, next: NextFunction) {
    const body: ILoginReq = req.body;
    this.validateReqSchema(regLoginSchema, body);
    try {
      const fedratedUser: any = await UserHelper.getUser(
        body.code,
        body.providerName
      );
      /**
       * TODO: should use user helper for login validation.
       */
      UserModel.findOne({ email: fedratedUser.email })
        .exec()
        .then((user) => {
          if (user !== null) {
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
            next(new ErrorUnAuthorizedAccess("User does not exist."));
          }
        })
        .catch((err: Error) => {
          next(err);
        });
    } catch (err) {
      next(err);
    }
  }
}
