import { ProfileDocument, ProfileType } from "../../types/profile";
import UserReporsitory from "../user/user.reporsitory";
import ProfileModel from "./profile.schema";
import ApplicationError from "../../util/errorHandler";

export default class ProfileReporsitory {

    createProfile = async (newProfile:ProfileType):Promise<ProfileDocument>=>{
        try {
            await UserReporsitory.getUserById(newProfile.userId);

            const checkProfile = await ProfileModel.findOne({userId: newProfile.userId});
            if(checkProfile){
                throw new ApplicationError(
                    400, 
                    `Profile exists already for userId:[${newProfile.userId}], Please Try update API endpoint`
                );
            }

            const newProfileDoc = new ProfileModel(newProfile);
            await newProfileDoc.save();
            return newProfileDoc;
        } catch (error) {
            console.log(error);
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