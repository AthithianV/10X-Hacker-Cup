import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
        required: [true, 'Email is required'],
    },
    age: {
        type: Number,
        min: [13, 'Age Must be at least 13']
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHERS"]
    },
    personality: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'personalities',
    },
    interest: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'interests'
    },
    occupation: { type: String },
    communication_preference: { type: String }
}, {
    timestamps: true
})

const ProfileModel = mongoose.model("profiles", ProfileSchema);
export default ProfileModel;