"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedback_controllers_1 = __importDefault(require("../controllers/feedback.controllers")); // Import the controller
const router = express_1.default.Router();
// Register the POST route to create feedback
router.post("/", feedback_controllers_1.default);
exports.default = router;
