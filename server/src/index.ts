import express, { Request, Response } from "express";
import { connectDB } from "./config/connectDB";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes'
import productRoutes from "./routes/product.routes";
import path from "path";

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
app.use("/images", express.static(path.join(__dirname, "public/images")));


const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
