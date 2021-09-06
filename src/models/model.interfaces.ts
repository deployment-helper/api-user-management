import { Document } from "mongoose";
import { Request } from "express";
interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  mobile?: string;
  permissions: Array<string>;
  jwtObject: any;
}

interface ILoginReq {
  email: string;
  password: string;
}

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
interface IUpdateUser {
  email?: string;
  firstName?: string;
  lastName?: string;
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
