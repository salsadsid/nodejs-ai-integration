import express from "express";
import feedbackController from "../controllers/feedback.controllers";

const router = express.Router();

router.post("/", feedbackController.createFeedback);

export default router;
