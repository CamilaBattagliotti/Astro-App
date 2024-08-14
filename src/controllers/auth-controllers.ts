import { Request, Response } from "express";
import UserControllers from "./users-controllers";
import AuthModel from "../models/auth-models";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "../utils/hash";

class AuthController {
  static register(req: Request, res: Response) {
    const { password } = req.body;
    const user = UserControllers.getByEmail(req, res);
    if (user) return res.status(400).json({ message: "El email ya existe" });

    // Creo un nuevo objeto en la db de users
    const userId = UserControllers.create(req, res);
    // SI no paso la validacion en create me devuelve false y entra en este if:
    if (!userId) return res.status(400).json({ message: "Datos invalidos" });

    const db = AuthModel.getData();
    const token = uuidv4();

    db.auth.push({
      id: uuidv4(),
      userId: userId,
      password: createHash(password),
      token: token,
    });

    AuthModel.writeData(db);
    res.status(201).json({ message: "Usuario registrado", token: token });
  }

  static logIn(req: Request, res: Response) {
    const { password } = req.body;
    const user = UserControllers.getByEmail(req, res);

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const authDb = AuthModel.getData();
    const authUser = authDb.auth.find((u) => u.userId == user.id);

    const hashedPassword = createHash(password);
    if (authUser.password != hashedPassword)
      return res.status(401).json({ message: "Contrasena incorrecta" });

    res.status(200).json({ message: "Bienvenido", token: authUser.token });
  }
}

// No necesito instanciar porque tengo metodos de clase y no de instancia.
export default AuthController;
