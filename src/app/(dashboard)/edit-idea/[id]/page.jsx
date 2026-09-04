import EditIdea from '@/app/components/Pages/EditIdea';
import { auth } from '@/lib/auth';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import React from 'react';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

const EditPage = async ({ params }) => {

    const { id } = await params

    const token = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:8000/ideas/${id}`, {
        headers: {
            authorization: `${token.token}`
        }
    })
    const idea = await res.json()

    return (
        <div>
            <div>
                <h2 className={`md:text-5xl text-4xl font-bold ${hankenGrotesk.className}`}>Edit your Idea</h2>

                <p className='text-[18px] mb-8 text-[#464555] mt-2'>Formalize your concept and secure it in the vault.</p>
            </div>

            <div>
                <EditIdea idea={idea} />
            </div>
        </div>
    );
};

export default EditPage;