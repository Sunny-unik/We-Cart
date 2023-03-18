import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDb from "./db/mongoConnection";

const app = express();
dotenv.config();

app.use(
  cors({
    credentials: true
  })
);
app.use(helmet());
app.use(express.json());

connectDb();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! " + req);
});

app.listen(4000, () => console.log("app is live on http://localhost:4000"));
