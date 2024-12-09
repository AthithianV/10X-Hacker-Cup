import { Express, Request, Response} from "express";
const routerSetUp = (app:Express)=>{
    app.get("/", (req:Request, res:Response)=>{
        res.send("<h1>Welcome to IntroTalk Backend :)</h1>")
    })
}

export default routerSetUp;