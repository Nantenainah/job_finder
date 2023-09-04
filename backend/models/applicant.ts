import { Document, Schema, model } from "mongoose";

export interface IApplicantBase extends Document {
    email: string;
    username: string;
    lastName: string;
    firstName: string;
    password: string;
}

export interface IApplicant extends IApplicantBase {
    phoneNumber?: string;
    address?: string;
    resume?: string;
    coverLetter?: string;
    jobPreference?: string;
}

const applicantSchema = new Schema<IApplicant>({
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

const ApplicantModel = model<IApplicant>("Applicant", applicantSchema);

export default ApplicantModel;
