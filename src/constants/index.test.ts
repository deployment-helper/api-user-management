import { Database, BCRYPT, User, DefaultRoles, ErrorMessages } from "./index";
describe("Constants Tests", () => {
  test("Database should loaded", () => {
    expect(Database).toBeTruthy();
  });
  test("COLLECTION_NAME should defined", () => {
    expect(Database.NAME).toBeTruthy();
  });
  it("BCRYPT should loaded", () => {
    expect(BCRYPT).toBeTruthy();
  });
  it("BCRYPT should SALT_ROUNDS", () => {
    expect(BCRYPT.SALT_ROUNDS).toBe(10);
  });
  it("User should loaded", () => {
    expect(User).toBeTruthy();
  });
  it("User should have permissions", () => {
    expect(User.DEFAULT_PERMISSION).toBe("app.enity.create");
    expect(User.ENTITY_READ_PERMISSION_TEMPLATE).toBe(
      "`entity.${obj.entityId}.read`"
    );
    expect(User.ENTITY_WRITE_PERMISSION_TEMPLATE).toBe(
      "`entity.${obj.entityId}.write`"
    );
    expect(User.ENTITY_DELETE_PERMISSION_TEMPLATE).toBe(
      "`entity.${obj.entityId}.delete`"
    );
    expect(User.ENTITY_MANAGE_USER_PERMISSION_TEMPLATE).toBe(
      "`entity.${obj.entityId}.manageuser`"
    );
  });
  it("DefaultRoles should loaded", () => {
    expect(DefaultRoles).toBeTruthy();
  });
  it("DefaultRoles should have rules", () => {
    expect(DefaultRoles.READER).toBe("reader");
    expect(DefaultRoles.WRITER).toBe("writer");
    expect(DefaultRoles.MAINTAINER).toBe("maintainer");
    expect(DefaultRoles.OWNER).toBe("owner");
  });
  it("ErrorMessages should loaded", () => {
    expect(ErrorMessages).toBeTruthy();
  });
});
