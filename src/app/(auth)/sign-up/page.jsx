'use client'
import Link from 'next/link';
import { Eye } from 'lucide-react';
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { EyeSlash } from '@gravity-ui/icons';
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { FieldError, Input, Label, TextField } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const SignUpPage = () => {
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        const { name, email, image, password } = data

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image
        });

    }
    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="relative flex items-center justify-center py-20">

            <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-150 bg-[#6366F1]/20 rounded-full blur-[120px] -z-10" />

            <div className='relative z-10 w-11/12 md:w-7/12 lg:w-5/12 p-8 border rounded-2xl border-[#C7C4D8] bg-white'>

                <div className='text-center'>
                    <h2 className={`${hankenGrotesk.className} text-[32px] font-bold mb-1`}>Create your Vault</h2>
                    <p className='text-[#464555] mb-8'>Secure your intellectual property today.</p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col md:gap-4.5 gap-8">
                    <TextField isRequired name='name' type="text">
                        <Label className={`text-[15px] ${jetBrainsMono.className} font-semibold text-black`}>Full Name</Label>
                        <div className="relative flex items-center">
                            <FaRegUser className="absolute z-10 left-4 text-[#6C696D] text-[18px]" />

                            <Input className="border pl-10 w-full shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4 rounded-xl" placeholder="Jane Doe" />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name='email'
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className={`text-[15px] ${jetBrainsMono.className} font-semibold text-black`}>Email Address</Label>
                        <div className='relative flex items-center'>
                            <MdOutlineEmail className="absolute z-10 left-4 text-[#6C696D] text-xl" />
                            <Input className="border pl-10 w-full shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4 rounded-xl" placeholder="email@example.com" />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField isRequired name='image' type="url">
                        <Label className={`text-[15px] ${jetBrainsMono.className} font-semibold text-black`}>Image Url</Label>

                        <div className='relative flex items-center'>
                            <FaRegImage className="absolute z-10 left-4 text-[#6C696D] text-[18px]" />

                            <Input className="border pl-10 w-full shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4 rounded-xl" placeholder="https://www.image.com" />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name='password'
                        type={showPass ? "text" : "password"}
                        className="mb-2"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                            if (!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(value)) return "Password must contain at least one special character";
                            return null;
                        }}
                    >
                        <Label className={`text-[15px] ${jetBrainsMono.className} font-semibold text-black`}>Password</Label>
                        <div className='relative flex items-center'>
                            <MdOutlineLock className="absolute z-10 left-4 text-[#6C696D] text-xl" />
                            <Input className="border pl-10 w-full shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4 rounded-xl" placeholder="••••••••" />
                            <span className="absolute z-10 cursor-pointer right-3 text-black" onClick={() => setShowPass(!showPass)}>
                                {showPass ? <Eye size={17} /> : <EyeSlash />}
                            </span>
                        </div>
                        <FieldError />
                    </TextField>

                    <button className={`text-white bg-[#4F46E5] w-full rounded-2xl border-none py-4 text-[16px] font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90 ${jetBrainsMono.className}`} type="submit">
                        Create Account <FaArrowRight />
                    </button>
                </form>

                <div className={`divider my-6 text-[#777587] ${jetBrainsMono.className}`}>OR</div>

                <div>
                    <button onClick={googleSignIn} className={`${jetBrainsMono.className} flex w-full rounded-2xl bg-white border font-medium hover:bg-[#FAFAFA] border-[#C7C4D8] cursor-pointer items-center justify-center gap-2 px-4 py-3.5 mb-6 text-black`}>
                        <FcGoogle className="text-xl" />
                        <span>Login with Google</span>
                    </button>
                    <p className={`${jetBrainsMono.className} text-center text-sm text-black`}>
                        Already have a vault? <Link href={'/login'} className='text-[#3525CD] font-semibold'>Log in here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;