import { Avatar } from '@heroui/react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const Comment = ({ comments }) => {
    console.log(comments);

    return (
        <div>
            {
                comments.map(comment =>
                    <div className='border border-[#D7D3F5] flex gap-3 items-center rounded-2xl p-5 mt-4.5' key={comment._id}>
                        <div>
                            <Avatar>
                                <Avatar.Image alt={comment?.name} src={comment?.image} />
                                <Avatar.Fallback className='text-xl'>{comment?.name[0]}</Avatar.Fallback>
                            </Avatar>
                        </div>

                        <div className='w-full'>
                            <div className='flex mb-1.5 justify-between items-center'>
                                <p className={`${hankenGrotesk.className} text-xl font-semibold text-[#3525CD] `}>{comment?.name}</p>

                                <p className={`${jetBrainsMono.className} text-sm`}>
                                    {new Date().toLocaleString("en-US", {
                                        month: 'long',
                                        year: 'numeric',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>

                            <div>
                                <p className='text-[#464555]'>{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Comment;