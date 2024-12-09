import { Express } from "express";
import { errorLogger } from "../util/logger";
import connectDB from "../database/config";

const initServer = async (app:Express) => {

    const port = process.env.PORT || 3000;
    try {
        if(!process.env.MONGODB_URI){
            throw new Error("MongoDB URI missing!")
        }
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, ()=>{
            console.log("Server Started. Server is Listeing at port: " + port);
        })
    } catch (error) {
        if(error instanceof Error)
            errorLogger.error({name: error.name, message: error.message, stack: error.stack});
        else{
            errorLogger.error({message: "Unknown Error Occured"});
        }
    }
}

export default initServer;