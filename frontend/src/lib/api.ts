const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL

export const getAllJobListings = async () => {
    const response = await fetch(BACKEND_URL + "/job-listings");
    const data = await response.json();
    return data;
}

export const getJobListing = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/job-listings/" + id);
    const data = await response.json();
    return data;
}

export const getRecruiter = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/recruiters/" + id);
    const data = await response.json();
    return data;
}

export const getApplicant = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/applicants/" + id);
    const data = await response.json();
    return data;
}

export const getAdmin = async (id: string) => {
    const response = await fetch(BACKEND_URL + "/admins/" + id);
    const data = await response.json();
    return data;
}

