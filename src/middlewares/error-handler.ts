import { NextFunction, Request, Response } from "express";

export function errorHandler(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404).json({ message: error.message });
}
