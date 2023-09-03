require("dotenv").config({ path: "./.env" });
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as database from "./config/database";
import recruiterRouter from "./routes/recruiter";
import applicantRouter from "./routes/applicant";
import adminRouter from "./routes/admin";
import jobListingRouter from "./routes/job-listing";

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/recruiters", recruiterRouter);
app.use("/applicants", applicantRouter);
app.use("/admins", adminRouter);
app.use("/job-listings", jobListingRouter);

// server listening
// Wait the database to connect before launching everything
database.config(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
});
