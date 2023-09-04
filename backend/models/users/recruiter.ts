import { Document, Schema, model } from "mongoose";

export interface IRecruiterBase extends Document {
    email: string;
    username: string;
    lastName: string;
    firstName: string;
    password: string;
}

export interface IRecruiter extends IRecruiterBase {
    companyName?: string;
    phoneNumber?: string;
    companyDescription?: string;
    websiteUrl?: string;
    logo?: string;
}

const recruiterSchema = new Schema<IRecruiter>({
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

const RecruiterModel = model<IRecruiter>("Recruiter", recruiterSchema);

export default RecruiterModel;
