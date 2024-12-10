import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import PersonalityReporsitory from "./personality.reporsitory"
import ApplicationError from "../../util/errorHandler";

export default class PersonalityController {
    personalityReporsitory
    constructor() {
        this.personalityReporsitory = new PersonalityReporsitory();
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