import { User } from "../constants";
import { Eval } from "../util/eval";

export class EntityHelper {
  private entityId: string;
  private permissions: Array<string>;
  constructor(entityId: string) {
    this.entityId = entityId;
    this.permissions = new Array<string>();
  }
  createReaderPermissions(): Array<string> {
    this.permissions.push(
      Eval.templateToString(
        { entityId: this.entityId },
        User.ENTITY_READ_PERMISSION_TEMPLATE
      )
    );
    return this.permissions;
  }
  createWritePermissions(): Array<string> {
    this.createReaderPermissions();
    this.permissions.push(
      Eval.templateToString(
        { entityId: this.entityId },
        User.ENTITY_WRITE_PERMISSION_TEMPLATE
      )
    );
    return this.permissions;
  }

  createMaintainerPermissions(): Array<string> {
    this.createWritePermissions();
    this.permissions.push(
      Eval.templateToString(
        { entityId: this.entityId },
        User.ENTITY_DELETE_PERMISSION_TEMPLATE
      )
    );
    return this.permissions;
  }
  createOwnerPermissions(): Array<string> {
    this.createMaintainerPermissions();
    this.permissions.push(
      Eval.templateToString(
        { entityId: this.entityId },
        User.ENTITY_MANAGE_USER_PERMISSION_TEMPLATE
      )
    );
    return this.permissions;
  }
}
