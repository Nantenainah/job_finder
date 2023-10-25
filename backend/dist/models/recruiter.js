"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recruiterSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    password: { type: String, required: true },
    companyName: { type: String },
    phoneNumber: { type: String },
    companyDescription: { type: String },
    websiteUrl: { type: String },
    logo: { type: String },
});
const RecruiterModel = (0, mongoose_1.model)("Recruiter", recruiterSchema);
exports.default = RecruiterModel;
