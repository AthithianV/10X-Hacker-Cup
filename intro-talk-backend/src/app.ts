import express, { NextFunction } from "express";
import { Request, Response } from "express";
import cors from "cors";
import { appLogger } from "./util/logger";
import UserRouter from "./features/user/user.router";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";

const app = express();

app
.use(cors())
.use(express.json())
.use((req:Request, res:Response, next:NextFunction)=>{
    appLogger.info(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

app.get("/", (req:Request, res:Response)=>{
    res.send("<h1>Welcome to IntroTalk Backend :)</h1>")
})

app.use("/user", UserRouter);

app.use(errorHandlerMiddleware);
app.use((req:Request, res:Response)=>{
    res.status(404).json({success: false, message: "Page Not Found"});
})

export default app;