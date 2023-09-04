import express from "express";
import JobListing from "../models/job-listing";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const jobListings = await JobListing.find();
        res.json(jobListings);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const jobListing = await JobListing.findById(req.params.id);
        if (!jobListing) {
            return res.status(404).json({ message: "Job listing not found" });
        }
        res.json(jobListing);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
