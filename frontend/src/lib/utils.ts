export function applyFilters(data: any[], selectedFilters: string[]): any[] {

    
    return data.filter((job) => {
        const exp = job.experience.min +"-"+ job.experience.max;
        const sal = job.salary.min +"-" + job.salary.max;
        
        return (
            selectedFilters.includes(job.type) ||
            selectedFilters.includes(exp) ||
            selectedFilters.includes(job.salaryrange)
        );
    });
}