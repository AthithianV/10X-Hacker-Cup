import mongoose, { Document } from "mongoose"

export type ProfileType = {
    _id?: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
    personality?: mongoose.Types.ObjectId | null,
    age?: number | null,
    gender?: "MALE"|"FEMALE"|"OTHERS" | null,
    occupation?: String | null,
    communication_preference?: String | null
}

export type ProfileDocument = ProfileType & Document;
