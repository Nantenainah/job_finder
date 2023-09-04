import { Document, Schema, model } from "mongoose";

export interface IAdminBase extends Document {
    email: string;
    username: string;
    lastName: string;
    firstName: string;
    password: string;
}

export interface IAdmin extends IAdminBase {
    fullName?: string;
}

const adminSchema = new Schema<IAdmin>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String },
});

const AdminModel = model<IAdmin>("Admin", adminSchema);

export default AdminModel;
