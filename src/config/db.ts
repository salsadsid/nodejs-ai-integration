import mongoose from "mongoose";
import config from "./config";
// Connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri);
    console.log("Database connected successfully");
  } catch (error: any) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the process with failure
  }
};