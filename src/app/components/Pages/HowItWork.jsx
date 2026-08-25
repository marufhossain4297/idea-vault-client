import React from 'react';
import { LuClipboardCheck } from 'react-icons/lu';
import { Hanken_Grotesk } from 'next/font/google';
import { FiPlusCircle, FiTrendingUp } from 'react-icons/fi';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const HowItWork = () => {
    return (
        <div data-aos="fade-up" id='how-it-works' className='bg-[#F1F3FF]'>
            <div className='py-23.5 w-11/12 mx-auto'>
                <div className='text-center'>
                    <h2 className={`text-3xl font-bold text-[#141B2B] ${hankenGrotesk.className}`}>How Idea Validation Works</h2>

                    <p className='text-[#464555] mt-4 font-light'>From raw concept to validated blueprint, our structured workflow ensures your <br />intellectual property is treated with the seriousness it deserves.</p>
                </div>

                <div className='mt-16'>
                    <div className="mx-auto relative">

                        <div className="hidden lg:block absolute top-12 left-50 right-50 h-0.5 bg-[#E2E4FF]" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">

                            <div className="flex flex-col items-center text-center">

                                <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white/80 border border-[#E2E4FF]">
                                    <FiPlusCircle className="w-8 h-8 text-[#3525CD]" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-[#111827]">
                                    1. Share
                                </h3>

                                <p className="mt-3 text-[#464555] max-w-[320px]">
                                    Deposit your concept into a secure vault. Choose your privacy level: Public, Private, or Protected.
                                </p>
                            </div>


                            <div className="flex flex-col items-center text-center">

                                <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-[#3525CD]">
                                    <LuClipboardCheck className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-[#111827]">
                                    2. Validate
                                </h3>

                                <p className="mt-3 text-[#464555] max-w-[320px]">
                                    Gather structured feedback from our community of verified builders and industry experts.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">

                                <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white/80 border border-[#E2E4FF] ">
                                    <FiTrendingUp className="w-8 h-8 text-[#3525CD]" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-[#111827]">
                                    3. Scale
                                </h3>

                                <p className="mt-3 text-[#464555] max-w-[320px]">
                                    Use validation metrics to attract co-founders, secure initial funding, and build your MVP.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;