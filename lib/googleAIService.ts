import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

// Define the expected structure of the response using Zod
const responseSchema = z.object({
  content: z.string(),
});

// Ensure the API key is available
const apiKey = process.env.GOOGLE_API_KEY;
console.log(apiKey, "API KEY");
if (!apiKey) {
  throw new Error("API key for Google GenerativeAI is not set.");
}

// Instantiate the model
const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 2048,
  apiKey: apiKey,
});

// Function to generate response
export async function generateResponse(prompt: string): Promise<string | null> {
  try {
    const response = await model.invoke(prompt);

    // console.log(response); // Inspect the response structure

    // If content is an array, handle it accordingly
    if (Array.isArray(response.content)) {
      // Concatenate the array into a string (if content is an array of strings)
      const combinedContent = response.content
        .map((msg: any) => msg.text || "")
        .join(" ");
      return combinedContent.trim() || null;
    }

    if (!response?.content || typeof response.content !== "string") {
      throw new Error("No valid content returned from the API.");
    }

    return response.content;
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
}
