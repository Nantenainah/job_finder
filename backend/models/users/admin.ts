import { Document, Schema, model } from "mongoose";
import { IUser } from "./user";

export interface IAdmin extends Document {
    fullName: string;
    user: Schema.Types.ObjectId | IUser;
}

const adminSchema = new Schema<IAdmin>({
    fullName: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const AdminModel = model<IAdmin>("Admin", adminSchema);

export default AdminModel;
