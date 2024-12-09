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