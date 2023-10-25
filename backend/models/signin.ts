import mongoose, { Schema } from "mongoose";
const schemaUser = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
const userModel = mongoose.model("User", schemaUser);
module.exports = userModel