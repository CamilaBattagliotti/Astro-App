import { Request, Response, Router } from "express";
import AuthController from "../controllers/auth-controllers";

const authRouter = Router();

authRouter.post("/register", (req: Request, res: Response) => {
  AuthController.register(req, res);
});

authRouter.post("/login", (req: Request, res: Response) => {
  AuthController.logIn(req, res);
});

export default authRouter;
