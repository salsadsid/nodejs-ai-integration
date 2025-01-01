import express from "express";
import createFeedback from "../controllers/feedback.controllers"; // Import the controller

const router = express.Router();

// Register the POST route to create feedback
router.post("/", createFeedback as any);

export default router;
