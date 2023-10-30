import mongoose from "mongoose";
const schemaUser = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        min: 4
    }
});
const User = mongoose.model("User", schemaUser);
export default User;