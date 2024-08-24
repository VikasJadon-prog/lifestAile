"use client";

import React, { useState } from "react";
import SearchField from "../components/SearchField";
import ToolCompare from "../components/ToolCompare";
import { LuListFilter } from "react-icons/lu";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import AiToolCard from "../components/AiToolCard";
import data from '../../../assets/dataBase.json';
import Pagination from "../components/Pagination";

const toggleScroll = (isDisabled) => {
  document.body.style.overflow = isDisabled ? "hidden" : "auto";
};

const ToolListing = () => {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSorts, setSelectedSorts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleFilterClick = () => {
    const newComponent = visibleComponent === "filter" ? null : "filter";
    setVisibleComponent(newComponent);
    toggleScroll(newComponent !== null);
  };

  const handleSortClick = () => {
    const newComponent = visibleComponent === "sort" ? null : "sort";
    setVisibleComponent(newComponent);
    toggleScroll(newComponent !== null);
  };

  const handleClose = () => {
    setVisibleComponent(null);
    toggleScroll(false);
  };

  const handleFilterDone = (selectedItems) => {
    setSelectedFilters(selectedItems);
    handleClose();
    console.log("Selected Filters:", selectedItems);
  };

  const handleSortDone = (selectedItems) => {
    setSelectedSorts(selectedItems);
    handleClose();
    console.log("Selected Sorts:", selectedItems);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative z-1 px-4">
      <div className="p-3">
        <SearchField />
      </div>
      <div className="relative">
        <div className="flex justify-center items-center">
          <h1 className="text-white text-[3rem] font-azonix">AI TOOLS</h1>
        </div>
        <div className="absolute text-xl right-0 bottom-[.04em] flex justify-between items-center gap-x-3 text-white max-w-2xl font-square721-normal">
          <div
            className="rounded-lg px-3 py-.5 gap-x-2 flex justify-between items-center border border-white cursor-pointer"
            onClick={handleFilterClick}
          >
            <h2 className="">Filter</h2>
            <LuListFilter />
          </div>
          <div
            className="rounded-lg px-3 py-.5 gap-x-2 flex justify-between items-center border border-white cursor-pointer"
            onClick={handleSortClick}
          >
            <h2 className="">Sort</h2>
            <LuListFilter />
          </div>
        </div>
      </div>
      {visibleComponent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center" onClick={handleClose}>
          <div onClick={(e) => e.stopPropagation()} className="z-10 lg:w-[60%] w-[90%] rounded-2xl">
            {visibleComponent === "filter" && <Filter onClose={handleClose} onDone={handleFilterDone} />}
            {visibleComponent === "sort" && <Sort onClose={handleClose} onDone={handleSortDone} />}
          </div>
        </div>
      )}
      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {currentItems.map((item, index) => (
          <AiToolCard key={index} data={item} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
};

export default ToolListing;
