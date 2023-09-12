import express from "express";
import JobListing, { JOB_TYPES } from "../models/job-listing";

const router = express.Router();

router.get("/", async (req, res) => {
    const hasMadeQuery = Object.keys(req.query).length !== 0;
    if (!hasMadeQuery) {
        try {
            const jobListings = await JobListing.find();
            res.json(jobListings);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    } else {
        // Filtering or searching
        const filter: any = {};

        if (req.query.title) {
            filter.title = {
                $regex: new RegExp(req.query.title as string, "i"),
            };
        }

        if (req.query.location) {
            filter.location = {
                $regex: new RegExp(req.query.location as string, "i"),
            };
        }

        if (req.query.type && JOB_TYPES.includes(req.query.type as string)) {
            filter.type = req.query.type;
        }

        if (req.query.exp_min || req.query.exp_max) {
            if (req.query.exp_min) {
                filter["experience.min"] = {
                    $gte: parseInt(req.query.exp_min as string),
                };
            }
            if (req.query.exp_max) {
                filter["experience.max"] = {
                    $lte: parseInt(req.query.exp_max as string),
                };
            }
        }

        const jobListings = await JobListing.find(filter);
        res.json(jobListings);
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
