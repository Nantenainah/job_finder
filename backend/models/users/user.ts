import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
    email: string;
    username: string;
    lastName: string;
    firstName: string;
    password: string;
    type: "admin" | "applicant" | "recruiter";
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    password: { type: String, required: true },
    type: {
        type: String,
        enum: ["admin", "applicant", "recruiter"],
        required: true,
    },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
