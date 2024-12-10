import mongoose from "mongoose";

const InterestSchema = new mongoose.Schema({
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

const InterestModel = mongoose.model("interests", InterestSchema);
export default InterestModel;