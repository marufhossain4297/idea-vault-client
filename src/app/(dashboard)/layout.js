'use client'
import React from 'react';
import { FaCommentAlt, FaRegCommentAlt, FaRegUser } from "react-icons/fa";
import DashboardNavLink from '../components/sheard/DashboardNavLink';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { MdOutlineLightbulb } from "react-icons/md";
import { Hanken_Grotesk } from 'next/font/google';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const links = (
    <>
        <DashboardNavLink href={'/profile'}> <FaRegUser /> Profile</DashboardNavLink>

        <DashboardNavLink href={'/my-ideas'}><MdOutlineLightbulb className='text-2xl font-bold' /> My Ideas</DashboardNavLink>

        <DashboardNavLink href={'/add-idea'}><Plus /> Add Idea</DashboardNavLink>

        <DashboardNavLink href={'/my-interactions'}><FaRegCommentAlt /> My Interactions</DashboardNavLink>
    </>
)

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const DeshboardLayout = ({ children }) => {
    const { data: session, isPending, error } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="drawer lg:drawer-open min-h-screen">

            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            
            
            <div className="drawer-content flex flex-col">
                
                <div className="hidden p-4">
                    <label htmlFor="my-drawer-3" className="btn btn-sm drawer-button">
                        Open drawer
                    </label>
                </div>


                <div className="lg:p-8 w-full">
                    {children}
                </div>
            </div>


            <div className="drawer-side border-r border-[#C7C4D8] bg-[#F2F3FF]">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                
                <div className="w-72 p-4 min-h-full">
                    
                    <div className='flex border-b border-[#CECCE0] pb-6 mt-3.5 items-center gap-2'>
                        {user ? (
                            <div className="flex items-center gap-3">
                                <Image
                                    src={user.image}
                                    width={40}
                                    height={40}
                                    alt={user.name || "User"}
                                    className="rounded-full"
                                />
                            </div>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        )}

                        <div>
                            {user && <p className='font-bold text-[17px] text-black'>{user.name}</p>}
                            <p className="text-sm text-gray-600">{user?.email}</p>
                        </div>
                    </div>


                    <div className="mt-6 mb-4">
                        <Link href="/add-idea" className='flex items-center justify-center gap-2 text-white bg-[#4F46E5] w-[160px] px-4 py-2.5 font-bold rounded-xl hover:bg-[#4338ca] transition-colors'>
                            <Plus /> Add Idea
                        </Link>
                    </div>


                    <ul className="menu pl-0 space-y-3 mt-5 w-full">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default DeshboardLayout;