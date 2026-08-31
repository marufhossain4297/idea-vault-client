'use client'
import React from 'react';
import { Hanken_Grotesk } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

export default function Loading() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] px-4">
            <div className="flex flex-col items-center space-y-4">
                
                {/* Custom Glowing Pulse Ring Spinner */}
                <div className="relative flex items-center justify-center">
                    {/* Outer Pulsing Ring */}
                    <div className="w-14 h-14 rounded-full border-4 border-[#4F46E5]/20 animate-ping absolute"></div>
                    
                    {/* Inner Spinning Border */}
                    <div className="w-14 h-14 rounded-full border-4 border-[#E2E8F0] border-t-[#4F46E5] animate-spin"></div>
                    
                    {/* Center Lightbulb Icon */}
                    <svg 
                        className="w-6 h-6 text-[#4F46E5] absolute" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"/>
                    </svg>
                </div>

                {/* Animated Text */}
                <div className="text-center">
                    <h3 className={`${hankenGrotesk.className} text-base font-bold text-[#0F172A] tracking-wide`}>
                        Opening Vault...
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 animate-pulse">
                        Loading the latest startup ideas
                    </p>
                </div>

            </div>
        </div>
    );
}