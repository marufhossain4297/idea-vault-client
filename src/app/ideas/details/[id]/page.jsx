import { Avatar } from '@heroui/react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaTriangleExclamation } from "react-icons/fa6";
import { BsFillLightbulbFill } from "react-icons/bs";
import CommentPage from '@/app/components/Pages/CommentPage';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const DetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:8000/ideas/${id}`)
    const idea = await res.json()

    const commentRes = await fetch(`http://localhost:8000/comment/${id}`)
    const comments = await commentRes.json()

    const { budget, category, collaborations, createdAt, description, email, image, name, problemstatement, shortdescription, solution, tags, targetaudience, title, userId, userImage } = idea

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

            <div className='flex my-8 justify-between'>
                <div>
                    <div className='flex items-center gap-2.5'>
                        <Avatar>
                            <Avatar.Image className='object-cover' alt="John Doe" src={userImage} />
                            <Avatar.Fallback>{name[0]}</Avatar.Fallback>
                        </Avatar>
                        <div >
                            <p className='pl-0 font-semibold'>{name}</p>
                            <p className='text-[#464555]'>Lead Blockchain Architect</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={`${jetBrainsMono.className}`}>
                        {new Date(createdAt).toLocaleString("en-US", {
                            month: 'long',
                            year: 'numeric',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </div>

            <div>
                <h2 className={`${hankenGrotesk.className} text-5xl font-bold`}>{title}</h2>
                <div className='my-12 relative h-163.75 w-full'>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='rounded-2xl object-cover border border-[#C7C4D8]'
                    />
                </div>
            </div>

            <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                    <div className='p-8 mb-18 rounded-2xl border border-[#C7C4D8]'>
                        <p className='text-[#464555] mb-6'>
                            <span className='text-[#3525CD] flex gap-3 text-xl font-semibold mb-4'><FaTriangleExclamation /> The Problem</span>
                            {problemstatement}
                        </p>

                        <p className='text-[#464555] pt-8 border-t border-[#C7C4D8]'>
                            <span className='text-[#00687A] flex gap-3 text-xl font-semibold mb-4'><BsFillLightbulbFill /> Proposed Solution</span>
                            {solution}
                        </p>
                    </div>

                    <div>
                        <CommentPage id={id} comments={comments} />
                    </div>
                </div>

                <div className='col-span-3'>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;