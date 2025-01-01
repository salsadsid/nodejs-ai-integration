import FeedBackResponse from "../models/FeedBackResponse";

export const createFeedbackService = async (feedbackData: {}) => {
  try {
    // Rename the variable to avoid conflict with the function argument
    const feedbackDocument = new FeedBackResponse(feedbackData);
    await feedbackDocument.save();

    return feedbackDocument;
  } catch (error: any) {
    return { message: error.message };
  }
};
