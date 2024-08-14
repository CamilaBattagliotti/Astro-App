import AuthModel from "../models/auth-models";
import { NextFunction, Request, Response } from "express";

// Funcion que accede al modelo para ckeckear si algun objeto en la db contiene el token recibido (en la db de authentication)
export function checkToken(req: Request, res: Response, next: NextFunction) {
  const token = req.query.token;
  if (!token) return res.status(400).json({ message: "El token es requerido" });

  const { auth } = AuthModel.getData();

  const authUser = auth.find((user) => user.token == token);
  if (!authUser) return res.status(401).json({ message: "Token invalido" });
  next();
}
