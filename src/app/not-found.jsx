'use client'
import React from 'react';
import Link from 'next/link';
import { Hanken_Grotesk } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[#F8FAFC] px-4 py-16">
            <div className="max-w-md w-full text-center bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-12 shadow-sm">

                {/* Visual Graphic Badge */}
                <div className="relative flex justify-center items-center mb-6">
                    <div className="absolute md:mt-0 mt-10 -top-38 inset-0 flex items-center justify-center">
                        <span className="px-4 py-1.5 bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 rounded-full text-xs font-semibold tracking-wide">
                            Page Not Found
                        </span>
                    </div>

                    <div>
                        <h1 className="text-8xl sm:text-9xl font-extrabold text-[#F1F5F9] tracking-wider select-none">
                            404
                        </h1>
                    </div>
                </div>

                {/* Main Heading & Subtitle */}
                <h2 className={`${hankenGrotesk.className} text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight`}>
                    Lost in the Vault?
                </h2>

                <p className="text-[#64748B] text-sm sm:text-base mt-2 leading-relaxed">
                    The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-sm transition-all shadow-md shadow-indigo-500/10 active:scale-95 text-center"
                    >
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#334155] font-medium text-sm transition-all active:scale-95 text-center"
                    >
                        Go Back
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NotFound;