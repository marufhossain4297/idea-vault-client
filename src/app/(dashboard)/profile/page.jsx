'use client'
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import { Upload } from 'lucide-react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const Profile = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='mx-auto lg:w-full w-11/12'>
            <div className='border lg:mt-0 mt-10 border-[#C7C4D8] rounded-2xl p-8'>
                <h2 className='md:text-4xl text-2xl font-semibold mb-2'>Welcome back, <span className='text-[#3525CC]'>{user?.name}</span>!</h2>
                <p className='text-[#464555] md:text-[18px]'>Your ideas are gaining traction. Here&apos;s what&apos;s happening today.</p>
            </div>
            <div className='border border-[#C7C4D8] rounded-2xl p-8 mt-15'>

                <div className='flex items-center gap-3 border-b pb-6 border-[#C7C4D8]'>
                    <div>
                        <Image className='rounded-full' width={90} height={90} src={user?.image} alt={user?.name} />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </div>
                </div>

                <Form className="flex flex-col mt-10 gap-4">

                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <TextField value={user?.name} isRequired name='title' type="text">
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Name</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Quantum Encrypted Cloud Storage" />

                                <FieldError />
                            </TextField>
                        </div>

                        <div>
                            <TextField isDisabled value={user?.email} name='email' isRequired>
                                <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Email</Label>

                                <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="E.g., Quantum Encrypted Cloud Storage" />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <TextField value={user?.image} isRequired name='image' type="url">
                        <Label className={`text-[18px] ${hankenGrotesk.className} font-semibold text-black`}>Image Url</Label>

                        <Input className="border shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="https://www.image.com" />

                        <FieldError />
                    </TextField>

                    <div className="text-right mt-4">
                        <Button className="rounded-2xl px-4 font-semibold bg-[#3525CD] py-6 text-white" type="submit"> <Upload /> Save change </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Profile;