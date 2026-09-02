import React, { useState } from 'react';
import Comment from './Comment';
import DeleteComment from './DeleteComment';
import CommentEdit from './CommentEdit';
import { Avatar } from '@heroui/react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const CommentByUser = ({ comments }) => {
    const [editingId, setEditingId] = useState(null);
    return (
        <div>
            {
                comments.length === 0

                    ?

                    <div className="w-full flex flex-col items-center justify-center border-2 border-dashed border-[#C7C4D8] rounded-2xl p-8 sm:p-12 text-center bg-white mt-6">

                        <div className="w-16 h-16 bg-[#4F46E5]/10 text-[#4F46E5] rounded-2xl flex items-center justify-center mb-4 border border-[#4F46E5]/20 shadow-sm">
                            <MessageSquare className="w-8 h-8" />
                        </div>


                        <h3 className={`${hankenGrotesk.className} text-xl sm:text-2xl font-bold text-[#0F172A] mb-2`}>
                            No Comments Yet
                        </h3>

                        <p className="text-[#6A7282] text-sm max-w-sm mx-auto mb-6 leading-relaxed">
                            You haven&apos;t posted any comments on startup ideas. Explore shared concepts and join the conversation!
                        </p>


                        <Link
                            href="/ideas"
                            className={`${jetBrainsMono.className} flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-5 py-3 rounded-xl font-medium text-sm transition-all shadow-md shadow-indigo-500/10 active:scale-95`}
                        >
                            Explore Ideas
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                    </div>

                    :

                    comments.map(comment => {
                        const isEditing = editingId === comment._id

                        return (
                            <div className='border border-[#D7D3F5] flex gap-3 rounded-2xl pt-5 pl-5 pr-5 mt-4.5' key={comment._id}>
                                <div>
                                    <Avatar>
                                        <Avatar.Image alt={comment?.name} src={comment?.image} />
                                        <Avatar.Fallback className='text-xl'>{comment?.name[0]}</Avatar.Fallback>
                                    </Avatar>
                                </div>

                                <div className='w-full'>
                                    <div className='flex mb-1.5 justify-between items-center'>
                                        <p className={`${hankenGrotesk.className} text-xl font-semibold text-[#3525CD] `}>{comment?.name}</p>

                                        <p className={`${jetBrainsMono.className} md:block hidden text-sm`}>
                                            {new Date().toLocaleString("en-US", {
                                                month: 'long',
                                                year: 'numeric',
                                                day: 'numeric'
                                            })}
                                        </p>

                                        <p className={`${jetBrainsMono.className} md:hidden text-sm`}>
                                            {new Date().toLocaleString("en-US", {
                                                month: '2-digit',
                                                year: 'numeric',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[#464555]">{comment.comment}</p>
                                    </div>

                                    <div className='flex gap-4 text-[15px] items-center font-semibold justify-end'>
                                        {!isEditing
                                            ?

                                            <p onClick={() => setEditingId(comment._id)} className="cursor-pointer text-blue-600" > Edit </p>
                                            :

                                            <p onClick={() => setEditingId(null)} className="cursor-pointer text-blue-600" >cancle</p>

                                        }
                                        <DeleteComment comment={comment} />
                                    </div>

                                    {isEditing && (
                                        <div className="mt-2 mb-5">
                                            <CommentEdit comment={comment} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })
            }
        </div >
    );
};

export default CommentByUser;