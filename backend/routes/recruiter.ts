import express from "express";
import Recruiter from "../models/recruiter";
import JobListing from "../models/job-listing";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const recruiterData = req.body;
        const newRecruiter = new Recruiter(recruiterData);
        await newRecruiter.save();
        res.status(201).json(newRecruiter);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const recruiters = await Recruiter.find();
        res.json(recruiters);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const recruiter = await Recruiter.findById(req.params.id);
        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(recruiter);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedRecruiter = await Recruiter.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedRecruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(updatedRecruiter);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedRecruiter = await Recruiter.findByIdAndRemove(
            req.params.id
        );
        if (!deletedRecruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }
        res.json(deletedRecruiter);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id/job-listings", async (req, res) => {
    try {
        const { id } = req.params;

        const recruiter = await Recruiter.findById(id);
        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }

        const jobListings = await JobListing.find({ recruiter: id });
        res.json(jobListings);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/:id/job-listings", async (req, res) => {
    try {
        const { id } = req.params;
        const jobListingData = req.body;

        const recruiter = await Recruiter.findById(id);
        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }

        jobListingData.recruiter = id;

        const newJobListing = new JobListing(jobListingData);
        await newJobListing.save();

        res.status(201).json(newJobListing);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
