"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const applicantSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    resume: { type: String },
    coverLetter: { type: String },
    jobPreference: { type: String },
});
const ApplicantModel = (0, mongoose_1.model)("Applicant", applicantSchema);
exports.default = ApplicantModel;
