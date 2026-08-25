'use client'
import 'swiper/css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ideaImage from '@/image/ideaImage.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { Hanken_Grotesk } from 'next/font/google';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='bg-[linear-gradient(135deg,rgba(79,70,229,0.1)_0%,rgba(249,249,255,1)_50%,rgba(87,223,254,0.1)_100%)]'>
                    <div className='w-11/12 items-center py-24 mx-auto grid grid-cols-2 gap-12'>
                        <div>
                            <h2 className={`text-5xl font-bold text-[#3525CD] ${hankenGrotesk.className}`}>Vault Your Ideas, Spark <br />Innovation</h2>

                            <p className='text-[18px] font-light text-[#464555] mt-6 mb-8'>Securely store, share, and validate your startup concepts in a <br />high-trust environment. Join a community of forward-thinking <br />ntrepreneurs turning abstract thoughts into actionable blueprints.</p>

                            <Link href={'/ideas'}>
                                <button className='px-4 py-2 flex-1 text-white font-semibold flex gap-2.5 items-center bg-[#3525CD] rounded-xl shadow-none border-none btn'>Explore Ideas <FaArrowRight /> </button>
                            </Link>
                        </div>

                        <div>
                            <Image className='rounded-3xl' src={ideaImage} width={568} height={320} alt='Idea Image' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-[linear-gradient(135deg,rgba(245,158,11,0.15)_0%,rgba(255,251,235,1)_50%,rgba(168,85,247,0.15)_100%)]'>
                    <div className='w-11/12 items-center py-24 mx-auto grid grid-cols-2 gap-12'>
                        <div>
                            <h2 className={`text-5xl font-bold text-[#3525CD] ${hankenGrotesk.className}`}>
                                Collaborate & Build <br />With Top Innovators
                            </h2>

                            <p className='text-[18px] font-light text-[#464555] mt-6 mb-8'>
                                Connect with passionate co-founders, investors, and mentors. <br />Gather real-time feedback and refine your startup vision <br />from initial pitch to market launch.
                            </p>

                            <Link href={'/add-idea'}>
                                <button className='px-4 py-2 flex-1 text-white font-semibold flex gap-2.5 items-center bg-[#3525CD] rounded-xl shadow-none border-none btn'>
                                    Add Your Idea <FaArrowRight />
                                </button>
                            </Link>
                        </div>

                        <div>
                            <Image className='rounded-3xl' src={ideaImage} width={568} height={320} alt='Idea Image' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-[linear-gradient(135deg,rgba(16,185,129,0.15)_0%,rgba(240,253,244,1)_50%,rgba(59,130,246,0.15)_100%)]'>
                    <div className='w-11/12 items-center py-24 mx-auto grid grid-cols-2 gap-12'>
                        <div>
                            <h2 className={`text-5xl font-bold text-[#059669] ${hankenGrotesk.className}`}>
                                Protect & Validate <br />Your Breakthroughs
                            </h2>

                            <p className='text-[18px] font-light text-[#464555] mt-6 mb-8'>
                                Safeguard your intellectual property with secure digital vaulting. <br />Gain validation from verified experts before presenting <br />your project to global venture networks.
                            </p>

                            <Link href={'/profile'}>
                                <button className='px-4 py-2 flex-1 text-white font-semibold flex gap-2.5 items-center bg-[#059669] rounded-xl shadow-none border-none btn'>
                                    View Profile <FaArrowRight />
                                </button>
                            </Link>
                        </div>

                        <div>
                            <Image className='rounded-3xl' src={ideaImage} width={568} height={320} alt='Idea Image' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;