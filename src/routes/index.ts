import { Router } from "express";
import authRouter from "./auth-routes";
import usersRouter from "./users-routes";
import chartsRouter from "./charts-routes";
import { checkToken } from "../middlewares/check-token";

const indexRouter = Router();

indexRouter.use("/users", checkToken, usersRouter);

indexRouter.use("/charts", checkToken, chartsRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
