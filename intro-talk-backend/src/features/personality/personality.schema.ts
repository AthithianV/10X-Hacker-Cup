import mongoose from "mongoose";

const PersonalitySchema = new mongoose.Schema({
    hobbies: {
        type: [String]
    },
    books: {
        type: [String]
    },
    anime: {
        type: [String]
    },
    movies: {
        type: [String]
    },
}, {
    timestamps: true
})

const PersonalityModel = mongoose.model("personalities", PersonalitySchema);
export default PersonalityModel;