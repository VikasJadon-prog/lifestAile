"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

// Data for Sort component
const fetchSortData = () => {
  return [
    { title: "Price", content: ["Low to High", "High to Low"] },
    { title: "Number of Users", content: ["Low to High", "High to Low"] },
    { title: "Ratings", content: ["Low to High", "High to Low"] },
    { title: "Alphabetical Order", content: ["A-Z", "Z-A"] },
    { title: "Time", content: ["Recent to Oldest", "Oldest to Recent"] }
  ];
};

const Sort = ({ onClose, onDone }) => {
  const [sections, setSections] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());

  useEffect(() => {
    const data = fetchSortData();
    setSections(data);
  }, []);

  const handleItemClick = (sectionTitle, item) => {
    setSelectedItems(prev => {
      const newSelectedItems = new Set(prev);
      const key = `${sectionTitle}:${item}`;
      if (newSelectedItems.has(key)) {
        newSelectedItems.delete(key);
      } else {
        newSelectedItems.add(key);
      }
      return newSelectedItems;
    });
  };

  const isSelected = (sectionTitle, item) => {
    return selectedItems.has(`${sectionTitle}:${item}`);
  };

  const handleClear = () => {
    setSelectedItems(new Set());
  };

  const handleDone = () => {
    onDone(Array.from(selectedItems));
    onClose();
  };

  return (
    <div className="text-white bg-black rounded-[3rem] overflow-hidden bg-custom-gradient flex flex-col h-fit">
      <div className="bg-custom-gradient flex justify-center relative items-center p-2 px-[3.2rem]">
        <h2 className="text-3xl font-azonix">Sort</h2>
        <IoClose
          onClick={onClose}
          className="absolute right-12 text-4xl font-bold text-white cursor-pointer"
        />
      </div>
      <div className="flex-1 overflow-auto px-7 flex flex-col justify-start items-center scrollbar-thin">
        <main className="w-[95%]">
          <section className="row">
            <div className="tabs">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-white relative">
                  <header className="flex justify-between items-center py-2 select-none">
                    <h1 className="font-square721-normal">{section.title}</h1>
                  </header>
                  <div className="text-grey-darkest">
                    <ul className="flex gap-2 pb-2 font-100">
                      {section.content.map((item, idx) => (
                        <li
                          key={idx}
                          className={`flex w-fit justify-center items-center cursor-pointer rounded-xl py-1 px-2 ${isSelected(section.title, item) ? "bg-blue-500" : "bg-transparent border border-white"
                          }`}
                         
                          onClick={() => handleItemClick(section.title, item)}
                        >
                         
                          <h5 className="font-[300] text-xs text-white ">{item}</h5>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <div className="flex justify-end gap-4 p-4 px-[5rem] font-square721-normal">
        <button
          className="border border-white text-sm rounded-2xl px-2 py-.5 leading-0"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="border border-white text-sm rounded-2xl px-2 py-.5 leading-0"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Sort;
