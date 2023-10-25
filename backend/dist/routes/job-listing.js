"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const job_listing_1 = __importStar(require("../models/job-listing"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hasMadeQuery = Object.keys(req.query).length !== 0;
    if (!hasMadeQuery) {
        try {
            const jobListings = yield job_listing_1.default.find();
            res.json(jobListings);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    else {
        // Filtering or searching
        const filter = {};
        if (req.query.title) {
            filter.title = {
                $regex: new RegExp(req.query.title, "i"),
            };
        }
        if (req.query.location) {
            filter.location = {
                $regex: new RegExp(req.query.location, "i"),
            };
        }
        if (req.query.type && job_listing_1.JOB_TYPES.includes(req.query.type)) {
            filter.type = req.query.type;
        }
        if (req.query.exp_min || req.query.exp_max) {
            if (req.query.exp_min) {
                filter["experience.min"] = {
                    $gte: parseInt(req.query.exp_min),
                };
            }
            if (req.query.exp_max) {
                filter["experience.max"] = {
                    $lte: parseInt(req.query.exp_max),
                };
            }
        }
        if (req.query.salary_min || req.query.salary_max) {
            if (req.query.salary_min) {
                filter["salary.min"] = {
                    $gte: parseInt(req.query.salary_min),
                };
            }
            if (req.query.salary_max) {
                filter["salary.max"] = {
                    $lte: parseInt(req.query.salary_max),
                };
            }
        }
        const jobListings = yield job_listing_1.default.find(filter);
        res.json(jobListings);
    }
}));
router.get("/stats", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { month, year } = req.query; // Get the month as a number from the query parameters
        if (!month || !year) {
            throw new Error();
        }
        // Convert the month to a JavaScript Date object
        const startDate = new Date(+year, +month - 1, 1); // month is 0-based, so subtract 1
        const endDate = new Date(+year, +month, 0, 23, 59, 59); // Last day of the month, 23:59:59
        // Create a query to find job listings within the specified month
        const jobListings = yield job_listing_1.default.find({
            createdAt: {
                $gte: startDate,
                $lte: endDate,
            }
        });
        const values = job_listing_1.JOB_SECTOR.map((sect) => {
            let count = 0;
            jobListings.forEach(job => {
                if (sect === job.sector) {
                    count++;
                }
            });
            return {
                name: sect,
                count
            };
        });
        res.json(values);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get("/job_type_chart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { month, year } = req.query; // Get the month as a number from the query paramete
        if (!month || !year) {
            throw new Error();
        }
        // Convert the month to a JavaScript Date object
        const startDate = new Date(+year, +month - 1, 1); // month is 0-based, so subtract 1
        const endDate = new Date(+year, +month, 0, 23, 59, 59); // Last day of the month, 23:59
        // Create a query to find job listings within the specified month
        const jobListings = yield job_listing_1.default.find({
            createdAt: {
                $gte: startDate,
                $lte: endDate,
            }
        });
        const values = job_listing_1.JOB_TYPES.map((type) => {
            let count = 0;
            jobListings.forEach(job => {
                if (type === job.type) {
                    count++;
                }
            });
            return {
                name: type,
                value: count
            };
        });
        res.json(values);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobListing = yield job_listing_1.default.findById(req.params.id);
        if (!jobListing) {
            return res.status(404).json({ message: "Job listing not found" });
        }
        res.json(jobListing);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
