export function applyFilters(data: any[], selectedFilters: string[]): any[] {
    return data.filter((job) => {
        return (
            selectedFilters.includes(job.statusJobs) ||
            selectedFilters.includes(job.experience) ||
            selectedFilters.includes(job.salaryrange)
        );
    });
}