import {
  Eval,
  createPermissionsBYRole,
  createNewPermissions,
  removePermissions,
} from "./index";
describe("Util Tests", () => {
  it("Module should loaded", () => {
    expect(Eval).toBeTruthy();
  });
  it("Should not create permissions by Role", () => {
    try {
      const permissions = createPermissionsBYRole("xyz", "prj_123");
      const readerPermission = "entity.prj_123.read";
      expect(1).toBe(0);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it("Should create permissions by Role", () => {
    const permissions = createPermissionsBYRole("reader", "prj_123");
    const readerPermission = "entity.prj_123.read";
    expect(permissions).toEqual(expect.arrayContaining([readerPermission]));
  });

  it("Should remove permissions", () => {
    const totalPermissions: Set<string> = new Set<string>();
    totalPermissions.add("reader");
    totalPermissions.add("writer");
    totalPermissions.add("maintainer");
    totalPermissions.add("owner");
    const permissionsToRemove: Array<string> = new Array<string>();
    permissionsToRemove.push("writer");
    const permissions = removePermissions(
      totalPermissions,
      permissionsToRemove
    );
    const permissionsArr = Array.from(permissions);
    expect(permissionsArr).toEqual(
      expect.arrayContaining(["reader", "maintainer", "owner"])
    );
  });

  it("Should not create new entity permissions", () => {
    const oldPermissions: Set<string> = new Set<string>();
    oldPermissions.add("permission_1");
    oldPermissions.add("permission_2");
    try {
      const permissions = createNewPermissions(
        oldPermissions,
        "xyz",
        "prj_123"
      );
      const permissionsArr = Array.from(permissions);
      expect(1).toBe(0);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
  it("Should create new entity permissions", () => {
    const oldPermissions: Set<string> = new Set<string>();
    oldPermissions.add("permission_1");
    oldPermissions.add("permission_2");
    const permissions = createNewPermissions(
      oldPermissions,
      "writer",
      "prj_123"
    );
    const permissionsArr = Array.from(permissions);
    expect(permissionsArr).toEqual(
      expect.arrayContaining([
        "permission_1",
        "permission_2",
        "entity.prj_123.read",
        "entity.prj_123.write",
      ])
    );
  });
});
