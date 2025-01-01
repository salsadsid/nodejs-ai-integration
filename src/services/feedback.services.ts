import FeedBackResponse from "../models/FeedBackResponse";

export const createFeedbackService = async (feedbackData: {
  feedback: string;
  aiResponse: string | null;
  type: string;
}) => {
  try {
    // Create a new feedback document using the provided feedback data
    const feedbackDocument = new FeedBackResponse(feedbackData);
    await feedbackDocument.save(); // Save the document to the database

    return feedbackDocument; // Return the saved document
  } catch (error: any) {
    return { message: error.message }; // Handle any errors that occur during save
  }
};
