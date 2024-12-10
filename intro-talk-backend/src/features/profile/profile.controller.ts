import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import ProfileReporsitory from "./profile.reporsitory"
import ApplicationError from "../../util/errorHandler";

export default class ProfileController {
    profileReporsitory
    constructor() {
        this.profileReporsitory = new ProfileReporsitory();
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