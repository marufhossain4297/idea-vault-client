'use client';

import React, { useState } from 'react';
import { Search, Grid2X2, ArrowUpDown, ChevronDown } from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function IdeaFilterBar({ onSearch, onCategoryChange, onSortChange }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [sort, setSort] = useState('Newest');

  const categories = [
    'All Categories',
    'SaaS',
    'AI & ML',
    'E-commerce',
    'Fintech',
    'Healthtech'
  ];

  const sortOptions = [
    'Newest',
    'Oldest',
    'Most Upvoted',
    'Trending'
  ];

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (onSearch) onSearch(val);
  };

  const handleCategoryChange = (e) => {
    const val = e.target.value;
    setCategory(val);
    if (onCategoryChange) onCategoryChange(val);
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    setSort(val);
    if (onSortChange) onSortChange(val);
  };

  return (
    <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm flex flex-col md:flex-row items-center gap-2.5">
      
      {/* 1. Search Input Field */}
      <div className="relative flex-1 w-full flex items-center bg-[#F8FAFC] rounded-xl px-4 py-2.5 border border-transparent focus-within:border-[#4F46E5]/30 focus-within:bg-white transition-all">
        <Search className="w-4.5 h-4.5 text-[#94A3B8] shrink-0 mr-3" />
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search ideas..."
          className={`w-full bg-transparent text-[#0F172A] text-sm placeholder:text-[#94A3B8] focus:outline-none ${jetBrainsMono.className}`}
        />
      </div>

      {/* Divider (Desktop Only) */}
      <div className="hidden md:block h-6 w-[1px] bg-[#E2E8F0] mx-1" />

      {/* Right Controls Container */}
      <div className="flex items-center gap-2.5 w-full md:w-auto">
        
        {/* 2. Category Dropdown */}
        <div className="relative flex-1 md:flex-none">
          <div className="flex items-center bg-[#F8FAFC] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#0F172A] border border-transparent hover:bg-[#F1F5F9] transition-colors cursor-pointer min-w-[150px]">
            <Grid2X2 className="w-4 h-4 text-[#64748B] mr-2 shrink-0" />
            <span className={`text-xs sm:text-sm font-medium ${jetBrainsMono.className} truncate`}>
              {category}
            </span>
            <ChevronDown className="w-4 h-4 text-[#94A3B8] ml-auto shrink-0" />
          </div>
          
          <select
            value={category}
            onChange={handleCategoryChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Sort Dropdown */}
        <div className="relative flex-1 md:flex-none">
          <div className="flex items-center bg-[#F8FAFC] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#0F172A] border border-transparent hover:bg-[#F1F5F9] transition-colors cursor-pointer min-w-[130px]">
            <ArrowUpDown className="w-4 h-4 text-[#64748B] mr-2 shrink-0" />
            <span className={`text-xs sm:text-sm font-medium ${jetBrainsMono.className} truncate`}>
              {sort}
            </span>
            <ChevronDown className="w-4 h-4 text-[#94A3B8] ml-auto shrink-0" />
          </div>

          <select
            value={sort}
            onChange={handleSortChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
}