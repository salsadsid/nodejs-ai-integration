import { Request, Response } from "express";
import { generateResponse } from "../lib/googleAIService";
import { createFeedbackService } from "../services/feedback.services";

interface FeedbackBody {
  feedback: string;
  type: string;
}

const createFeedback = async (
  req: Request<{}, {}, FeedbackBody>,
  res: Response
) => {
  try {
    const { feedback, type } = req.body;

    if (!feedback) {
      return res.status(400).json({ message: "Feedback is required" });
    }

    // Generate AI response based on the provided feedback
    let aiResponse = null;
    if (type === "bug") {
      aiResponse = await generateResponse(feedback);
    }

    // Pass feedback and AI response to the service layer
    const result = await createFeedbackService({ feedback, aiResponse, type });

    // Return the result (the saved feedback document) to the client
    return res.status(201).json(result);
  } catch (error: any) {
    // Handle any errors that occur
    return res.status(500).json({ message: error.message });
  }
};

export default createFeedback;
