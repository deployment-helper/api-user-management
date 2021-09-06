import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "../../../controllers/v1/user";
const router: Router = Router();
const user = new UserController();
router.get("/", user.getuser.bind(user));
router.post("/", user.addUser.bind(user));
router.put("/:email/change-password", user.changePassword.bind(user));
router.put("/:email/update", user.updateUserDetails.bind(user));
router.post("/:email/entity", user.createEntity.bind(user));
router.put("/:email/entity/:entityId/roles", user.assignRoles.bind(user));
router.delete("/:email/entity/:entityId/roles", user.removeRoles.bind(user));

export { router as userRouter };
