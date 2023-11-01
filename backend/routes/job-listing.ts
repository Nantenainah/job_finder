import express from "express";
import JobListing, { JOB_SECTOR, JOB_TYPES } from "../models/job-listing";
import ApplicantModel from "../models/applicant";
import Application from "../models/application";

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

        if (req.query.sector) {
            filter.sector = {
                $regex: new RegExp(req.query.sector as string, "i"),
            };
        }

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

        if (req.query.salary_min || req.query.salary_max) {
            if (req.query.salary_min) {
                filter["salary.min"] = {
                    $gte: parseInt(req.query.salary_min as string),
                };
            }
            if (req.query.salary_max) {
                filter["salary.max"] = {
                    $lte: parseInt(req.query.salary_max as string),
                };
            }
        }

        const jobListings = await JobListing.find(filter);
        res.json(jobListings);
    }
});

router.get("/stats", async (req, res) => {
    try {
        const { month, year } = req.query; // Get the month as a number from the query parameters
        if (!month || !year) {
            throw new Error();
        }
        // Convert the month to a JavaScript Date object
        const startDate = new Date(+year, +month - 1, 1); // month is 0-based, so subtract 1
        const endDate = new Date(+year, +month, 0, 23, 59, 59); // Last day of the month, 23:59:59

        // Create a query to find job listings within the specified month
        const jobListings = await JobListing.find({
            createdAt: {
                $gte: startDate,
                $lte: endDate,
            },
        });

        const values = JOB_SECTOR.map((sect) => {
            let count = 0;
            jobListings.forEach((job) => {
                if (sect === job.sector) {
                    count++;
                }
            });
            return {
                name: sect,
                count,
            };
        });

        res.json(values);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/job_type_chart", async (req, res) => {
    try {
        const { month, year } = req.query; // Get the month as a number from the query paramete
        if (!month || !year) {
            throw new Error();
        }
        // Convert the month to a JavaScript Date object
        const startDate = new Date(+year, +month - 1, 1); // month is 0-based, so subtract 1
        const endDate = new Date(+year, +month, 0, 23, 59, 59); // Last day of the month, 23:59

        // Create a query to find job listings within the specified month
        const jobListings = await JobListing.find({
            createdAt: {
                $gte: startDate,
                $lte: endDate,
            },
        });

        const values = JOB_TYPES.map((type) => {
            let count = 0;
            jobListings.forEach((job) => {
                if (type === job.type) {
                    count++;
                }
            });
            return {
                name: type,
                value: count,
            };
        });
        res.json(values);
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

router.get("/:id/applications", async (req, res) => {
    try {
        const applications = await Application.find({
            jobListing: req.params.id,
        });
        console.log("Applications : ", applications);
        res.json(applications);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const jobListing = await JobListing.findByIdAndDelete(req.params.id);
        res.json(jobListing);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            throw new Error("Not authenticated");
        }
        const user = req.user as any;
        const role = user.role;
        if (role !== "recruiter") {
            return res.status(501).json({
                message: "Only a recruiter can publish job listing",
            });
        }
        const data = req.body;
        data.recruiter = user.data._id;
        const jobListing = await JobListing.create(data);
        res.json(jobListing);
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

export default router;
