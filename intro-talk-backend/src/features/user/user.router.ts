import express from "express";
import UserController from "./user.controller";

const UserRouter = express.Router();

const userController = new UserController();

UserRouter.post("/register", userController.register);

export default UserRouter;