import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import ApplicationError from "../util/errorHandler";

export default function authenticate(req:Request, res:Response, next:NextFunction){

    let token = req.header("Authorization");
    if(token){
        token = token.split("-")[1];
    }else{
        token = req.cookies.token;
    }

    if(!token){
        throw new ApplicationError(403, "Forbidden");
    }

    const secretKey = process.env.SECRET_KEY;
    try {
        if(!secretKey){
            throw new Error("Secret Key not added to environment variable");
        }
        jwt.verify(token, secretKey, (err:any, user:any)=>{            
            if(err){
                throw new ApplicationError(403, "Forbidden");
            }
            req.user = user;
            next();
        });
    } catch (error) {
        next(error);
    }
}