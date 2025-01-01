// src/index.ts
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import { connectDB } from "./config/db";
import feedbackRoutes from "./routes/feedbackRoutes";
dotenv.config();

// Create a new express app instance
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/feedback", feedbackRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
