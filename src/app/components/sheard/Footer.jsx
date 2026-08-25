'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import qr from '@/app/images/qr.png';
import { Button, Modal } from '@heroui/react';
import { RiMapPin2Line } from "react-icons/ri";
import { Hanken_Grotesk } from 'next/font/google';
import { FaLightbulb } from "react-icons/fa";
import { MdMailOutline, MdOutlineCall, MdOutlineQrCode2 } from "react-icons/md";

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const Footer = () => {
    return (
        <div className='bg-[#E9EDFF]'>
            <div className='w-11/12 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div>
                    <div className="flex items-center gap-2 text-[#3525CD]">
                        <FaLightbulb className='text-3xl' />
                        <p className={`text-2xl font-bold ${hankenGrotesk.className}`}>IdeaVault</p>
                    </div>

                    <p className='my-6 w-11/12 text-[#464555]'>
                        TThe most trusted platform for innovative startup concepts, collaborative validation, and secure IP feedback.
                    </p>

                    <Modal>
                        <Button className="text-[#3525CD] text-2xl bg-[#4635E2]/10 hover:border border-[#3525CD] rounded-full min-w-0 w-14 h-14 flex items-center justify-center transition-colors">
                            <MdOutlineQrCode2 className='size-7' />
                        </Button>

                        <Modal.Backdrop
                            className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
                            variant="blur"
                        >
                            <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px] p-6 text-center flex flex-col items-center">
                                    <Modal.Header className="flex flex-col items-center gap-2 w-full">
                                        <div className="p-3 bg-[#4635E2]/10 text-[#4635E2] rounded-full">
                                            <MdOutlineQrCode2 className="size-6" />
                                        </div>
                                        <Modal.Heading className={`text-xl font-bold text-[#4635E2] ${hankenGrotesk.className}`}>
                                            Scan & Browse
                                        </Modal.Heading>
                                        <p className="text-xs text-gray-500">
                                            Scan this QR code on your phone to open Idea Vault.
                                        </p>
                                    </Modal.Header>

                                    <Modal.Body className="w-full flex justify-center py-4">
                                        {/* <div className="p-3 bg-gray-50 border border-gray-100 rounded-2xl shadow-inner">
                                            <Image
                                                src={qr}
                                                alt="IdeaVault Mobile QR Code"
                                                width={200}
                                                height={200}
                                                className="rounded-lg object-contain"
                                            />
                                        </div> */}
                                    </Modal.Body>

                                    <Modal.CloseTrigger />
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                </div>

                <div>
                    <h2 className={`text-2xl text-[#3525CD] font-bold ${hankenGrotesk.className}`}>Quick Links</h2>
                    <ul className='text-[#464555] mt-6 space-y-4'>
                        <li>
                            <Link href={'/animals'} className="hover:text-black transition-colors cursor-pointer">Home</Link>
                        </li>
                        <li>
                            <Link href={'/animals'} className="hover:text-black transition-colors cursor-pointer">Browse Ideas</Link>
                        </li>
                        <li>
                            <Link href={'/how-it-works'} className="hover:text-black transition-colors cursor-pointer">How it Works</Link>
                        </li>
                        <li>
                            <Link href={'/categories'} className="hover:text-black transition-colors cursor-pointer">Categories</Link>
                        </li>
                        <li>
                            <Link href={'/trending-concepts'} className="hover:text-black transition-colors cursor-pointer">Trending Concepts</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className={`text-2xl text-[#3525CD] font-bold ${hankenGrotesk.className}`}>Support</h2>
                    <ul className='text-[#464555] mt-6 space-y-4'>
                        <li>
                            <Link href={'/booking'} className="hover:text-black transition-colors cursor-pointer">Contact Us</Link>
                        </li>
                        <li>
                            <Link href={'/faqs'} className="hover:text-black transition-colors cursor-pointer">FAQs</Link>
                        </li>
                        <li>
                            <Link href={'/privacy-policy'} className="hover:text-black transition-colors cursor-pointer">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href={'/terms-of-service'} className="hover:text-black transition-colors cursor-pointer">Terms of Service</Link>
                        </li>
                        <li>
                            <Link href={'/platform-guidelines'} className="hover:text-black transition-colors cursor-pointer">Platform Guidelines</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className={`text-2xl text-[#3525CD] font-bold ${hankenGrotesk.className}`}>Contact Info</h2>
                    <ul className='text-[#464555] mt-6 space-y-4'>
                        <li className='flex gap-3 items-center'><MdMailOutline className='text-2xl' /> codeworld2026@gmail.com</li>
                        <li className='flex gap-3 items-center'><MdOutlineCall className='text-2xl' /> +880 1234 567 890</li>
                        <li className='flex gap-3 items-center'><RiMapPin2Line className='text-2xl' /> Gulshan-2, Dhaka, Bangladesh</li>
                    </ul>
                </div>

            </div>
            <hr className='w-11/12 mx-auto text-[#C7C4D8]' />
            <div>
                <p className='text-[#464555] text-center py-6 text-sm'>
                    &copy; 2026 IdeaVault. All Rights Reserved. Built for innovators, powered by modern technology.
                </p>
            </div>
        </div>
    );
};

export default Footer;