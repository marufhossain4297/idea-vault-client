'use client'
import FeaturedCard from '@/app/components/Pages/FeaturedCard';
import { authClient } from '@/lib/auth-client';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});


const MyIdeas = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user
    

    return (
        <div>
            <h2 className={`text-4xl font-bold ${hankenGrotesk.className}`}>My Ideas</h2>
            <p className='text-[#6A7282] text-[17px] mt-1'>Manage and edit your submitted startup concepts.</p>
            




        </div>
    );
};

export default MyIdeas;