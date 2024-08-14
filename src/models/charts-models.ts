import db from "../db/charts.json";
import { writeFileSync } from "jsonfile";

class ChartModel {
  constructor() {}

  static getData() {
    return db;
  }
  static writeData(data: {}) {
    writeFileSync("./src/db/charts.json", data);
  }
}

export default ChartModel;
