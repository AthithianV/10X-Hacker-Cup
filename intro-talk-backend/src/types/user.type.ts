import mongoose, { Document } from "mongoose"

export type UserType = {
    _id?: mongoose.Types.ObjectId,
    username: string,
    email: string,
    password: string,
}

export type UserDocument = UserType & Document;