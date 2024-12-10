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

    updateProfile = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            const { age, gender, occupation, communication_preference } = req.body;
            const profileId = req.params.profileId;
            const checkforValidprofileId = new RegExp('^[0-9a-fA-F]{24}$');
            if(!profileId || !checkforValidprofileId.test(profileId)){
                throw new ApplicationError(400, "Invalid ProfileId");
            }

            if(!req.user){
                throw new ApplicationError(403, `Unauthorized to Update Profile with ID:[${profileId}]`);
            }

            const newProfile = await this.profileReporsitory.updateProfile({
                userId: new mongoose.Types.ObjectId(req.user.id),
                age, 
                gender, 
                occupation,
                communication_preference
            }, new mongoose.Types.ObjectId(profileId));

            res.status(201).send({success: true, message: "Profile has been updated Successfully", profile: newProfile});
        } catch (error) {            
            next(error);
        }
    }


}