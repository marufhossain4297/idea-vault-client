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
import { AlignLeft, FileText, UserPlus, Users } from 'lucide-react';
import Collaboratioin from '@/app/components/Pages/Collaboratioin';
import Price from '@/app/components/Pages/Price';
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


const DetailsPage = async ({ params }) => {
    const { id } = await params

    const token = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:8000/ideas/${id}`, {
        headers:{
            authorization: `${token.token}`
        }
    })
    const idea = await res.json()

    const commentRes = await fetch(`http://localhost:8000/comment/${id}`, {
        headers:{
            authorization: `${token.token}`
        }
    })
    const comments = await commentRes.json()

    const { budget, category, collaborations, createdAt, description, email, image, name, problemstatement, shortdescription, solution, tags, targetaudience, title, userId, userImage } = idea

    return (
        <div data-aos="fade-up" className='my-12 w-11/12 mx-auto'>

            <div className='flex justify-between items-center'>
                <Link href={'/ideas'} className='flex items-center gap-3 text-[#464555]'> <FaArrowLeft /> Back to Vault</Link>

                <div className='flex items-center gap-4'>
                    <button className={`px-4 py-2 text-white font-medium bg-[#3525CD] rounded-xl shadow-none border-none btn ${jetBrainsMono.className}`}>Share</button>
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
                    <p className={`${jetBrainsMono.className} md:block hidden text-sm`}>
                        {new Date(createdAt).toLocaleString("en-US", {
                            month: 'long',
                            year: 'numeric',
                            day: 'numeric'
                        })}
                    </p>

                    <p className={`${jetBrainsMono.className} md:hidden text-sm`}>
                        {new Date(createdAt).toLocaleString("en-US", {
                            month: '2-digit',
                            year: 'numeric',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </div>

            <div>
                <h2 className={`${hankenGrotesk.className} md:text-4xl text-3xl lg:text-5xl font-bold`}>{title}</h2>
                <div className='my-12 relative md:h-115 lg:h-163.75 h-70 w-full'>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='rounded-2xl object-cover border border-[#C7C4D8]'
                    />
                </div>
            </div>


            <div className='grid gap-6 lg:grid-cols-12'>

                <div className='lg:col-span-8'>

                    <div className='grid lg:grid-cols-2 gap-4'>
                        <div className='border border-[#C7C4D8] rounded-2xl p-6 mb-8'>
                            <div className="flex gap-2.5 items-center mb-4">
                                <FileText className="w-5 h-5 text-[#8f4953]" />
                                <h2 className='text-xl font-semibold text-[#8f4953]'>Description</h2>
                            </div>
                            <p className='text-[#464555]'>{description}</p>
                        </div>

                        <div className='border border-[#C7C4D8] rounded-2xl p-6 mb-8'>
                            <div className="flex gap-2.5 items-center mb-4">
                                <AlignLeft className="w-5 h-5" />
                                <h2 className='text-xl font-semibold'>Short Description</h2>
                            </div>
                            <p className='text-[#464555]'>{shortdescription}</p>
                        </div>
                    </div>

                    <div className='p-8 mb-6 lg:mb-18 rounded-2xl border border-[#C7C4D8]'>
                        <p className='text-[#464555] mb-6'>
                            <span className='text-[#3525CD] items-center flex gap-3 text-xl font-semibold mb-4'><FaTriangleExclamation /> The Problem</span>
                            {problemstatement}
                        </p>

                        <p className='text-[#464555] pt-8 border-t border-[#C7C4D8]'>
                            <span className='text-[#00687A] items-center flex gap-3 text-xl font-semibold mb-4'><BsFillLightbulbFill /> Proposed Solution</span>
                            {solution}
                        </p>
                    </div>

                    <div className='lg:hidden mb-7'>

                        <div className='p-6 mb-6 rounded-2xl border border-[#C7C4D8]'>
                            <h2 className={`${hankenGrotesk.className} text-xl font-semibold border-b border-[#C7C4D8] pb-2`}>Investment Metrics</h2>
                            <div>
                                <Price idea={idea} key={idea._id} />
                            </div>
                        </div>

                        <div className='p-6 rounded-2xl border border-[#C7C4D8]'>
                            <h2 className={`${hankenGrotesk.className} text-xl font-semibold border-b border-[#C7C4D8] pb-2`}>Collaborators</h2>
                            <div>
                                {
                                    collaborations == 0

                                        ?
                                        <div className="flex flex-col items-center justify-center py-6 text-center">
                                            <div className="w-12 h-12 rounded-full bg-[#3525CD]/10 flex items-center justify-center text-[#3525CD] mb-3">
                                                <UserPlus className="w-6 h-6" />
                                            </div>
                                            <p className="text-[#1E1A4D] font-semibold text-base mb-1">
                                                No collaborators yet
                                            </p>
                                            <p className="text-[#6B7280] text-sm max-w-[240px]">
                                                Invite team members or developers to work on this idea together.
                                            </p>
                                        </div>

                                        :
                                        collaborations?.map(collaboration => <Collaboratioin key={collaboration.name} collaboration={collaboration} />)
                                }
                            </div>
                        </div>

                    </div>

                    <div>
                        <CommentPage id={id} comments={comments} />
                    </div>
                </div>

                <div className='lg:col-span-4 lg:block hidden'>

                    <div className='p-6 mb-6 rounded-2xl border border-[#C7C4D8]'>
                        <h2 className={`${hankenGrotesk.className} text-xl font-semibold border-b border-[#C7C4D8] pb-2`}>Investment Metrics</h2>
                        <div>
                            <Price idea={idea} key={idea._id} />
                        </div>
                    </div>

                    <div className='p-6 rounded-2xl border border-[#C7C4D8]'>
                        <h2 className={`${hankenGrotesk.className} text-xl font-semibold border-b border-[#C7C4D8] pb-2`}>Collaborators</h2>
                        <div>
                            {
                                collaborations == 0

                                    ?
                                    <div className="flex flex-col items-center justify-center py-6 text-center">
                                        <div className="w-12 h-12 rounded-full bg-[#3525CD]/10 flex items-center justify-center text-[#3525CD] mb-3">
                                            <UserPlus className="w-6 h-6" />
                                        </div>
                                        <p className="text-[#1E1A4D] font-semibold text-base mb-1">
                                            No collaborators yet
                                        </p>
                                        <p className="text-[#6B7280] text-sm max-w-[240px]">
                                            Invite team members or developers to work on this idea together.
                                        </p>
                                    </div>

                                    :
                                    collaborations?.map(collaboration => <Collaboratioin key={collaboration.name} collaboration={collaboration} />)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;