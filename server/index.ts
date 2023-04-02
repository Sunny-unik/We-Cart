import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDb from "./src/db/mongoConnection";
import userRouter from "./src/routes/userRoutes";
import productRouter from "./src/routes/productRoutes";

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
app.use("/product", productRouter);

app.listen(port, () => console.log("app is live on http://localhost:" + port));
