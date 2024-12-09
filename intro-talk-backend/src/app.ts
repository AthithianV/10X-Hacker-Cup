import express from "express";
import startServer from "./startup/init";
import router from "./startup/init";

const app = express();

startServer(app);
router(app);

export default app;