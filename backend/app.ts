require("dotenv").config({ path: "./.env" });
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as database from "./config/database";
import recruiterRouter from "./routes/recruiter";
import applicantRouter from "./routes/applicant";
import adminRouter from "./routes/admin";
import jobListingRouter from "./routes/job-listing";
import authRouter from "./routes/auth";
import statsRouter from "./routes/stats";
import session from "express-session";
import passport from "passport";
import setupPassport from "./config/passport";

const app = express();

// middleware
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: "mysecret",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
setupPassport();

// routes
app.use("/recruiters", recruiterRouter);
app.use("/applicants", applicantRouter);
app.use("/admins", adminRouter);
app.use("/job-listings", jobListingRouter);
app.use("/auth", authRouter);
app.use("/stats", statsRouter);

// server listening
// Wait the database to connect before launching everything
database.config(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
});
