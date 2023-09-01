import { Document, Schema, model } from "mongoose";
import { IUser } from "./user";

export interface IApplicant extends Document {
    user: Schema.Types.ObjectId | IUser;
    phoneNumber: string;
    address: string;
    resume: string;
    coverLetter: string;
    jobPreference: string;
}

const applicantSchema = new Schema<IApplicant>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    phoneNumber: { type: String },
    address: { type: String },
    resume: { type: String },
    coverLetter: { type: String },
    jobPreference: { type: String },
});

const ApplicantModel = model<IApplicant>("Applicant", applicantSchema);

export default ApplicantModel;
