'use client'
import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Hanken_Grotesk } from 'next/font/google';
import { MdOutlineSecurity } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const NavBar = () => {

    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user

    const links = (
        <>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/ideas'}>Ideas</NavLink>
            <NavLink href={'/add-idea'}>Add Idea</NavLink>
            <NavLink href={'/profile'}>Profile</NavLink>
        </>
    )

    return (
        <div className='shadow bg-white'>
            <div className='w-11/12 mx-auto flex items-center justify-between'>
                <div>
                    <Link href={'/'} className={`text-[32px] flex items-center gap-2.5 text-[#3525CD] font-bold ${hankenGrotesk.className}`}> <FaLightbulb className='text-[#3525CD]' /> IdeaVault </Link>
                </div>

                <div className='py-6'>
                    <ul className='text-[#464555] flex items-center gap-6'>
                        {links}
                    </ul>
                </div>

                <div className='flex items-center gap-2.5'>
                    {
                        user ?
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-2.5'>
                                    <Avatar>
                                        <Avatar.Image alt="John Doe" src={user?.image} />
                                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                    </Avatar>
                                    <p className='pl-0 font-semibold'>{user.name}</p>
                                </div>

                                <button onClick={async () => await authClient.signOut()} className='px-4 py-2 text-white font-medium bg-[#3525CD] rounded-xl shadow-none border-none btn'>Sign Out</button>
                            </div>
                            :
                            <div className='gap-4 flex'>
                                <Link href={'/login'}>
                                    <button className='px-4 py-2 text-white font-medium bg-[#3525CD] rounded-xl shadow-none border-none btn'>Login</button>
                                </Link>

                                <Link href={'/sign-up'}>
                                    <button className='px-4 py-2 text-white font-medium bg-[#3525CD] rounded-xl shadow-none border-none btn'>Register</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;