import express, { Request, Response } from "express";
import { connectDB } from "./config/connectDB";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes'
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();

connectDB();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

// app.use(errorHandler as express.ErrorRequestHandler);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
