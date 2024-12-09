import { Express, Request, Response } from "express";
import express from "express";
import cors from "cors";
import { appLogger } from "../util/logger";

const securitySetUp = (app:Express) => {
    try{
        app
        .use(cors())
        .use(express.json())
        .use((req:Request, res:Response)=>{
            appLogger.info(`Method: ${req.method}, URL: ${req.url}`);
        });
    }
    catch(err){
        console.log(err);
    }
}

export default securitySetUp;