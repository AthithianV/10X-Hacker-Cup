import mongoose from "mongoose"

export type ProfileType = {
    uid: mongoose.Types.ObjectId,
    age: number,
    gender: "MALE"|"FEMALE"|"OTHERS",
    personality: mongoose.Types.ObjectId,
    hobbies: String[]
    books: String[]
    anime: String[]
    movies: String[],
    occupation: String,
    communication_preference: String
}