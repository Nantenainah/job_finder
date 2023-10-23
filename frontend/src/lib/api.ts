import { JobListing } from "../types";

const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;

export const getAllJobListings = async () => {
    const response = await fetch(BACKEND_URL + "/job-listings");
    const data: JobListing[] = await response.json();
    return data;
};

export const getJobListing = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/job-listings/" + id);
    const data: JobListing = await response.json();
    return data;
};

export const getRecruiter = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/recruiters/" + id);
    const data = await response.json();
    return data;
};

export const getApplicant = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/applicants/" + id);
    const data = await response.json();
    return data;
};

export const getAdmin = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/admins/" + id);
    const data = await response.json();
    return data;
};

export type Queries = {
    title?: string;
    location?: string;
    exp_min?: number;
    exp_max?: number;
    type?: "full-time" | "part-time" | "contract" | "remote";
    salary_min?: number;
    salary_max?: number;
};
export const searchJobListings = async (queries: Queries) => {
    const response = await fetch(
        BACKEND_URL +
            "/job-listings?" +
            new URLSearchParams({ ...(queries as any) })
    );
    const data: JobListing[] = await response.json();
    return data;
};

export const getStats = async ({ month,year }: { month: string,year:string }) => {
    const response = await fetch(
        BACKEND_URL +
            "/job-listings/stats?" +
            new URLSearchParams({ month, year })
    );
    const data: {name: string, count:number}[] = await response.json();
    return data;
};


export const getJobTypeStats = async ({ month,year }: { month: string,year:string }) => {
    const response = await fetch(
        BACKEND_URL +
            "/job-listings/job_type_chart?" +
            new URLSearchParams({ month, year })
    );
    const data: {name: string, value:number}[] = await response.json();
    return data;
};