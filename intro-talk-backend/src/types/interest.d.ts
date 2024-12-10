import mongoose, { Document } from "mongoose"

export type InterestType = {
    _id?: mongoose.Types.ObjectId,
    hobbies: String[],
    books: String[],
    anime: String[],
    movies: String[],
}

export type InterestDocument = InterestType & Document;