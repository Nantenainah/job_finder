import { Document, Schema, model } from "mongoose";
import { IRecruiter } from "./users/recruiter";

interface IJobListing extends Document {
    recruiter: Schema.Types.ObjectId | IRecruiter;
    title: string;
    description: string;
    requirements: string;
    companyName: string;
    companyLogo?: string;
    location: string;
    industry: string;
    salaryRange?: string;
    applicationDeadline?: string;
    employmentStartDate?: string;
    skills: string;
    responsibility: string;
    remoteWorkOption: string;
}

const jobListingSchema = new Schema<IJobListing>({
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
});

const JobListingModel = model("JobListing", jobListingSchema);

export default JobListingModel;
