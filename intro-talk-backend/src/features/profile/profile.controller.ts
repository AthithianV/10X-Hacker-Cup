import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import ProfileReporsitory from "./profile.reporsitory"
import ApplicationError from "../../util/errorHandler";
import mongoose from "mongoose";

export default class ProfileController {
    profileReporsitory
    constructor() {
        this.profileReporsitory = new ProfileReporsitory();
    }

    createProfile = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            const { age, gender, occupation, communication_preference } = req.body;
            const userId = req.params.userId;
            const checkforValidUserID = new RegExp('^[0-9a-fA-F]{24}$');
            if(!userId || !checkforValidUserID.test(userId)){
                throw new ApplicationError(400, "Invalid UserId");
            }
            const newProfile = await this.profileReporsitory.createProfile({
                userId: new mongoose.Types.ObjectId(userId),
                age, 
                gender, 
                occupation,
                communication_preference
            });
            res.status(201).send({success: true, message: "Profile Created Successfully", profile: newProfile});
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