import express from "express";
import InterestController from "./interest.controller";

const InterestRouter = express.Router();

const interestController = new InterestController();




export default InterestRouter;