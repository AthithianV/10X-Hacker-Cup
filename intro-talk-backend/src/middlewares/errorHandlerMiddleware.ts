import { NextFunction, Request, Response } from "express";
import { MongooseError } from "mongoose";

import ApplicationError, { logError } from "../util/errorHandler";

export default function errorHandlerMiddleware(err:Error, req:Request, res:Response, next:NextFunction){
    if(err instanceof MongooseError){
        res.status(400).json({success: false, message: "Invalid data in request, "+err.message});
        return;
    }
    if(err instanceof ApplicationError){
        res.status(err.code).json({success: false, message: err.message});
    }else{
        logError(err);
        res.status(500).json({success: false, message: "Unknown Error Occured. Please Try Again Later."});
    }
}