import { Express } from "express";
import dotenv from "dotenv";

import connectDB from "../database/config";
import { logError } from "../util/errorHandler";

const startServer = async (app:Express) => {

    dotenv.config();

    const port = process.env.PORT || 3000;
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, ()=>{
            console.log("Server Started. Server is Listeing at port: " + port);
        })
    } catch (error) {
        logError(error);
    }
}

export default startServer;