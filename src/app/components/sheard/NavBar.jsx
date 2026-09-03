'use client'
import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Hanken_Grotesk } from 'next/font/google';
import { IoMenu } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Drawer } from '@heroui/react';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import { X } from 'lucide-react';
import DashboardNavLink from './DashboardNavLink';
import { FaUser } from 'react-icons/fa6';
import { TbLogout } from "react-icons/tb";
import { toast } from 'sonner';
import { redirect } from 'next/navigation';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const NavBar = () => {

    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user

    const logout = async () => {
        await authClient.signOut()
        toast.success('Logout success')
        redirect('/')
    }

    const links = (
        <>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/ideas'}>Ideas</NavLink>
            {/*  */}
        </>
    )

    return (
        <div className='shadow flex justify-between lg:py-0 lg:px-0 py-3 px-1 bg-white'>
            <div className='w-11/12 mx-auto flex items-center justify-between'>
                <div>
                    <Link href={'/'} className={`text-[32px] flex items-center gap-2.5 text-[#3525CD] font-bold ${hankenGrotesk.className}`}> <FaLightbulb className='text-[#3525CD]' /> IdeaVault </Link>
                </div>

                <div className='py-6 hidden lg:block'>
                    <ul className='text-[#464555] flex items-center gap-6'>
                        {links}
                        <NavLink href={'/profile'}>Dashboard</NavLink>
                    </ul>
                </div>

                <div className='items-center hidden lg:flex gap-2.5'>
                    {
                        user ?
                            <div className='flex items-center gap-5'>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn border-none bg-transparent shadow-none m-1">
                                        <div className='flex items-center gap-2.5'>
                                            <Avatar>
                                                <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
                                                <Avatar.Fallback>{user?.name.slice(0, 2)}</Avatar.Fallback>
                                            </Avatar>

                                            <p className='pl-0 text-[17px] font-semibold'>{user?.name?.length > 5 ? `${user.name.slice(0, 5)}...` : user?.name}</p>

                                            <p><IoIosArrowDown className='text-xl' /></p>
                                        </div>
                                    </div>

                                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-20 w-52 p-2 shadow-sm">

                                        <DashboardNavLink className='flex items-center text-[17px] gap-2' href={'/profile'}><FaUser /> Profile</DashboardNavLink>

                                        <button onClick={logout} className='px-4 py-2 text-white font-semibold bg-[#FF383C] rounded-xl shadow-none border-none btn'>Sign Out <TbLogout className='text-[18px]' /></button>

                                    </ul>
                                </div>

                                <button onClick={logout} className='px-4 py-2 text-white font-medium bg-[#3525CD] rounded-xl shadow-none border-none btn'>Sign Out</button>
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

            <div className='lg:hidden'>
                <Drawer>
                    <Button className="bg-transparent text-black"><IoMenu className='text-3xl w-5.75 h-5.75' /></Button>
                    <Drawer.Backdrop>
                        <Drawer.Content placement="left">
                            <Drawer.Dialog>

                                <Drawer.Header>
                                    <Drawer.Heading>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                <Link href={'/'} className={`text-[32px] flex items-center gap-2.5 text-[#3525CD] font-bold ${hankenGrotesk.className}`}> <FaLightbulb className='text-[#3525CD]' /> IdeaVault </Link>
                                            </div>
                                            <div>
                                                <Button className="bg-transparent text-black" slot="close"> <X className='text-5xl' /> </Button>
                                            </div>
                                        </div>
                                    </Drawer.Heading>
                                </Drawer.Header>

                                <div className='border-t my-4.5 border-[#E5E5E5]'></div>

                                <Drawer.Body>

                                    <div className='flex items-center gap-2'>
                                        {user ? (
                                            <div className="flex items-center gap-3 border-b border-gray-100">
                                                <Image
                                                    src={user.image}
                                                    width={40}
                                                    height={40}
                                                    alt={user.name}
                                                    className="rounded-full"
                                                />
                                            </div>
                                        ) : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>}

                                        <div>
                                            <p>Logged in as</p>
                                            {
                                                user && (
                                                    <div>
                                                        <p className='font-semibold text-black'>{user.name}</p>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>

                                    <div className='border-t my-4.5 border-[#E5E5E5]'></div>

                                    <div>
                                        <ul className='text-[17px] flex flex-col space-y-6 text-[#3A3A3A] font-semibold'>
                                            {links}
                                            {user ?
                                                <>
                                                    <NavLink href={'/add-idea'}>Add Idea</NavLink>
                                                    <NavLink href={'/my-ideas'}>My Ideas</NavLink>
                                                    <NavLink href={'/my-interactions'}>My Interactions</NavLink>
                                                </>
                                                : ''
                                            }
                                            <NavLink href={'/profile'}>Profile</NavLink>
                                        </ul>
                                    </div>

                                </Drawer.Body>

                                <Drawer.Footer>
                                    <div>
                                        {
                                            user ?
                                                <div className='flex items-center gap-5'>
                                                    <button onClick={logout} className='px-4 py-2 text-white font-medium bg-[#3525CD] rounded-xl shadow-none border-none btn'>Sign Out</button>
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
                                </Drawer.Footer>

                            </Drawer.Dialog>

                        </Drawer.Content>

                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </div>
    );
};

export default NavBar;