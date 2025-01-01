"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResponse = generateResponse;
const google_genai_1 = require("@langchain/google-genai");
const zod_1 = require("zod");
const prompt_1 = require("./prompt");
// Define the expected structure of the response using Zod
const responseSchema = zod_1.z.object({
    content: zod_1.z.string(),
});
// Ensure the API key is available
const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
    throw new Error("API key for Google GenerativeAI is not set.");
}
// Instantiate the model
const model = new google_genai_1.ChatGoogleGenerativeAI({
    model: "gemini-pro",
    maxOutputTokens: 2048,
    apiKey: apiKey,
});
// Function to generate response
function generateResponse(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield model.invoke((0, prompt_1.generatePrompt)(prompt));
            // console.log(response); // Inspect the response structure
            // If content is an array, handle it accordingly
            if (Array.isArray(response.content)) {
                // Concatenate the array into a string (if content is an array of strings)
                const combinedContent = response.content
                    .map((msg) => msg.text || "")
                    .join(" ");
                return combinedContent.trim() || null;
            }
            if (!(response === null || response === void 0 ? void 0 : response.content) || typeof response.content !== "string") {
                throw new Error("No valid content returned from the API.");
            }
            return response.content;
        }
        catch (error) {
            console.error(error);
            return null; // Return null in case of an error
        }
    });
}
