import { Eval } from "./eval";
import { DefaultRoles } from "../constants";
import { ErrorBadReq } from "../errors";
import { EntityHelper } from "../helpers/entity.helper";
import { Email } from "./email";

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

export {
  Eval,
  createPermissionsBYRole,
  createNewPermissions,
  removePermissions,
  Email,
};
