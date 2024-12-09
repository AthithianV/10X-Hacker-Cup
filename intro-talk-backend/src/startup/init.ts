import { Express } from "express";

const initServer = (app:Express) => {
    const port = process.env.PORT || 3000;

    app.listen(port, ()=>{
        console.log("Server Started. Server is Listeing at port: " + port);
    })
}

export default initServer;