import express from "express";
import Applicant from "../models/applicant";
import Application from "../models/application";
import { Types } from "mongoose";
import { Multer } from "multer";

function createRouter(upload: Multer) {
    const router = express.Router();

    router.post("/", async (req, res) => {
        try {
            const applicantData = req.body;
            const newApplicant = new Applicant(applicantData);
            await newApplicant.save();
            res.status(201).json(newApplicant);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    });

    router.get("/", async (req, res) => {
        try {
            const applicants = await Applicant.find();
            res.json(applicants);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    });

    router.get("/:id", async (req, res) => {
        try {
            const applicant = await Applicant.findById(req.params.id);
            if (!applicant) {
                return res.status(404).json({ message: "Applicant not found" });
            }
            res.json(applicant);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    });

    router.put("/:id", async (req, res) => {
        try {
            const updatedApplicant = await Applicant.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedApplicant) {
                return res.status(404).json({ message: "Applicant not found" });
            }
            res.json(updatedApplicant);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    });

    router.delete("/:id", async (req, res) => {
        try {
            const deletedApplicant = await Applicant.findByIdAndRemove(
                req.params.id
            );
            if (!deletedApplicant) {
                return res.status(404).json({ message: "Applicant not found" });
            }
            res.json(deletedApplicant);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    });

    const cpUpload = upload.fields([
        { name: "cv", maxCount: 1 },
        { name: "lm", maxCount: 1 },
    ]);
    router.post(
        "/:applicantID/applications/:jobListingID",
        cpUpload,
        async (req, res) => {
            if (!req.files) {
                return;
            }
            const files = req.files as {
                cv: Express.Multer.File[];
                lm: Express.Multer.File[];
            };

            const cvFilename = files.cv[0].filename;
            const lmFilename = files.lm[0].filename;

            try {
                const { applicantID, jobListingID } = req.params;

                const applicationData = {
                    applicant: applicantID,
                    jobListing: jobListingID,
                    fullName: req.body.fullName,
                    email: req.body.email,
                    contact: req.body.contact,
                    salary: req.body.salary,
                    address: req.body.address,
                    cv: cvFilename,
                    lm: lmFilename,
                };

                // add lm and cv here
                const application = new Application(applicationData);
                const savedApplication = await application.save();
                res.json(savedApplication);
            } catch (error) {
                console.log(error);
                res.status(400).json({
                    error: "Failed to create the application",
                });
            }
        }
    );

    return router;
}

export default createRouter;
