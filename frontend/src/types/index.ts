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
