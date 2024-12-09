import mongoose from "mongoose";
import { appLogger } from "../util/logger";


export default async function connectDB(uri:string|undefined):Promise<void>{
    try {
        if(!uri){
            throw new Error("MongoDB URI missing!")
        }
        await mongoose.connect(uri);
        appLogger.info("MongoDB Connected Successfully!");
    } catch (error) {
        throw error;
    }
}