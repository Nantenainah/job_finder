import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-auto mb-10">
            <ul className="flex justify-center">
                {currentPage > 1 && (
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            className="mr-2 px-2 py-1 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
                        >
                            Precedent
                        </button>
                    </li>
                )}

                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            className={`px-2 py-1 mx-1 border rounded ${
                                number === currentPage
                                    ? "bg-blue-500 text-white"
                                    : "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-600"
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}

                {currentPage < totalPages && (
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            className="ml-2 px-2 py-1 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
                        >
                            Suivant
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
