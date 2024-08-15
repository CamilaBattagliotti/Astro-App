import { Router } from "express";
import UserController from "../controllers/users-controllers";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  UserController.getAll(req, res);
});

usersRouter.get("/:id", (req, res) => {
  UserController.getById(req, res);
});

usersRouter.patch("/:id", (req, res) => {});
usersRouter.delete("/:id", (req, res) => {});

export default usersRouter;
