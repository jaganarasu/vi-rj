import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center items-center mt-6 space-x-2">
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        className={`px-4 py-2 rounded-lg ${
          currentPage === index + 1
            ? "bg-pink-600 text-white"
            : "bg-gray-200"
        }`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
