'use client'
import React, { useState } from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ProgressBar, ToggleButton } from '@heroui/react';
import { AiFillDislike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const Price = ({ idea }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isSelectedDisLike, setIsSelectedDisLike] = useState(false);

    return (
        <div>
            <div>
                <p className='border w-fit text-center text-[14px] py-1 mt-5 px-2.5 border-[#3525CD] text-[#3525CD] font-semibold bg-[#E9EDFF] rounded-full'>{idea?.category}</p>
            </div>

            <div className='mb-4 mt-6'>
                <p className={`text-[#464555] ${jetBrainsMono.className} text-[14px] mb-1`}>ESTIMATED BUDGET</p>
                <h2 className={`text-[#3525CD] font-bold text-xl`}>${idea?.budget}</h2>
            </div>

            {
                idea?.trustScore ? <div className='mb-5'>
                    <p className={`text-[#464555] ${jetBrainsMono.className} text-[14px] mb-1`}>TRUST SCORE</p>
                    <h2 className={`text-[#00687A] ${hankenGrotesk.className} flex items-center gap-1.5 font-bold text-xl`}> <RiVerifiedBadgeFill /> {idea?.trustScore}/100</h2>

                    <ProgressBar className="mt-1.5" value={idea?.trustScore}>
                        <ProgressBar.Track>
                            <ProgressBar.Fill className='bg-[#01687A]' />
                        </ProgressBar.Track>
                    </ProgressBar>

                </div> : ''
            }

            <div>
                <p className={`text-[#464555] ${jetBrainsMono.className} text-[14px] mb-1`}>TARGET AUDIENCE</p>
                <h2 className={`${hankenGrotesk.className}`}>{idea?.targetaudience}</h2>
            </div>

            {Array.isArray(idea?.tags) && idea.tags.length > 0 && (
                <div className="mt-4">
                    <p className={`text-[#464555] ${jetBrainsMono.className} text-[14px] mb-1`}>
                        TAGS
                    </p>
                    <div className="flex gap-2 flex-wrap items-center">
                        {idea.tags.map((tag) => (
                            <p
                                className="border text-[12px] py-1 px-2.5 border-[#3525CD] text-[#3525CD] font-semibold bg-[#E9EDFF] rounded-full"
                                key={tag}
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            )}
            <div className='grid grid-cols-2 gap-2 items-center'>

                <ToggleButton className={`${hankenGrotesk.className} text-[17px] font-semibold bg-none w-full rounded-md mt-4 text-white bg-[#571AC0]`} isSelected={isSelected} onChange={setIsSelected}>
                    {({ isSelected: selected }) => (
                        <>
                            {selected ? <AiFillLike /> : <AiOutlineLike />}
                            {selected ? "Liked" : "Like"}
                        </>
                    )}
                </ToggleButton>


                <ToggleButton className={`${hankenGrotesk.className} text-[17px] font-semibold bg-none w-full rounded-md mt-4 text-white bg-[#571AC0]`} isSelected={isSelectedDisLike} onChange={setIsSelectedDisLike}>
                    {({ isSelected: selected }) => (
                        <>
                            {selected ? <AiFillDislike /> : <AiOutlineDislike />}
                            {selected ? "Disliked" : "Dislike"}
                        </>
                    )}
                </ToggleButton>
            </div>
        </div>
    );
};

export default Price;