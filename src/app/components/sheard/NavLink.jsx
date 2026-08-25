'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname()

    const isActive = href === pathname

    return (
        <Link className={`${isActive ? 'border-b-2 font-semibold text-[#3525CD] border-[#3525CD]' : ''}`} href={href}>{children}</Link>
    );
};

export default NavLink;