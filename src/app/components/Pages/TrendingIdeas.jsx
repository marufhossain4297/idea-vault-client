import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import FeaturedCard from './FeaturedCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const TrendingIdeas = async () => {

    const token = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch('https://idea-vault-server-opal.vercel.app/ideas/featured', {
        headers: {
            authorization: `${token.token}`,
        }
    })
    const datas = await res.json()

    return (
        <div>
            <div className='w-11/12 mx-auto my-24'>
                <h2 className={`${hankenGrotesk.className} font-bold text-3xl`}>Trending Concepts</h2>
                <div className="flex justify-between items-center">
                    <p className='text-[#464555]'>High-potential ideas gaining traction this week.</p>

                    <Link href={'/ideas'}>
                        <button className={`text-[#3525CD] hidden cursor-pointer font-bold lg:flex items-center gap-2 ${jetBrainsMono.className}`}>View All <FaArrowRight /> </button>
                    </Link>
                </div>
                <div data-aos="fade-up" className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 my-8">
                    {
                        datas.map(data => <FeaturedCard data={data} key={data._id} />)
                    }
                </div>

                <Link href={'/ideas'}>
                    <button className={`bg-[#3525CD] text-white p-3 rounded-2xl w-full text-center cursor-pointer font-bold justify-center lg:hidden flex items-center gap-2 ${jetBrainsMono.className}`}>View All <FaArrowRight /> </button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingIdeas;