import bcrypt from "bcryptjs";

import { UserType } from "../../types/user.type";
import ApplicationError from "../../util/errorHandler";
import UserModel from "./user.schema";

export default class UserReporsitory {

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
}