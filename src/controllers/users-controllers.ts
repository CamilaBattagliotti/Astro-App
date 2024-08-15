import { Response, Request } from "express";
import UserService from "../services/users-service";
class UserControllers {
  constructor() {}
  static getAll(req: Request, res: Response) {
    const db = UserService.getAll();
    res.status(200).json(db);
  }
  static getById(req: Request, res: Response) {
    const user = UserService.getById(req.params.id);
    res.status(200).json({ message: user });
  }

  static getByEmail(req: Request, res: Response) {
    const { email } = req.body;
    const user = UserService.getByEmail(email);
    res.status(200).json({ data: user });
  }
}

export default UserControllers;
