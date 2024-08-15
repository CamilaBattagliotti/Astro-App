import AuthModel from "../models/auth-models";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "../utils/hash";
import UserService from "./users-service";

class AuthService {
  static register(data: any) {
    const { password } = data;
    const user = UserService.getByEmail(data.email);
    if (user) return "El email ya existe";

    const userId = UserService.create(data);
    if (!userId) return "Datos invalidos";

    const db = AuthModel.getData();
    const token = uuidv4();

    db.auth.push({
      id: uuidv4(),
      userId: userId,
      password: createHash(password),
      token: token,
    });

    AuthModel.writeData(db);
    return token;
  }

  static logIn(data: any) {
    const { password } = data;
    const user = UserService.getByEmail(data.email);

    if (!user) return "Usuario no encontrado";

    const authDb = AuthModel.getData();
    const authUser = authDb.auth.find((u) => u.userId == user.id);

    const hashedPassword = createHash(password);
    if (authUser.password != hashedPassword) return "Contrasena incorrecta";
    return authUser.token;
  }
}

export default AuthService;
