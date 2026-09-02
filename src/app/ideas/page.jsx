import React from 'react';
import { FieldError, Input, Label, SearchField, TextField } from "@heroui/react";
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import FeaturedCard from '../components/Pages/FeaturedCard';
import IdeaFilterBar from '../components/Pages/IdeaFilterBar';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const IdeasPage = async () => {

    const res = await fetch('http://localhost:8000/ideas')
    const datas = await res.json()

    return (
        <div className='w-11/12 mx-auto mt-10 mb-24'>
            <h2 className={`${hankenGrotesk.className} font-bold text-3xl`}>All Ideas</h2>

            <div className="mt-5">
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