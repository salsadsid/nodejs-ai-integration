import dotenv from "dotenv"; // Load environment variables from a .env file

dotenv.config();

const config = {
  db: {
    uri: process.env.MONGODB_URI || "",
  },
  port: process.env.PORT || 8080,
};

export default config;
