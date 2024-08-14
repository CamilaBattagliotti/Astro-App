import { Response, Request } from "express";
import UserModel from "../models/users-models";
import { usersValidator } from "../schemas/users";
import { v4 as uuidv4 } from "uuid"; // Lo renombro como "uuidv4" para que se entienda que es al usarlo y v4(version 4)

class UserControllers {
  constructor() {}
  static getAll(req: Request, res: Response) {
    const db = UserModel.getData();
    res.status(200).json(db.users);
  }
  static getById(req: Request, res: Response) {
    const db = UserModel.getData();
    const user = db.users.find((user) => req.params.id == user.id);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.status(200).json({ message: user });
  }
  static create(req: Request, res: Response) {
    const db = UserModel.getData();
    const result = usersValidator(req.body);
    if (!result.success) return false; // devuelve false si no pasa la validacion y asi puedo validar en auth-controllers donde voy a usar la funcion create

    const user: any = result.data;
    user.id = uuidv4(); // user["id"] para evitar el tipado.
    db.users.push(user);
    UserModel.writeData(db);
    return user.id;
  }

  static updateById(id: string) {}
  static deleteById(id: string) {}
  static getByEmail(req: Request, res: Response) {
    const db = UserModel.getData();
    const user = db.users.find((user) => req.body.email == user.email);
    return user;
  }
}

export default UserControllers;
