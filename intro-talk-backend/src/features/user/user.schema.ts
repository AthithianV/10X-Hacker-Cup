import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, "Email must be Unique"]
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, "Username must be Unique"]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;