import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, resp: Response, next: NextFunction) => {
  resp.status(200).send("Ok");
});

export { router as healthRouter };
