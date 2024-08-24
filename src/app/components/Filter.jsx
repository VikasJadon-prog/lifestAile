"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

// Simulate fetching data from an API
const fetchData = () => {
  return [
    { title: "Categories", content: [
      "ChatBots", "Machine Learning", "Data Analytics", "Healthcare", "Finance", 
      "Marketing", "E-Commerce", "Education", "Creative Tools", "Legal", 
      "Transportation", "Agriculture", "Computer Vision", "Security", 
      "Human Resources", "Real Estate", "Energy"
    ] },
    { title: "Price", content: [
      "Free", "Freemium", "Subscription", "One-time pay"
    ] },
    { title: "Support", content: [
      "Email Support", "Live Chat", "Community Forum", "Phone Support"
    ] },
    { title: "Languages Supported", content: [
      "English", "Spanish", "Chinese", "Multilingual"
    ] },
    { title: "License type", content: [
      "Open Source", "Proprietary", "Subscription", "Freemium"
    ] },
    { title: "Security Features", content: [
      "Data Encryption", "Access Control", "Authentication", "Compliance Cert."
    ] }
  ];
};

const Filter = ({ onClose, onDone }) => {
  const [sections, setSections] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedItems, setSelectedItems] = useState(new Set());

  useEffect(() => {
    const data = fetchData();
    setSections(data);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <div className="text-white bg-black rounded-[3rem] overflow-hidden bg-custom-gradient flex flex-col h-[95vh]">
      <div className="bg-custom-gradient flex justify-center relative items-center p-2 px-[3.2rem]">
        <h2 className="text-3xl font-azonix">Filters</h2>
        <IoClose
          onClick={onClose}
          className="absolute right-12 text-4xl font-bold text-white cursor-pointer"
        />
      </div>
      <div className="flex-1 overflow-auto px-7 py-1 flex flex-col justify-start items-center border-t border-white scrollbar-thin">
        <main className="w-[95%]">
          <section className="row">
            <div className="tabs px-1 py-3">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-white relative">
                  <header
                    className="flex justify-between items-center py-2 cursor-pointer select-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h1 className="font-square721-normal">{section.title}</h1>
                    <IoIosArrowDown
                      className={`transition-transform transform text-3xl ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </header>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ${
                      openIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="text-grey-darkest">
                      <ul className="grid grid-cols-4 gap-3 pb-[1rem] pl-[1rem] font-100">
                        {section.content.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center cursor-pointer rounded-md"
                            onClick={() => handleItemClick(section.title, item)}
                          >
                            <div
                              className={`w-5 h-5 rounded-full mr-2 ${
                                isSelected(section.title, item) ? "bg-blue-500" : "bg-transparent border border-white"
                              }`}
                            />
                            <h5 className="font-[300] text-sm text-white max-w-2xl">{item}</h5>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Filter;
