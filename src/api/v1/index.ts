import { Router } from "express";
import { userRouter } from "./user";
import { authRouter } from "./auth";
import { healthRouter } from "./health";
const router = Router();
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/health", healthRouter);

export { router as v1Router };
