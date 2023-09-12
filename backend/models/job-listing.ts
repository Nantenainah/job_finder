import { Document, Schema, model } from "mongoose";
import { IRecruiter } from "./recruiter";

export const JOB_TYPES = ["part-time", "full-time", "remote", "contract"];

const jobListingSchema = new Schema({
    recruiter: {
        type: Schema.Types.ObjectId,
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
    salaryRange: {
        type: String,
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
    remoteWorkOption: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: [...JOB_TYPES],
    },
    experience: new Schema({
        min: {
            type: Number,
        },
        max: {
            type: Number,
        },
    }),
    salary: new Schema({
        min: {
            type: Number,
        },
        max: {
            type: Number,
        },
    }),
});

const JobListingModel = model("JobListing", jobListingSchema);

export default JobListingModel;
