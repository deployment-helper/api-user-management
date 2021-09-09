import { Eval } from "./eval";
import { DefaultRoles } from "../constants";
import { ErrorBadReq } from "../errors";
import { EntityHelper } from "../helpers/entity.helper";

function createPermissionsBYRole(
  role: string,
  entityId: string
): Array<string> {
  const entityHelper = new EntityHelper(entityId);
  switch (role) {
    case DefaultRoles.READER:
      return entityHelper.createReaderPermissions();
    case DefaultRoles.WRITER:
      return entityHelper.createWritePermissions();
    case DefaultRoles.MAINTAINER:
      return entityHelper.createMaintainerPermissions();
    case DefaultRoles.OWNER:
      return entityHelper.createOwnerPermissions();
    default:
      throw new ErrorBadReq("Role does not exist");
  }
}

function removePermissions(
  permissions: Set<string>,
  permissionsToRemove: Array<string>
): Set<string> {
  permissionsToRemove.forEach((permission) => {
    permissions.delete(permission);
  });
  return permissions;
}
// TODO: update function name.
function createNewPermissions(
  permissions: Set<string>,
  role: string,
  entityId: string
): Array<string> {
  // Remove previously assign permission.
  permissions = removePermissions(
    permissions,
    createPermissionsBYRole(DefaultRoles.OWNER, entityId)
  );
  //create new permissions
  const newPermissions = createPermissionsBYRole(role, entityId);
  newPermissions.forEach((permission) => {
    permissions.add(permission);
  });
  return Array.from(permissions);
}

function parseQueryString(queryString: string) {
  const parsedObject: any = {};
  queryString.split("&").forEach((item) => {
    const itemArr = item.split("=");
    parsedObject[itemArr[0]] = itemArr[1];
  });
  return parsedObject;
}

export {
  createNewPermissions,
  createPermissionsBYRole,
  Eval,
  removePermissions,
  parseQueryString,
};
