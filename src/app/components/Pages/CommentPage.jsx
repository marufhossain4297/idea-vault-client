'use client'
import React from 'react';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Avatar, Button, FieldError, Label, TextArea, TextField } from '@heroui/react';
import { MessageSquare, Upload } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Comment from './Comment';
import { toast } from 'sonner';


const hankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
});

const CommentPage = ({ comments, id }) => {

    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const commentInfo = Object.fromEntries(formData.entries())
        const commentInfoWithUser = {
            userId: user?.id,
            email: user?.email,
            name: user?.name,
            ideaId: id,
            userImage: user?.image,
            comment: commentInfo.comment,
            createdAt: new Date().toISOString()
        }
        const res = await fetch('https://idea-vault-server-opal.vercel.app/comment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(commentInfoWithUser)
        })
        const data = await res.json()
        console.log(data);
        if (data) {
            window.location.reload()
        }
    }


    return (
        <div>
            <h2 className={`${hankenGrotesk.className} text-2xl border-b border-[#C7C4D8] font-semibold pb-5 mb-10.25`}>Discussion ({comments.length})</h2>

            <div className='p-4 border rounded-2xl border-[#C7C4D8]'>
                <form onSubmit={onSubmit}>
                    <TextField
                        name='comment' isRequired>
                        <TextArea
                            rows={4}
                            placeholder="Add a constructive comment..."
                            className="rounded-2xl placeholder:text-[#6B7280] shadow-none border border-[#C7C4D8] bg-[#E9EDFF]"
                        />
                        <FieldError />
                    </TextField>

                    <div className="text-right mt-4">
                        <Button className={`${jetBrainsMono.className} rounded-2xl px-4 font-semibold bg-[#3525CD] py-6`} type="submit"> <Upload /> Post Comment </Button>
                    </div>
                </form>
            </div>

            <div>
                {comments.length === 0
                    ?
                    <div className="bg-[#EAEFFF]/60 border border-[#C7C4D8] rounded-2xl py-23 px-6 flex flex-col items-center justify-center text-center mt-6 gap-3">

                        <div className="w-12 h-12 rounded-full bg-[#3525CD]/10 flex items-center justify-center text-[#3525CD]">
                            <MessageSquare className="w-6 h-6" />
                        </div>

                        <div className="space-y-1">
                            <h3 className={`${hankenGrotesk.className} text-3xl font-bold text-[#1E1A4D]`}>
                                No comments yet
                            </h3>
                            <p className="text-[17px] text-[#66637A]">
                                Be the first to share your thoughts on this idea!
                            </p>
                        </div>
                    </div>
                    :
                    <Comment comments={comments} />}
            </div>
        </div>
    );
};

export default CommentPage;