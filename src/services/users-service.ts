import UserModel from "../models/users-models";
import { usersValidator } from "../schemas/users";
import { v4 as uuidv4 } from "uuid";

class UserService {
  static getByEmail(email: string) {
    const db = UserModel.getData();
    const user = db.users.find((user) => email == user.email);
    return user;
  }
  static create(data: object) {
    const db = UserModel.getData();
    const result = usersValidator(data);
    if (!result.success) return false; // devuelve false si no pasa la validacion y asi puedo validar en auth-controllers donde voy a usar la funcion create

    const user: any = result.data;
    user.id = uuidv4();
    db.users.push(user);
    UserModel.writeData(db);
    return user.id;
  }
  static getAll() {
    const db = UserModel.getData();
    return db.users;
  }
  static getById(id: string) {
    const db = UserModel.getData();
    const user = db.users.find((user) => user.id == id);
    if (!user) return "Usuario no encontrado";
    return user;
  }
}

export default UserService;
