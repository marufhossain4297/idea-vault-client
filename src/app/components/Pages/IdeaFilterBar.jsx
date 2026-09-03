'use client';

import React, { useState } from 'react';
import { Search, Grid2X2, ArrowUpDown, ChevronDown } from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const IdeaFilterBar = ({ onCategoryChange, onSortChange }) => {

  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSort, setSelectedSort] = useState('Newest');

  console.log(selectedSort);

  const categories = [
    'All Categories',
    'AI Tools',
    'Real Estate Tech',
    'Developer Tools',
    'Productivity',
    'Hardware & Health',
    'Fintech & SaaS',
    'No-Code',
    'CleanTech',
    'Design Tools',
    'HR Tech',
    'Connectivity',
    'HealthTech',
    'Cybersecurity',
    'E-commerce',
    'EventTech',
    'AI Media'
  ];

  const sortOptions = ['Newest', 'Oldest'];


  const handleCategorySelect = (e) => {
    const value = e.target.value;

    setSelectedCategory(value);

    if (onCategoryChange) {
      onCategoryChange(value);
    }

  };


  const handleSortSelect = (e) => {
    const value = e.target.value;
    setSelectedSort(value);

    if (onSortChange) {
      onSortChange(value);
    }

  };

  return (

    <div className="flex items-center gap-2.5 w-full md:w-auto">

      <div className="relative flex-1 md:flex-none">

        <div className="flex items-center bg-[#F8FAFC] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#0F172A] border border-transparent hover:bg-[#F1F5F9] transition-colors cursor-pointer min-w-42.5">

          <Grid2X2 className="w-4 h-4 text-[#64748B] mr-2 shrink-0" />

          <span className={`text-xs sm:text-sm font-medium ${jetBrainsMono.className} truncate`}> {selectedCategory} </span>

          <ChevronDown className="w-4 h-4 text-[#94A3B8] ml-auto shrink-0" />

        </div>

        <select value={selectedCategory} onChange={handleCategorySelect} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">

          {categories.map((category) => (<option key={category} value={category}> {category} </option>))}

        </select>

      </div>


      <div className="relative flex-1 md:flex-none">

        <div className="flex items-center bg-[#F8FAFC] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#0F172A] border border-transparent hover:bg-[#F1F5F9] transition-colors cursor-pointer min-w-32.5">

          <ArrowUpDown className="w-4 h-4 text-[#64748B] mr-2 shrink-0" />
          <span className={`text-xs sm:text-sm font-medium ${jetBrainsMono.className} truncate`}> {selectedSort} </span>
          <ChevronDown className="w-4 h-4 text-[#94A3B8] ml-auto shrink-0" />
        </div>

        <select
          value={selectedSort}
          onChange={handleSortSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          {sortOptions.map((sort) => (
            <option key={sort} value={sort}>
              {sort}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default IdeaFilterBar;