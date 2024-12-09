import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
        required: [true, 'Email is required'],
    },
    age: {
        type: Number,
        min: 13
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHERS"]
    },
    personality: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'personality',
    },
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
    occupation: {
        type: String
    },
    communication_preference: {
        type: String
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model("users", ProfileSchema);
export default UserModel;