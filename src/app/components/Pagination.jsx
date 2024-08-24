// components/Pagination.js
import React from "react";
import classNames from "classnames";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const getPaginationItems = () => {
    if (totalPages <= 5) {
      return range(1, totalPages);
    }

    if (currentPage <= 3) {
      return [...range(1, 4), 'dots', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, 'dots', ...range(totalPages - 3, totalPages)];
    }

    return [1, 'dots', ...range(currentPage - 1, currentPage + 1), 'dots', totalPages];
  };

  return (
    <div className="relative w-full h-14 mt-4 flex justify-center p-4 font-square721-normal">
      <div className="absolute inset-0 bg-custom-gradient"></div>
      <div className="relative z-10 flex items-center">
        {getPaginationItems().map((item, index) => (
          <React.Fragment key={index}>
            {item === 'dots' ? (
              <span className="mx-2 text-white flex items-end">. . .</span>
            ) : (
              <button
                className={classNames(
                  "px-1 py-1 mx-1 rounded text-white transition-colors duration-200",
                  {
                    "text-base": true, // Base text color
                  }
                )}
                onClick={() => paginate(item)}
              >
                {item}
              </button>
            )}
            {index < getPaginationItems().length - 1 && (
              <div className="mx-1 h-full w-px bg-white"></div> // Divider between pagination items
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
