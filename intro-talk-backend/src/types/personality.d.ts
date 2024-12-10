import mongoose, { Document } from "mongoose"

export type PersonalityType = {
    _id?: mongoose.Types.ObjectId,
    extraversion: number, 
    agreeableness: number, 
    conscientiousness: number, 
    neuroticism: number,
    openness: number
}

export type PersonalityDocument = PersonalityType & Document;