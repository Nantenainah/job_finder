import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Filter from "../../components/Filter/Filter";
import PostCard from "../../components/PostCard/PostCard";
import Search from "../../components/Search/Search";
import PostCardLoading from "../../components/PostCard/PostCardLoading";
import { getAllJobListings } from "../../lib/api";
import { applyFilters } from "../../lib/utils";

const Home: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const loadingItems = Array.from({ length: 9 }, (_, index) => <PostCardLoading key={index} />);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const data = await getAllJobListings();
        const filteredJobs = applyFilters(data, selectedFilters);
        setJobs(filteredJobs.length === 0 ? data : filteredJobs);
      } catch (error) {
        console.error("Erreur lors de la récupération des offres d'emploi :", error);
      }
    };
    fetchJobListings();
  }, []);

  return (
    <Container>
      <main className="py-[1rem]">
        <div className="w-full">
          <Search />
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
              <label htmlFor="sortBy" className="text-[.75rem] flex items-center">
                Trier par:
                <select name="sort" id="sortBy"
                  className="font-semibold bg-transparent outline-none">
                  <option value="recent-post">Post recent</option>
                  <option value="recent-post">Mieux payer</option>
                </select>
              </label>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {
                (jobs.length === 0) ?
                  loadingItems :
                  jobs.map((job: any, i: number) => {
                    return <PostCard key={i} {...job} />;
                  })
              }
            </div>
          </div>
        </div>
      </main >
    </Container >
  );
};

export default Home;
