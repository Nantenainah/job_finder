import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Filter from "../../components/Filter/Filter";
import PostCard from "../../components/PostCard/PostCard";
import Search from "../../components/Search/Search";
import PostCardLoading from "../../components/PostCard/PostCardLoading";
import { getAllJobListings, searchJobListings } from "../../lib/api";
import { applyFilters } from "../../lib/utils";
import { Queries } from "../../lib/api";
import { JobListing, JobType } from "../../types";
import Pagination from "../../components/Pagination/Pagination";

export type Filter = {
    types: JobType[], 
    salary: {
        min: number; 
        max: number; 
    }
    experience: {
        min:number;
        max:number
    }
}

const Home: React.FC = () => {
    const [jobs, setJobs] = useState<JobListing[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const loadingItems = Array.from({ length: 9 }, (_, index) => (
        <PostCardLoading key={index} />
    ));
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Nombre d'éléments à afficher par page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedJobs = jobs.slice(startIndex, endIndex);
    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
      };
          

    useEffect(() => {
        const fetchJobListings = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const data = await getAllJobListings();
                const filteredJobs = applyFilters(data, selectedFilters);
                setJobs(filteredJobs.length === 0 ? data : filteredJobs);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des offres d'emploi :",
                    error
                );
            }
        };
        fetchJobListings();
    }, [selectedFilters]);

    function onSearch({ title, location, type, minSalary }: any) {
        const queries: Queries = {};
        if (title) {
            queries.title = title;
        }
        if (location) {
            queries.location = location;
        }
        if (type && type !== "all") {
            queries.type = type;
        }
        if (minSalary && !isNaN(parseInt(minSalary))) {
            queries.salary_min = parseInt(minSalary);
        }
        (async () => {
            const data = await searchJobListings(queries);
            if (data.length > 0) {
                setJobs(data as JobListing[]);
            } else {
                alert("Pas de résultats pour vos recherche");
            }
        })();
    }

    // ...
    
    return (
      <Container>
        <main className="py-[1rem]">
          <div className="w-full">
            <Search onSearch={onSearch} />
          </div>
          <div className="flex gap-2 my-3">
            <div className="w-[30%] hidden sticky top-4 sm:block">
              <Filter
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            </div>
            <div className="w-full">
            <div className="flex items-center justify-between w-full px-1 py-4">
                            <h1 className="text-[.8rem] font-semibold">
                                {jobs.length} Annonces
                            </h1>
                            <label
                                htmlFor="sortBy"
                                className="text-[.75rem] flex items-center"
                            >
                                Trier par:
                                <select
                                    name="sort"
                                    id="sortBy"
                                    className="font-semibold bg-transparent outline-none"
                                >
                                    <option value="recent-post">
                                        Post recent
                                    </option>
                                    <option value="recent-post">
                                        Mieux payer
                                    </option>
                                </select>
                            </label>
                        </div>

              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {jobs.length === 0
                  ? loadingItems
                  : displayedJobs.map((job: JobListing, i: number) => {
                      return <PostCard key={i} {...job} />;
                    })}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(jobs.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </main>
      </Container>
    );
    
};

export default Home;
