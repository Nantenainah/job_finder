import { Document, Schema, model } from "mongoose";
import { IUser } from "./user";

export interface IRecruiter extends Document {
    user: Schema.Types.ObjectId | IUser;
    companyName: string;
    phoneNumber: string;
    email: string;
    companyDescription: string;
    websiteUrl?: string;
    logo?: string;
}

const recruiterSchema = new Schema<IRecruiter>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    companyName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    companyDescription: { type: String, required: true },
    websiteUrl: { type: String },
    logo: { type: String },
});

const RecruiterModel = model<IRecruiter>("Recruiter", recruiterSchema);

export default RecruiterModel;
