import { Response, Request } from "express";
import ChartModel from "../models/charts-models";
import { chartsValidator } from "../schemas/charts";

class ChartControllers {
  constructor() {}
  static getAll(req, res) {
    const db = ChartModel.getData();
    res.status(200).json(db.charts);
  }
  static getById(req, res: Response) {
    const db = ChartModel.getData();
    const chart = db.charts.find((chart) => req.params.id == chart.id);
    res.status(200).json({ message: chart });
  }
  static create(req, res) {
    const result = chartsValidator(req.body);
    // En el if tengo que retornar porque sino sigue leyendo, de esta manera corta el flujo de ejecucion.
    if (!result.success) return res.status(400).json({ error: result.error });
    // Agregar logica para escribir en base de datos
    res.status(201).json({ message: "Creado con exito" });
  }

  static updateById(id: string) {}
  static deleteById(is: string) {}
}

export default ChartControllers;
