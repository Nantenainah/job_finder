export type JobType =
    | "part-time"
    | "full-time"
    | "contract"
    | "remote"
    | "stage";

export interface JobListing {
    _id: string;
    recruiter: string;
    title: string;
    description: string;
    requirements: string;
    companyName: string;
    companyLogo: string;
    location: string;
    industry: string;
    applicationDeadline: string;
    employmentStartDate: string;
    skills: string;
    responsibility: string;
    type: string;
    sector: string;
    experience: {
        min: number;
        max: number;
        _id: string;
    };
    salary: {
        min: number;
        max: number;
        _id: string;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Role = "applicant" | "recruiter" | "admin";

export interface StatsResponse {
    jobListingsCount: number;
    recruitersCount: number;
    applicantsCount: number;
    adminsCount: number;
    jobTypeStats: JobTypeStats[];
    topMostWantedJobs: JobListing[];
    jobSectorStats: JobSectorStats[];
}

export interface JobSectorStats {
    name: string;
    count: number;
}

export interface JobTypeStats {
    name: string;
    count: number;
}

export interface Recruiter {
    email: string;
    username: string;
    lastName: string;
    firstName: string;
    password: string;
    companyName: string;
    phoneNumber: string;
    companyDescription: string;
    websiteUrl: string;
    logo: string;
    createdAt: string;
    updatedAt: string;
}
