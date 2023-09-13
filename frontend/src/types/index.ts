export interface JobListing {
    _id: string;
    companyName: string;
    title: string;
    description: string;
    type: "part-time" | "full-time" | "contract" | "remote";
    experience: {
        min: number;
        max: number;
    };
    responsibility: string;
}
