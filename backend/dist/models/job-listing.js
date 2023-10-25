"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JOB_SECTOR = exports.JOB_TYPES = void 0;
const mongoose_1 = require("mongoose");
exports.JOB_TYPES = ["part-time", "full-time", "remote", "contract"];
exports.JOB_SECTOR = [
    "Informatique",
    "Santé",
    "Finance",
    "Éducation",
    "Art et divertissement",
    "Transport et logistique",
    "Hôtellerie et restauration",
    "Médias et communication",
    "Construction",
    "Sciences",
    "Environnement",
    "Agriculture",
    "Fabrication",
    "Télécommunications",
];
const jobListingSchema = new mongoose_1.Schema({
    recruiter: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Recruiter",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    companyLogo: {
        type: String,
    },
    location: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    applicationDeadline: {
        type: String,
    },
    employmentStartDate: {
        type: String,
    },
    skills: {
        type: String,
        required: true,
    },
    responsibility: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: [...exports.JOB_TYPES],
    },
    sector: {
        type: String,
        enum: [...exports.JOB_SECTOR],
    },
    experience: new mongoose_1.Schema({
        min: {
            type: Number,
        },
        max: {
            type: Number,
        },
    }),
    salary: new mongoose_1.Schema({
        min: {
            type: Number,
        },
        max: {
            type: Number,
        },
    }),
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
const JobListingModel = (0, mongoose_1.model)("JobListing", jobListingSchema);
exports.default = JobListingModel;
