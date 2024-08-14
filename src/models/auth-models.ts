import db from "../db/auth.json";
import { writeFileSync } from "jsonfile";

class AuthModel {
  constructor() {}

  static getData() {
    return db;
  }
  static writeData(data: {}) {
    writeFileSync("./src/db/auth.json", data);
  }
}

export default AuthModel;
