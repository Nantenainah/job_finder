"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String },
});
const AdminModel = (0, mongoose_1.model)("Admin", adminSchema);
exports.default = AdminModel;
