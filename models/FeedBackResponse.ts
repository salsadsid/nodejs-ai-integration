import mongoose, { Schema } from "mongoose";

const feedBackResponseSchema = new Schema({
  feedback: {
    type: String,
    required: true,
  },
  aiResponse: {
    type: String,
    required: true,
  },
});

const FeedBackResponse = mongoose.model(
  "FeedBackResponse",
  feedBackResponseSchema
);

export default FeedBackResponse;
