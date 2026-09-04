import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from "react-icons/fi";
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

const FeaturedCard = ({ data }) => {
    return (
        <div className="border border-[#d8d8c4] rounded-2xl bg-[#F9F9FF] flex flex-col h-full overflow-hidden">

            <div className="h-48 w-full relative">
                <Image
                    src={data?.image}
                    alt={data?.title}
                    fill
                    className="object-cover rounded-t-2xl"
                />
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">

                <div className="flex justify-between items-center mb-4">
                    {
                        data?.category ? (<p className='border text-[12px] py-1 px-2.5 border-[#3525CD] text-[#3525CD] font-semibold bg-[#E9EDFF] rounded-full' key={data?.category}>{data?.category}</p>) : ''
                    }

                    <p className={`${jetBrainsMono.className}`}>
                        {new Date(data.createdAt).toLocaleString("en-UK", {
                            month: '2-digit',
                            year: 'numeric',
                            day: '2-digit',
                        })}
                    </p>
                </div>

                <div>
                    <h3 className={`${hankenGrotesk.className} font-bold text-[18px] mb-2`}>
                        {data?.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                        {data?.shortdescription}
                    </p>
                </div>

                <div className="pt-4 gap-3 items-center justify-between flex mt-4 border-t border-gray-200 font-medium text-gray-700">

                    <div className='flex items-center gap-2'>
                        <div className="w-10.5 h-10.5 relative shrink-0">
                            <Image
                                src={data?.userImage}
                                alt={data?.name}
                                fill
                                sizes="42px"
                                className='rounded-full object-cover'
                            />
                        </div>
                        <p className={`text-black text-sm ${jetBrainsMono.className} font-medium`}>{data?.name}</p>
                    </div>

                    <Link className='px-4 py-2 text-white font-semibold bg-[#3525CD] rounded-xl shadow-none border-none btn' href={`/ideas/details/${data._id}`}>View Details <FiArrowUpRight size={20} /> </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;