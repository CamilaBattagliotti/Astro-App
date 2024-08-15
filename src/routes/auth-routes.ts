import { NextFunction, Request, Response, Router } from "express";
import AuthController from "../controllers/auth-controllers";

const authRouter = Router();

authRouter.post(
  "/register",
  (req: Request, res: Response, next: NextFunction) => {
    AuthController.register(req, res, next);
  }
);

authRouter.post("/login", (req: Request, res: Response) => {
  AuthController.logIn(req, res);
});

export default authRouter;
