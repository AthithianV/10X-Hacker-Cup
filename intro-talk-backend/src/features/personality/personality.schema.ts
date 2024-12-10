import mongoose from "mongoose";

const PersonalitySchema = new mongoose.Schema({
    extraversion: Number, 
    agreeableness: Number, 
    conscientiousness: Number, 
    neuroticism: Number,
    openness: Number
}, {
    timestamps: true
})

const PersonalityModel = mongoose.model("personalities", PersonalitySchema);
export default PersonalityModel;