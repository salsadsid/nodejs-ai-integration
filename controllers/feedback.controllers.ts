import { Request, Response } from "express";
import { createFeedbackService } from "../services/feedback.services";

interface FeedbackBody {
  feedback: string;
  aiResponse: string;
}
const createFeedback = async (
  req: Request<{}, {}, FeedbackBody>,
  res: Response
) => {
  try {
    const { feedback, aiResponse } = req.body;
    console.log(req.body);
    const result = await createFeedbackService({ feedback, aiResponse });

    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export default { createFeedback };
