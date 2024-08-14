import { Router } from "express";
import ChartController from "../controllers/charts-controllers";

const chartsRouter = Router();

chartsRouter.get("/", (req, res) => {
  ChartController.getAll(req, res);
});

chartsRouter.get("/:name", (req, res) => {
  ChartController.getAll(req, res);
});

chartsRouter.post("/", (req, res) => {});

chartsRouter.patch("/:id", (req, res) => {});
chartsRouter.delete("/:id", (req, res) => {});

export default chartsRouter;
