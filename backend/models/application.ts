import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cv: {
        type: String, // You can store the file path or reference here
    },
    lm: {
        type: String, // You can store the file path or reference here
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Applicant", // This should reference your "Applicant" model
        required: true,
    },
    jobListing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobListing", // This should reference your "Applicant" model
        required: true,
    },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
