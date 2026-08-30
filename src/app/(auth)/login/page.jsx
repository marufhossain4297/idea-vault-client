'use client'
import Link from 'next/link';
import { Eye } from 'lucide-react';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { EyeSlash } from '@gravity-ui/icons';
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Button, FieldError, Input, Label, TextField } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
})

const LoginPage = () => {
    const [showPass, setShowPass] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        const { email, password } = data

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: '/'
        });

    }
    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className='relative flex items-center justify-center py-20'>

            <div className="absolute hidden lg:block top-100 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-150 bg-[#6366F1]/20 rounded-full blur-[120px] -z-10" />

            <div className='z-10 w-11/12 md:w-7/12 lg:w-5/12 p-8 border rounded-2xl border-[#C7C4D8] bg-white'>

                <div className='text-center'>
                    <h2 className={`${hankenGrotesk.className} text-[32px] font-bold mb-1`}>Welcome Back</h2>
                    <p className='text-[#464555] mb-8'>Securely access your startup vault.</p>
                </div>

                <div>
                    <form onClick={onSubmit} className="flex flex-col md:gap-4.5 gap-8">

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
                            className=""
                        >
                            <Label className={`text-[15px] font-medium ${jetBrainsMono.className} font-semibold text-black`}>Email Address</Label>

                            <div className='relative flex items-center'>
                                <MdOutlineEmail className="absolute z-3 left-4 text-[#6C696D] text-xl" />

                                <Input className="border pl-10 w-full shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="email@example.com" />
                            </div>

                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name='password'
                            type={showPass ? "text" : "password"}
                            className="mb-6"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                if (!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(value)) {
                                    return "Password must contain at least one special character: !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
                                }
                                return null;
                            }}
                        >
                            <div className='flex justify-between items-center'>
                                <Label className={`text-[15px] font-medium ${jetBrainsMono.className} font-semibold text-black`}>Password</Label>

                                <Link className={`text-[12px] text-[#3525CD] font-medium ${jetBrainsMono.className}`} href={'/forgot-password?'}>Forgot password?</Link>
                            </div>

                            <div className='relative flex items-center'>
                                <MdOutlineLock className="absolute z-3 left-4 text-[#6C696D] text-xl" />

                                <Input className="border pl-10 w-full shadow-none border-[#C7C4D8] py-3.5 placeholder:text-[#777587] px-4" placeholder="••••••••" />

                                <span className="absolute z-3 cursor-pointer right-3" onClick={() => setShowPass(!showPass)}>{showPass ? <Eye size={17} /> : <EyeSlash />}</span>
                            </div>

                            <FieldError />
                        </TextField>

                        <button className={`text-white mb-8 bg-[#4F46E5] w-full rounded-2xl border-none btn py-6 text-[16px] font-normal shadow-none ${jetBrainsMono.className}`} type="submit"> Log In <FaArrowRight /> </button>
                    </form>
                    <div className={`divider mb-10 text-[#777587] ${jetBrainsMono.className}`}>OR</div>
                    <div className="">
                        <div className="duration-2000">
                            <button onClick={googleSignIn} className={`${jetBrainsMono.className} flex mb-8 w-full rounded-2xl bg-white border font-medium hover:bg-[#FAFAFA] border-[#C7C4D8] btn cursor-pointer items-center gap-2 px-4 py-6.5 shadow-none`}>
                                <FcGoogle className="text-xl" />
                                <span>Login with Google</span>
                            </button>
                        </div>
                        <p className={`${jetBrainsMono.className} text-center`}>Don&apos;t have a vault? <Link href={'/sign-up'} className='text-[#3525CD] font-semibold'>Join here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;