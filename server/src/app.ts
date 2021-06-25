import express, { Request, Response } from "express";
import cors from "cors";
import router from './routes'

const app = express();

async function startServer(): Promise<void> {
  app.use(express.json());
  app.use(cors());
  app.use(router);
}
startServer();

export default app;