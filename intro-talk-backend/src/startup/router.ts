import { Express, Request, Response } from "express";
import express from "express";
import cors from "cors";

import { appLogger } from "../util/logger";
import { errorHandler, logError } from "../util/errorHandler";
import UserRouter from "../features/user/user.router";

const router = (app:Express) => {
    try{
        app
        .use(cors())
        .use(express.json())
        .use((req:Request, res:Response)=>{
            appLogger.info(`Method: ${req.method}, URL: ${req.url}`);
        });

        app.get("/", (req:Request, res:Response)=>{
            res.send("<h1>Welcome to IntroTalk Backend :)</h1>")
        })

        app.use("/user", UserRouter);
        
        app.use(errorHandler);
        app.use((req:Request, res:Response)=>{
            res.status(404).json({success: false, message: "Page Not Found"})
        })
    }
    catch(err){
        logError(err);
    }
}

export default router;