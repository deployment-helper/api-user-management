import Joi, { ObjectSchema } from "@hapi/joi";
import { DefaultRoles, LoginProvider } from "../constants";

const reqGetUserSchema: ObjectSchema = Joi.object({});

const reqUpdateUserSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  mobile: Joi.string().min(6).max(15),
});

const regLoginSchema: ObjectSchema = Joi.object({
  code: Joi.string().required(),
  providerName: Joi.string().valid(...Object.values(LoginProvider)),
});

const reqChangePasswordSchema: ObjectSchema = Joi.object({
  oldPassword: Joi.string().min(6).max(16).required(),
  newPassword: Joi.string().min(6).max(16).required(),
});

const reqCreateEntitySchema: ObjectSchema = Joi.object({
  entityId: Joi.string().min(6).required(),
  extraPermission: Joi.array().items(Joi.string),
});

const reqAssignRules: ObjectSchema = Joi.object({
  role: Joi.string().valid(...Object.values(DefaultRoles)),
});

const reqForgotPassword: ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
});

const reqResetPassword: ObjectSchema = Joi.object({
  password: Joi.string().min(6).max(16).required(),
});
export {
  regLoginSchema,
  reqChangePasswordSchema,
  reqUpdateUserSchema,
  reqCreateEntitySchema,
  reqAssignRules,
  reqGetUserSchema,
  reqForgotPassword,
  reqResetPassword,
};
