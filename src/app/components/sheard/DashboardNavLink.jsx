'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardNavLink = ({ href, children }) => {
    const pathname = usePathname()

    const isActive = href === pathname

    return (
        <li><Link className={`${isActive ? 'font-semibold text-[17px] bg-[#4F46E5] text-[#DAD7FF] p-2.5 rounded-xl' : 'text-[#464555] text-[17px] transform hover:bg-[#DCE2F7] p-2.5 rounded-xl'}`} href={href}>{children}</Link></li>
    );
}; 

export default DashboardNavLink;