import { Eval } from "./eval";
describe("Eval Tests", () => {
  it("Module should loaded", () => {
    expect(Eval).toBeTruthy();
  });
  test("Template should parse", () => {
    const parsedStr = Eval.templateToString(
      { entityId: "prj_123" },
      "`start.${obj.entityId}.end`"
    );
    expect(parsedStr).toBe("start.prj_123.end");
  });
});
