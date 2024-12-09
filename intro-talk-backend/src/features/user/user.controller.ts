import { NextFunction, Request, Response } from "express";
import UserReporsitory from "./user.reporsitory"
import ApplicationError from "../../util/errorHandler";

export default class UserController {
    userReporsitory
    constructor() {
        this.userReporsitory = new UserReporsitory();
    }

    register = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            const body = req.body();
            const {email, username, password} = body;
            if(!email || !username || !password){
                throw new ApplicationError(400, "Missing Valid Input(s)");
            }
            await this.userReporsitory.register(email, username, password);
            res.status(201).json({success: true, message: "User Created Successfully"});
        } catch (error) {
            next(error);
        }
    }


}