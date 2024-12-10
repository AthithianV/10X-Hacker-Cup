import express from "express";
import ProfileController from "./profile.controller";

const ProfileRouter = express.Router();

const profileController = new ProfileController();

ProfileRouter.post("/:userId", profileController.createProfile);


export default ProfileRouter;