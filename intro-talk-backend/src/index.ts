import dotenv from "dotenv";

import connectDB from "./database/config";
import { logError } from "./util/errorHandler";
import app from "./app";



dotenv.config();

const port = process.env.NODE_PORT || 3000;
try {
    app.listen(port, async ()=>{
        await connectDB(process.env.MONGODB_URI);
        console.log("Server Started. Server is Listeing at port: " + port);
    })
} catch (error) {
    logError(error);
}