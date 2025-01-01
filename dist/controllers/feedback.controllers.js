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
const googleAIService_1 = require("../lib/googleAIService");
const feedback_services_1 = require("../services/feedback.services");
const createFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { feedback, type } = req.body;
        if (!feedback) {
            return res.status(400).json({ message: "Feedback is required" });
        }
        // Generate AI response based on the provided feedback
        let aiResponse = null;
        if (type === "bug") {
            aiResponse = yield (0, googleAIService_1.generateResponse)(feedback);
        }
        // Pass feedback and AI response to the service layer
        const result = yield (0, feedback_services_1.createFeedbackService)({ feedback, aiResponse, type });
        // Return the result (the saved feedback document) to the client
        return res.status(201).json(result);
    }
    catch (error) {
        // Handle any errors that occur
        return res.status(500).json({ message: error.message });
    }
});
exports.default = createFeedback;
