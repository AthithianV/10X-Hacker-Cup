import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import UserReporsitory from "./user.reporsitory"
import ApplicationError from "../../util/errorHandler";

export default class UserController {
    userReporsitory
    constructor() {
        this.userReporsitory = new UserReporsitory();
    }

    register = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            const body = req.body;
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

    login = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            const body = req.body;
            const {email, password} = body;

            console.log(body);
            
            
            if(!email || !password){
                throw new ApplicationError(400, "Missing Valid Input(s)");
            }

            const user = await this.userReporsitory.login(email, password);

            const secretKey = process.env.SECRET_KEY;
            if (!secretKey) {
                throw new Error('SECRET_KEY is not defined in the environment variables');
            }

            const token = jwt.sign(user, secretKey, {expiresIn: "10h"});

            res
            .status(201)
            .cookie("token", token, {
                secure: process.env.NODE_ENV==="production",
                httpOnly: true,
                sameSite: "strict",
                maxAge: 36000
            })
            .json({success: true, message: "Login Successfully", token});
        } catch (error) {            
            next(error);
        }
    }


}