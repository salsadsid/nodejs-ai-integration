"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv")); // Load environment variables from a .env file
dotenv_1.default.config();
const config = {
    db: {
        uri: process.env.MONGODB_URI || "",
    },
    port: process.env.PORT || 8080,
};
exports.default = config;
