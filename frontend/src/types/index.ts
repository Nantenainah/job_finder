export type JobType = "part-time" | "full-time" | "contract" | "remote";

export interface JobListing {
    _id: string;
    companyName: string;
    title: string;
    description: string;
    type: JobType;
    experience: {
        min: number;
        max: number;
    };
    responsibility: string;
}

export type Role = "applicant" | "recruiter" | "admin";

export interface StatsResponse {
    jobListingsCount: number;
    recruitersCount: number;
    applicantsCount: number;
    adminsCount: number;
    jobTypeStats: JobTypeStats[];
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
