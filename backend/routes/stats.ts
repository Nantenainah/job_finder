import express from "express";
import Recruiter from "../models/recruiter";
import Applicant from "../models/applicant";
import Admin from "../models/admin";
import JobListing, { JOB_SECTOR, JOB_TYPES } from "../models/job-listing";

const router = express.Router();

const getJobTypeStats = async (month: number, year: number) => {
    // Convert the month to a JavaScript Date object
    const startDate = new Date(year, month - 1, 1); // month is 0-based, so subtract 1
    const endDate = new Date(year, month, 0, 23, 59, 59); // Last day of the month, 23:59

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

    return values;
};

const getJobSectorStats = async (month: number, year: number) => {
    // Convert the month to a JavaScript Date object
    const startDate = new Date(year, month - 1, 1); // month is 0-based, so subtract 1
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

    return values;
};

const getAllCounts = async () => {
    const jobListingsCount = await JobListing.count();
    const recruitersCount = await Recruiter.count();
    const applicantsCount = await Applicant.count();
    const adminsCount = await Admin.count();

    return {
        jobListingsCount,
        recruitersCount,
        applicantsCount,
        adminsCount,
    };
};

router.get("/", async (req, res) => {
    try {
        const { month, year } = req.query;
        if (!month && !year) {
            res.sendStatus(400);
            return;
        }
        const allCounts = await getAllCounts();
        const jobSectorStats = await getJobSectorStats(
            parseInt(month as string),
            parseInt(year as string)
        );
        const jobTypeStats = await getJobTypeStats(
            parseInt(month as string),
            parseInt(year as string)
        );

        const response = {
            ...allCounts,
            jobTypeStats,
            jobSectorStats,
        };

        res.json(response);
    } catch {
        res.sendStatus(500);
    }
});

export default router;
