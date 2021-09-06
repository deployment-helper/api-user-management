export enum Database {
  NAME = "user",
}

export enum BCRYPT {
  SALT_ROUNDS = 10,
}

export enum User {
  DEFAULT_PERMISSION = "app.enity.create",
  ENTITY_READ_PERMISSION_TEMPLATE = "`entity.${obj.entityId}.read`",
  ENTITY_WRITE_PERMISSION_TEMPLATE = "`entity.${obj.entityId}.write`",
  ENTITY_DELETE_PERMISSION_TEMPLATE = "`entity.${obj.entityId}.delete`",
  ENTITY_MANAGE_USER_PERMISSION_TEMPLATE = "`entity.${obj.entityId}.manageuser`",
}

export enum DefaultRoles {
  READER = "reader",
  WRITER = "writer",
  MAINTAINER = "maintainer",
  OWNER = "owner",
}
export const ErrorMessages = {
  "401": {
    userDoesNotExist: "User does not exist",
  },
  "400": {
    badRequest: "Invalid request pyalod",
  },
};
