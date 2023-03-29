import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDb from "./db/mongoConnection";
import userRouter from "./src/routes/userRoutes";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true
  })
);
app.use(helmet());
app.use(express.json());

connectDb();

app.use("/user", userRouter);

app.listen(port, () => console.log("app is live on http://localhost:" + port));
