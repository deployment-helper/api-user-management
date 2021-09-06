import { Router } from "express";
import { AuthController } from "../../../controllers/v1/auth";
const authCtrl = new AuthController();
const router = Router();

router.post("/login", authCtrl.login.bind(authCtrl));
router.post("/forgot-password", authCtrl.forgotPassword.bind(authCtrl));
router.post("/reset-password", authCtrl.resetPassword.bind(authCtrl));

export { router as authRouter };
