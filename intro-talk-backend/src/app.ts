import express, { Request, Response } from "express";
import initServer from "./startup/init";
import securitySetUp from "./startup/security";
import routerSetUp from "./startup/routerSetUp";

const app = express();

initServer(app);
securitySetUp(app);
routerSetUp(app);

export default app;