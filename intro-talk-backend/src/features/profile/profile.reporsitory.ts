import { ProfileDocument, ProfileType } from "../../types/profile";
import UserReporsitory from "../user/user.reporsitory";
import ProfileModel from "./profile.schema";
import ApplicationError from "../../util/errorHandler";
import mongoose from "mongoose";

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
    
    updateProfile = async (updateProfile:ProfileType, profileId: mongoose.Types.ObjectId):Promise<ProfileDocument>=>{
        try {
            const profile = await ProfileModel.findById(profileId);
            if(!profile){
                throw new ApplicationError(
                    400, 
                    `Profile does not exists for Id:[${profileId}], Please enter valid profileId`
                );
            }

            if(profile.userId !== updateProfile.userId){
                throw new ApplicationError(
                    400, 
                    `Unauthorized to update the profile with ID:${profileId}`
                );
            }

            if(updateProfile.age)
                profile.age = updateProfile.age;

            if(updateProfile.occupation)
                profile.occupation = updateProfile.occupation as string;

            if(updateProfile.communication_preference)
                profile.communication_preference = updateProfile.communication_preference as string;

            if(updateProfile.gender)
                profile.gender = updateProfile.gender;

            await profile.save();
            return profile;
        } catch (error) {
            throw error;
        }
    }
}