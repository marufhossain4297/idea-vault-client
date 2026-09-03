import React from 'react';
import { FieldError, Input, Label, SearchField, TextField } from "@heroui/react";
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import FeaturedCard from '../components/Pages/FeaturedCard';
import IdeaFilterBar from '../components/Pages/IdeaFilterBar';
import IdeaSearchBar from '../components/Pages/IdeaSearchBar';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const getIdea = async (category = '', search = '') => {
    const res = await fetch(`http://localhost:8000/ideas?category=${category}&search=${search}`);
    const datas = await res.json()
    return datas
}

const IdeasPage = async ({ searchParams }) => {
    const sp = await searchParams
    console.log(sp);

    const datas = await getIdea(sp.search || '', sp.category || '');
    console.log(datas);

    return (
        <div className='w-11/12 mx-auto mt-10 mb-24'>
            <h2 className={`${hankenGrotesk.className} font-bold text-3xl`}>All Ideas</h2>

            <div className="w-full mt-5 bg-white border border-[#E2E8F0] rounded-2xl p-2.5 shadow-sm flex flex-col md:flex-row items-center gap-2.5">

                <IdeaSearchBar />

                <div className="hidden md:block h-6 w-px bg-[#E2E8F0] mx-1" />

                <IdeaFilterBar />

            </div>

            <div data-aos="fade-up" className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 my-8">
                {
                    datas.map(data => <FeaturedCard data={data} key={data._id} />)
                }
            </div>
        </div>
    );
};

export default IdeasPage;