import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import InterestReporsitory from "./interest.reporsitory"
import ApplicationError from "../../util/errorHandler";

export default class InterestController {
    interestReporsitory
    constructor() {
        this.interestReporsitory = new InterestReporsitory();
    }

    fun1 = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            
        } catch (error) {
            next(error);
        }
    }

    fun2 = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            
        } catch (error) {            
            next(error);
        }
    }


}