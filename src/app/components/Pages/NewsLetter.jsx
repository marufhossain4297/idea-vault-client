'use client'
import React from 'react';
import { Hanken_Grotesk } from 'next/font/google';
import { FieldError, Form, Input, TextField } from '@heroui/react';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const NewsLetter = () => {
    return (
        <div data-aos="fade-up" className='w-9/12 mx-auto text-center my-24 py-16 border border-[#F0F0F2] rounded-2xl shadow-[0_20px_50px_rgba(79,70,229,0.12)]'>
            <div className='text-center p-4'>
                <h2 className={`md:text-3xl text-2xl font-bold text-[#141B2B] ${hankenGrotesk.className}`}>Subscribe our Newsletter</h2>

                <p className={`text-[#464555] mt-4 ${hankenGrotesk.className}`}>Join 5,000+ innovators and receive weekly insights on trending startup concepts and <br />validation strategies.</p>
            </div>
            <div>
                <Form className='my-6 p-2 flex flex-wrap justify-center items-center gap-3'>
                    <TextField
                        isRequired
                        name="name"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <div className="relative flex items-center">
                            <Input
                                placeholder="Enter your email"
                                className={`text-[#A2A2A8] md:w-85.75 py-4.5 px-5 border border-[#E7E7E7] rounded-2xl ${hankenGrotesk.className}`}
                            />
                        </div>
                        <FieldError />
                    </TextField>

                    <button className={`px-6 py-6.5 text-[17px] text-white font-semibold bg-[#4F46E5] rounded-2xl shadow-none border-none btn ${hankenGrotesk.className}`}>Subscribe</button>
                </Form>
                <p className={`${hankenGrotesk.className} font-medium text-[#696A74] text-sm`}>We care about your data in our <a className='underline' href="/privacy-policy">privacy policy.</a></p>
            </div>
        </div>
    );
};

export default NewsLetter;