import Joi, { ObjectSchema } from "@hapi/joi";

const reqGetUserSchema: ObjectSchema = Joi.object({});
const reqAddUserSchema: ObjectSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(50),
  lastName: Joi.string().alphanum().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(16).required(),
});

const reqUpdateUserSchema: ObjectSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(50),
  lastName: Joi.string().alphanum().min(3).max(50),
  email: Joi.string().email(),
  mobile: Joi.string().min(6).max(15),
});

const regLoginSchema: ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(16).required(),
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
  role: Joi.string().valid("reader", "writer", "maintainer", "owner"),
});

const reqForgotPassword: ObjectSchema = Joi.object({
  email: Joi.string().email().required(),
});

const reqResetPassword: ObjectSchema = Joi.object({
  password: Joi.string().min(6).max(16).required(),
});
export {
  reqAddUserSchema,
  regLoginSchema,
  reqChangePasswordSchema,
  reqUpdateUserSchema,
  reqCreateEntitySchema,
  reqAssignRules,
  reqGetUserSchema,
  reqForgotPassword,
  reqResetPassword,
};
