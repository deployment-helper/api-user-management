import { EntityHelper } from "./entity.helper";
describe("Entity Helper Tests", () => {
  it("Module should loaded", () => {
    expect(EntityHelper).toBeTruthy();
  });
  it("Module should initialize", () => {
    let helper = new EntityHelper("prj_123");
    expect(helper).toBeTruthy();
  });
  it("Should create read permissions", () => {
    let helper = new EntityHelper("prj_123");
    const expectedPermissions: Array<string> = ["entity.prj_123.read"];
    const permissions = helper.createReaderPermissions();
    expect(permissions).toEqual(expect.arrayContaining(expectedPermissions));
  });
  it("Should create write permissions", () => {
    let helper = new EntityHelper("prj_123");
    const expectedPermissions: Array<string> = [
      "entity.prj_123.read",
      "entity.prj_123.write",
    ];
    const permissions = helper.createWritePermissions();
    expect(permissions).toEqual(expect.arrayContaining(expectedPermissions));
  });
  it("Should create maintainer permissions", () => {
    let helper = new EntityHelper("prj_123");
    const expectedPermissions: Array<string> = [
      "entity.prj_123.read",
      "entity.prj_123.write",
      "entity.prj_123.delete",
    ];
    const permissions = helper.createMaintainerPermissions();
    expect(permissions).toEqual(expect.arrayContaining(expectedPermissions));
  });
  it("Should create owner permissions", () => {
    let helper = new EntityHelper("prj_123");
    const expectedPermissions: Array<string> = [
      "entity.prj_123.read",
      "entity.prj_123.write",
      "entity.prj_123.delete",
      "entity.prj_123.manageuser",
    ];
    const permissions = helper.createOwnerPermissions();
    expect(permissions).toEqual(expect.arrayContaining(expectedPermissions));
  });
});
