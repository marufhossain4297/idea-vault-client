'use client'
import FeaturedCard from '@/app/components/Pages/FeaturedCard';
import { authClient } from '@/lib/auth-client';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlinePencilAlt } from 'react-icons/hi';

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
    console.log(user);
    const id = user?.id
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:8000/idea/${id}`)
            .then(res => res.json())
            .then(data => setIdeas(data))
            .catch(err => console.error(err));
    }, [id]);

    console.log(ideas);

    return (
        <div className='w-11/12 mx-auto lg:w-full mt-8 lg:mt-0'>
            <h2 className={`text-4xl font-bold ${hankenGrotesk.className}`}>My Ideas</h2>
            <p className='text-[#6A7282] text-[17px] mt-1'>Manage and edit your submitted startup concepts.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
                {ideas.map(idea =>

                    <div key={idea._id} className="border border-[#d8d8c4] rounded-2xl bg-[#F9F9FF] flex flex-col h-full overflow-hidden">

                        <div className="h-48 w-full relative">
                            <Image
                                src={idea?.image}
                                alt={idea?.title}
                                fill
                                className="object-cover rounded-t-2xl"
                            />
                        </div>

                        <div className="p-5 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className={`${hankenGrotesk.className} font-bold text-[18px] mb-2`}>
                                    {idea?.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {idea?.shortdescription}
                                </p>
                            </div>

                            <div className="pt-4 gap-3 items-center justify-between flex mt-4 border-t border-gray-200 font-medium text-gray-700">

                                <div className='flex items-center gap-2'>
                                    <div className="w-10.5 h-10.5 relative shrink-0">
                                        <Image
                                            src={idea?.userImage}
                                            alt={idea?.name}
                                            fill
                                            sizes="42px"
                                            className='rounded-full object-cover'
                                        />
                                    </div>
                                    <p className={`text-black text-sm ${jetBrainsMono.className} font-medium`}>{idea?.name}</p>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 mt-3 items-center gap-2'>
                                <Link className='px-4 py-2 text-white font-semibold bg-[#3525CD] rounded-xl shadow-none border-none btn' href={`/ideas/details/${idea._id}`}>View Details <FiArrowUpRight size={20} /> </Link>


                                <button className={`px-4 py-2 border-[#3525CD] font-medium text-[#3525CD] rounded-xl flex gap-2.5 items-center shadow-none border btn ${jetBrainsMono.className}`}><HiOutlinePencilAlt className="text-xl" /> Edit Idea</button>
                            </div>

                        </div>
                    </div>

                )}
            </div>

        </div>
    );
};

export default MyIdeas;