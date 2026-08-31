'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Hanken_Grotesk } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

export default function IdeaError({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service if needed
        console.error('Idea Page Error:', error);
    }, [error]);

    return (
        <div className="flex justify-center bg-[#F8FAFC] px-4 pt-16 pb-20">
            <div className="max-w-md w-full text-center bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 shadow-sm">

                {/* Warning Icon Badge */}
                <div className="mx-auto w-14 h-14 bg-red-50 text-red-500 border border-red-100 rounded-full flex items-center justify-center mb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>

                {/* Main Heading & Message */}
                <h2 className={`${hankenGrotesk.className} text-2xl font-bold text-[#0F172A] tracking-tight`}>
                    Failed to Load Idea
                </h2>

                <p className="text-[#64748B] text-sm mt-2 leading-relaxed">
                    We couldn&apos;t fetch the details for this idea. The server might be unreachable or the request timed out.
                </p>

                {/* Optional Tech Error Message preview */}
                {error?.message && (
                    <div className="mt-4 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs font-mono text-[#64748B] truncate">
                        IDEA NOT FOUND
                    </div>
                )}

                {/* Actions */}
                <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href={'/'}>
                        <button
                            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-sm transition-all shadow-md shadow-indigo-500/10 active:scale-95 text-center"
                        >
                            Go Back
                        </button>
                    </Link>

                    <Link
                        href="/ideas"
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#334155] font-medium text-sm transition-all active:scale-95 text-center"
                    >
                        Back to Ideas
                    </Link>
                </div>

            </div>
        </div>
    );
}