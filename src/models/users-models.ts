import db from "../db/users.json";
import { writeFileSync } from "jsonfile";

class UserModel {
  constructor() {}

  static getData() {
    return db;
  }
  static writeData(data: {}) {
    writeFileSync("./src/db/users.json", data);
  }
}

export default UserModel;
