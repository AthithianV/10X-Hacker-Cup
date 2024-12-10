import express from "express";
import ProfileController from "./profile.controller";

const ProfileRouter = express.Router();

const profileController = new ProfileController();




export default ProfileRouter;