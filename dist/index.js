"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
dotenv_1.default.config();
// Create a new express app instance
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.connectDB)();
app.use("/api/feedback", feedbackRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
