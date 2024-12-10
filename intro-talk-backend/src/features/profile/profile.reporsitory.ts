import mongoose from "mongoose";

import { ProfileDocument, ProfileType } from "../../types/profile";
import UserReporsitory from "../user/user.reporsitory";
import ProfileModel from "./profile.schema";

export default class ProfileReporsitory {

    createProfile = async (newProfile:ProfileType):Promise<ProfileDocument>=>{
        try {
            await UserReporsitory.getUserById(newProfile.uid);
            const newProfileDoc = new ProfileModel(newProfile);
            await newProfileDoc.save();
            return newProfileDoc;
        } catch (error) {
            throw error;
        }
    }
    
    fun2 = async (email:string, password:string):Promise<void>=>{
        try {
            
        } catch (error) {
            throw error;
        }
    }
}