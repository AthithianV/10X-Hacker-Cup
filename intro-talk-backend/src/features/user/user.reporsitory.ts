import bcrypt from "bcryptjs";

import { UserType } from "../../types/user";
import ApplicationError from "../../util/errorHandler";
import UserModel from "./user.schema";
import mongoose from "mongoose";

export default class UserReporsitory {

    static getUserById = async (userId:mongoose.Types.ObjectId):Promise<UserType>=> {
        const user = await UserModel.findById(userId);
        if(!user){
            throw new ApplicationError(400, "User Does not Exists, Please Check UserID");            
        }
        return {_id: user._id, username: user.username, email: user.email}
    }

    register = async (email:string, username:string, password:string):Promise<void>=>{
        try {
            const usernameCheck = await UserModel.findOne({username});
            if(usernameCheck){
                throw new ApplicationError(400, "Username Already Exists!");
            }
            const emailCheck = await UserModel.findOne({email});
            if(emailCheck){
                throw new ApplicationError(400, "Email Already Exists");
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new UserModel({email, username, password: hashedPassword});
            await newUser.save();
        } catch (error) {
            throw error;
        }
    }
    
    login = async (email:string, password:string):Promise<{id:mongoose.Types.ObjectId, email:string}>=>{
        try {
            const user = await UserModel.findOne({email});
            if(!user){
                throw new ApplicationError(400, "Email or Password Incorrect");
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if(!passwordMatch){
                throw new ApplicationError(400, "Email or Password Incorrect");
            }

            return {id: user._id, email:user.email};
        } catch (error) {
            throw error;
        }
    }
}