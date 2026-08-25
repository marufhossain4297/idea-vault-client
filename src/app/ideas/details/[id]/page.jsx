import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { HiOutlinePencilAlt } from "react-icons/hi";

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const DetailsPage = () => {
    return (
        <div className='my-12 w-11/12 mx-auto'>
            <div className='flex justify-between items-center'>
                <Link href={'/ideas'} className='flex items-center gap-1 text-[#464555]'> <FaArrowLeft /> Back to Vault</Link>

                <div className='flex items-center gap-4'>
                    <Link href={'/sign-up'}>
                        <button className={`px-4 py-2 border-[#3525CD] font-medium text-[#3525CD] rounded-xl flex gap-2.5 items-center shadow-none border btn ${jetBrainsMono.className}`}><HiOutlinePencilAlt className="text-xl" /> Edit Idea</button>
                    </Link>

                    <Link href={'/sign-up'}>
                        <button className={`px-4 py-2 text-white font-medium bg-[#3525CD] rounded-xl shadow-none border-none btn ${jetBrainsMono.className}`}>Share</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;