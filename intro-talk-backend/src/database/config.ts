import mongoose from "mongoose";
import { appLogger } from "../util/logger";


export default async function connectDB(uri:string):Promise<void>{
    try {
        await mongoose.connect(uri);
        appLogger.info("MongoDB Connected Successfully!");
    } catch (error) {
        throw error;
    }
}