import { NextFunction, Request, Response } from "express";
import { errorLogger } from "./logger";
import { MongooseError } from "mongoose";

export default class ApplicationError extends Error{
    code:number;
    constructor(code:number, message:string){
        super(message);
        Object.setPrototypeOf(this, ApplicationError.prototype);
        this.code = code;
        this.name = "ApplicationError";
        Error.captureStackTrace(this, this.constructor);
    }
}

export function errorHandler(err:Error, req:Request, res:Response, next:NextFunction){
    if(err instanceof MongooseError){
        res.status(400).json({success: false, message: "Invalid data in request"});
        return;
    }
    if(err instanceof ApplicationError){
        res.status(err.code).json({success: false, message: err.message});
    }else{
        logError(err);
        res.status(500).json({success: false, message: "Unknown Error Occured. Please Try Again Later."});
    }
}

export const missingError = (model:string, id:string):ApplicationError =>{
    return new ApplicationError(400, `${model} doet not exists for ID:${id}`);
}

export const logError = (error:any)=>{
    if(error instanceof Error)
        errorLogger.error({name: error.name, message: error.message, stack: error.stack});
    else{
        errorLogger.error({message: "Unknown Error Occured"});
    }
}