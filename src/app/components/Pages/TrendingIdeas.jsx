import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import FeaturedCard from './FeaturedCard';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const TrendingIdeas = async() => {

    const res = await fetch('http://localhost:8000/ideas/featured')
    const datas = await res.json()

    return (
        <div>
            <div className='w-11/12 mx-auto my-24'>
                <h2 className={`${hankenGrotesk.className} font-bold text-3xl`}>Trending Concepts</h2>
                <div className="flex justify-between items-center">
                    <p className='text-[#464555]'>High-potential ideas gaining traction this week.</p>
                    <Link href={'/ideas'}>
                        <button className={`text-[#3525CD] cursor-pointer font-bold flex items-center gap-2 ${jetBrainsMono.className}`}>View All <FaArrowRight /> </button>
                    </Link>
                </div>
                <div data-aos="fade-up" className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 my-8">
                    {
                        datas.map(data => <FeaturedCard data={data} key={data._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TrendingIdeas;