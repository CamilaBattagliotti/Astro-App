import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth-service";

class AuthController {
  static register(req: Request, res: Response, next: NextFunction) {
    try {
      const token = AuthService.register(req.body);
      res.status(201).json({ message: "Usuario registrado", token: token });
    } catch (error) {
      next(error);
    }
  }
  static logIn(req: Request, res: Response) {
    const token = AuthService.logIn(req.body);
    res.status(200).json({ message: "Bienvenido", token: token });
  }
}

export default AuthController;
