import { BaseController } from "./base.controller";
import Joi, { ObjectSchema } from "@hapi/joi";
import httpMock from "node-mocks-http";
describe("Base Controller", () => {
  const controller = new BaseController();
  const joiSchema: ObjectSchema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(50),
    lastName: Joi.string().alphanum().min(3).max(50),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
  });
  it("Module should loaded", () => {
    expect(BaseController).toBeTruthy();
  });
  it("Should be invalid schema", () => {
    try {
      controller.validateReqSchema(joiSchema, {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
  it("Should be valid schema", () => {
    try {
      // Should return undefined when schema is valid
      const rValue = controller.validateReqSchema(joiSchema, {
        firstName: "Vinay",
        lastName: "Mavi",
        email: "email@email.com",
        password: "password",
      });
      expect(rValue).toBeFalsy();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
  it("Should have permission", () => {
    const permission = ["per1", "per2"];
    expect(controller.hasPermission(permission, "per1")).toBeTruthy();
  });
  it("Should not have permission", () => {
    const permission = ["per1", "per2"];
    expect(controller.hasPermission(permission, "per11")).toBeFalsy();
  });
  it("Should get", () => {
    const req = httpMock.createRequest({});
    const resp = httpMock.createResponse({});
    controller.get(req, resp, () => {});
    expect(resp._getStatusCode()).toBe(200);
    expect(resp._getData()).toBe("Implementation pending");
  });
  it("Should post", () => {
    const req = httpMock.createRequest({});
    const resp = httpMock.createResponse({});
    controller.post(req, resp, () => {});
    expect(resp._getStatusCode()).toBe(200);
    expect(resp._getData()).toBe("Implementation pending");
  });
  it("Should put", () => {
    const req = httpMock.createRequest({});
    const resp = httpMock.createResponse({});
    controller.put(req, resp, () => {});
    expect(resp._getStatusCode()).toBe(200);
    expect(resp._getData()).toBe("Implementation pending");
  });
  it("Should delete", () => {
    const req = httpMock.createRequest({});
    const resp = httpMock.createResponse({});
    controller.delete(req, resp, () => {});
    expect(resp._getStatusCode()).toBe(200);
    expect(resp._getData()).toBe("Implementation pending");
  });
});
