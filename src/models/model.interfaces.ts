import { Document } from "mongoose";
import { Request } from "express";

import { LoginProvider } from "../constants";

interface IUser extends Document {
  email: string;
  name: string;
  avatarUrl: string;
  mobile?: string;
  permissions: Array<string>;
  jwtObject: any;
}

interface ILoginReq {
  code: string;
  providerName: LoginProvider;
}

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
interface IUpdateUser {
  email?: string;
  name?: string;
  mobile?: string;
}
interface JwtRequest extends Request {
  user?: any;
}

interface ICreateEntity {
  entityId: string;
  extraPermission?: Array<string>;
}

interface IAssignRoles {
  role: string;
}

interface IForgotPassword {
  email: string;
}
interface IResetPassword {
  password: string;
}

export {
  IUser,
  ILoginReq,
  JwtRequest,
  IChangePassword,
  IUpdateUser,
  ICreateEntity,
  IAssignRoles,
  IForgotPassword,
  IResetPassword,
};
