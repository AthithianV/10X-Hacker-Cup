import express from "express";
import PersonalityController from "./personality.controller";

const PersonalityRouter = express.Router();

const personalityController = new PersonalityController();




export default PersonalityRouter;