import React, { ChangeEvent } from "react";
import { FilterData } from "../../constants/FilterData";
import { FaTimes } from "react-icons/fa";
import Checkbox from "../Checkbox/Checkbox";

type FilterProps = {
    selectedFilters: string[];
    setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const Filter: React.FC<FilterProps> = ({
    selectedFilters,
    setSelectedFilters,
}) => {
    const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.name;
        if (e.target.checked) {
            setSelectedFilters((prevSelectedFilters) => [
                ...prevSelectedFilters,
                value,
            ]);
        } else {
            setSelectedFilters((prevSelectedFilters) =>
                prevSelectedFilters.filter((filter) => filter !== value)
            );
        }
    };

    return (
        <div className="flex flex-col gap-4 pb-4 bg-lightColor mx-auto rounded-sm border-[1px] border-gray-200 sticky top-4">
            <div className="flex justify-between items-center border-b p-4">
                <h1 className="font-bold">Filtres</h1>
                <div
                    className="border px-2 py-1 cursor-pointer rounded-full"
                    onClick={() => setSelectedFilters([])}
                >
                    <FaTimes />
                </div>
            </div>
            {FilterData.map((filter) => {
                return (
                    <div className="px-4" key={filter.title}>
                        <h1 className="font-semibold text-[.95em]">
                            {filter.title}
                        </h1>
                        {filter.filters.map(({ id, value }) => (
                            <Checkbox
                                id={id}
                                name={id}
                                value={value}
                                key={id}
                                checked={selectedFilters.includes(id)}
                                onChange={handleOptionChange}
                                label={value}
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default Filter;
