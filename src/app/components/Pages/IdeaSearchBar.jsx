'use client'
import { Search } from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';
import React, { useState } from 'react';

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const IdeaSearchBar = ({ onSearchChange }) => {

    const [searchText, setSearchText] = useState('');
    const handleSearchInput = (e) => {

        const value = e.target.value;
        setSearchText(value);

        if (onSearchChange) {
            onSearchChange(value);
        }

    };



    return (
        <div>
            <div className="relative flex-1 w-full flex items-center bg-[#F8FAFC] rounded-xl px-4 py-2.5 border border-transparent focus-within:border-[#4F46E5]/30 focus-within:bg-white transition-all">

                <Search className="w-4.5 h-4.5 text-[#94A3B8] shrink-0 mr-3" />

                <input type="text" value={searchText} onChange={handleSearchInput} placeholder="Search ideas..." className={`w-full bg-transparent text-[#0F172A] text-sm placeholder:text-[#94A3B8] focus:outline-none ${jetBrainsMono.className}`} />

            </div>
        </div>
    );
};

export default IdeaSearchBar;