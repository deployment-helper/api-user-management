import express from "express";
import jwt from "express-jwt";
import mongoose from "mongoose";
import cors, { CorsOptions } from "cors";
import { apiRouter } from "./src/api";
import { customErrorHandler } from "./src/middleware";
import { Config } from "./src/config";
import logger from "./src/logger";
/**
 * Mongodb connection
 */
mongoose.connect(Config.DB_CONNECTION_STRING, { useNewUrlParser: true });

const corsOptions: CorsOptions = {
  origin: function (requestOrigin: string | undefined, callback: Function) {
    logger.info(`requestOrigin = ${requestOrigin}`);
    if (
      !requestOrigin ||
      (requestOrigin && Config.CORS_WHITE_LIST.indexOf(requestOrigin) !== -1)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(
  jwt({ secret: Config.JWT_SECRET }).unless({
    path: [
      { url: "/api/v1/user", methods: ["POST"], method: "POST" },
      "/api/v1/auth/login",
      "/api/v1/auth/forgot-password",
      "/api/v1/health",
    ],
  })
);
const port = process.env.PORT || 3000;
app.use("/api", apiRouter);
app.get("/", (req: any, res: any) => {
  res.send("Application Under Development");
});
app.use(customErrorHandler);
app.listen(port, () => console.log(`App listening on port ${port}!`));
